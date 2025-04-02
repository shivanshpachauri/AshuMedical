// @ts-nocheck
import { pool1 } from "../postgres/server.ts";
import express from "npm:express";
import { Request, Response } from "npm:express";
const router = express.Router();
router.post("/cartpost", async (req, res) => {
  try {
    const { id, name, image, description } = req.body;
    console.log(id, name, image, description);
    await pool1.query(
      `INSERT INTO medicalschema.CART(id,image,name,description,price) VALUES($1,$2,$3,$4,$5)`,
      [id, name, image, description]
    );
    res.json({ message: "inserted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching response" });
  }
});
router.get("/cartview", async (req, res) => {
  const result = await pool1.query(
    " select * from medicalschema.cart order by id asc"
  );
  res.send(result.rows);
});
export default router;
