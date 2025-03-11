// @ts-nocheck
import { Request, Response } from "npm:express";
import pg from "npm:pg";
import { pool1 } from "./server.ts";
import express from "npm:express@^4.17";
import cors from "npm:cors";
import morgan from "npm:morgan";
const app = express();
const PORT = Number(Deno.env.get("PORT")) || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));

pool1
  .connect()
  .then((client: pg.PoolClient) => {
    console.log("Connected to database");
    return client;
  })
  .catch((err: Error) => {
    console.log(err);
  });

pool1.query(
  "create table if not exists register(fullname text,dob text,username text,gender text,email text,password text)"
);
pool1.query(
  "create table if not exists medicaldb(id BIGSERIAL PRIMARY KEY, name TEXT, price DOUBLE PRECISION, manufacturer_name TEXT, pack_size_label TEXT,short_composition1 TEXT)"
);
pool1.query(
  "create table if not exists delivery(id BIGSERIAL PRIMARY KEY,name TEXT,pack_size_label TEXT,manufacturer_name TEXT,order_by TEXT,quantity TEXT,delivered TEXT,DATE TEXT)"
);
app.post("/api/register", async (req: Request, res: Response) => {
  try {
    const { email, password, fullname, gender, dob, username } = req.body;
    const _result = await pool1.query(
      "insert into register(fullname,dob,username,gender,email,password) VALUES($1,$2,$3,$4,$5,$6)",
      [fullname, dob, username, gender, email, password]
    );

    res.json({ message: "registered successfully" });
  } catch (err) {
    console.log("Error in inserting register", err);
  }
});
app.get("/api/fetchdelivery", async (req: Request, res: Response) => {
  try {
    const result = await pool1.query(
      "SELECT * FROM public.delivery ORDER BY id asc limit 100"
    );
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
});
app.put("/api/deliveryupdate", async (req: Request, res: Response) => {
  try {
    const {
      id,
      name,
      pack_size_label,
      quantity,
      manufacturer_name,
      date,
      order_by,
      delivered,
    } = req.body;

    await pool1.query(
      "UPDATE delivery SET name=$2, pack_size_label=$3,quantity=$4, manufacturer_name=$5, date=$6,order_by=$7,delivered=$8 WHERE id=$1",
      [
        id,
        name,
        pack_size_label,
        quantity,
        manufacturer_name,
        date,
        order_by,
        delivered,
      ]
    );
    res.json({ message: "successfully updated" });
  } catch (error) {
    console.log("Error in updating delivery", error);
  }
});
app.post("/api/deliverypost", async (req: Request, res: Response) => {
  try {
    const {
      name,
      pack_size_label,
      manufacturer_name,
      order_by,
      quantity,
      delivered,
      date,
    } = req.body;

    const _result = pool1.query(
      "insert into delivery(name,pack_size_label,manufacturer_name,order_by,quantity,delivered,date) values($1,$2,$3,$4,$5,$6,$7)",
      [
        name,
        pack_size_label,
        manufacturer_name,
        order_by,
        quantity,
        delivered,
        date,
      ]
    );
    res.json({ message: "Delivered to the database successfuly" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/postmedicines", async (req: Request, res: Response) => {
  let _result: pg.QueryResult;
  try {
    // const max_value = await pool1.query("select max(id+1) from medicaldb");
    // console.log(max_value);

    // await pool1.query(
    //   `alter sequence medicaldb_id_seq restart with ${max_value}`
    // );
    const {
      name,
      price,
      manufacturer_name,
      pack_size_label,
      short_composition1,
    } = req.body;
    const { id } = req.body;
    console.log(short_composition1);

    if (id) {
      _result = await pool1.query(
        "insert into medicaldb(id,name,price,manufacturer_name,pack_size_label,short_composition1 ) VALUES($1,$2,$3,$4,$5,$6)",
        [
          id,
          name,
          price,
          manufacturer_name,
          pack_size_label,
          short_composition1,
        ]
      );
    } else {
      _result = await pool1.query(
        "insert into medicaldb(name,price,manufacturer_name,pack_size_label,short_composition1) VALUES($1,$2,$3,$4,$5)",
        [name, price, manufacturer_name, pack_size_label, short_composition1]
      );
    }
    res.json({ message: "medicines added successfully" });
  } catch (err) {
    console.log("Error in inserting medicines", err);
  }
});
app.put("/api/update", async (_req: Request, _res: Response) => {
  try {
    const {
      id,
      name,
      price,
      manufacturer_name,
      pack_size_label,
      short_composition1,
    } = _req.body;
    await pool1.query(
      "UPDATE medicaldb SET id=$1, name=$2, price=$3, manufacturer_name=$4, pack_size_label=$5,short_composition1=$6 WHERE id=$1",
      [id, name, price, manufacturer_name, pack_size_label, short_composition1]
    );
    _res.json({ message: "updated successfully" });
  } catch (err) {
    console.log("Error in updating medicines", err);
  }
});
app.delete("/api/delete", async (req: Request, _res: Response) => {
  try {
    const { id } = req.body;
    await pool1.query("delete from medicaldb where id = $1 ", [id]);
    _res.json({ message: "deleted successfully" });
  } catch (err) {
    console.log("Error in deleting medicines", err);
  }
});

app.get("/api/view", async (_req: Request, res: Response) => {
  const { sort } = _req.query;

  let result: pg.QueryResult;
  try {
    result = await pool1.query(
      "SELECT * FROM public.medicaldb ORDER BY id asc limit 100"
    );
    if (sort) {
      result = await pool1.query(
        "SELECT * FROM public.medicaldb ORDER BY id desc limit 100"
      );
    }
    res.send(result.rows);
  } catch (err) {
    console.log("Error in viewing medicines", err);
  }
});

app.get("/api/view/medicines", async (req: Request, res: Response) => {
  try {
    const {
      manufacturer_name,
      medicine_name,
      pack_size_label,
      short_composition1,
      sort,
    } = req.query;
    let { id } = req.query;

    // Convert id safely to BigInt (or string if necessary)
    if (id) {
      id = id.toString().trim(); // Ensure id is handled correctly
    }

    // Prepare dynamic filtering conditions
    const conditions: string[] = [];
    const values: string[] = [];

    if (id) {
      conditions.push(`CAST(id AS TEXT) ILIKE $${values.length + 1}`);
      values.push(`%${id}%`);
    }
    if (manufacturer_name) {
      conditions.push(`manufacturer_name ILIKE $${values.length + 1}`);
      values.push(`%${manufacturer_name}%`);
    }
    if (medicine_name) {
      conditions.push(`name ILIKE $${values.length + 1}`);
      values.push(`%${medicine_name}%`);
    }
    if (pack_size_label) {
      conditions.push(`pack_size_label ILIKE $${values.length + 1}`);
      values.push(`%${pack_size_label}%`);
    }
    if (short_composition1) {
      conditions.push(`short_composition1 ILIKE $${values.length + 1}`);
      values.push(`%${short_composition1}%`);
    }
    // Construct the final query dynamically
    const query = `
      SELECT * FROM public.medicaldb 
      ${conditions.length ? `WHERE ${conditions.join(" AND ")}` : ""}
      ORDER BY id ${sort === "desc" ? "DESC" : "ASC"}
    `;

    // Execute query
    const result = await pool1.query(query, values);

    res.send(result.rows);
  } catch (err) {
    console.error("Error fetching medicines:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>Listening from express server</h1>");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
