// @ts-nocheck
import { pool1 } from "../postgres/server.ts";
import express from "npm:express";
import { Request, Response } from "npm:express";
const router = express.Router();
// /api

router.get("/fetchdelivery", async (req: Request, res: Response) => {
  try {
    const result = await pool1.query(
      "SELECT * FROM medicalschema.delivery ORDER BY id asc limit 100"
    );
    res.send(result.rows);
  } catch (error) {
    res.json({ message: JSON.stringify(error) });
    console.log(error);
  }
});
router.put("/deliveryupdate", async (req: Request, res: Response) => {
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
      "UPDATE medicalschema.delivery SET name=$2, pack_size_label=$3,quantity=$4, manufacturer_name=$5, date=$6,order_by=$7,delivered=$8 WHERE id=$1",
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
    res.json({ message: JSON.stringify(error) });
    console.log("Error in updating delivery", error);
  }
});
router.post("/deliverypost", async (req: Request, res: Response) => {
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
      "insert into medicalschema.delivery(name,pack_size_label,manufacturer_name,order_by,quantity,delivered,date) values($1,$2,$3,$4,$5,$6,$7)",
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
    res.json({ message: JSON.stringify(error) });
    console.log(error);
  }
});

export default router;
