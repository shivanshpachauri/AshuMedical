// @ts-nocheck
import { pool1 } from "../postgres/server.ts";

import express from "npm:express";
import { Request, Response } from "npm:express";
const router = express.Router();
// /api
router.post("/postmedicines", async (req: Request, res: Response) => {
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
    res.json({ message: JSON.stringify(err) });
    console.log("Error in inserting medicines", err);
  }
});
router.put("/update", async (_req: Request, _res: Response) => {
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
    res.json({ message: JSON.stringify(err) });
    console.log("Error in updating medicines", err);
  }
});
router.delete("/delete", async (req: Request, _res: Response) => {
  try {
    const { id } = req.body;
    await pool1.query("delete from medicaldb where id = $1 ", [id]);
    _res.json({ message: "deleted successfully" });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
    console.log("Error in deleting medicines", err);
  }
});

router.get("/view", async (_req: Request, res: Response) => {
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
    res.json({ message: JSON.stringify(err) });
    console.log("Error in viewing medicines", err);
  }
});

router.get("/view/medicines", async (req: Request, res: Response) => {
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
      ORDER BY id ${sort === "searchasc" ? "DESC" : "ASC"}
    `;

    // Execute query
    const result = await pool1.query(query, values);

    res.send(result.rows);
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
    console.error("Error fetching medicines:", err);
  }
});
export default router;
