// @ts-nocheck
import { pool1 } from "../postgres/server.ts";
import express from "npm:express";
import { Request, Response } from "npm:express";
import huggingface from "./huggingface.ts";
const router = express.Router();
// /api/
router.post("/chat", async (req, res) => {
  try {
    const content = req.body.message;

    const response = await huggingface({ content });

    res.json({ botReply: response });
  } catch (error) {
    res.status(500).json({ error: "Error fetching response" });
  }
});
router.post("/ai/save", async (req, res) => {
  try {
    const { title, body } = req.body;
    const result = await pool1.query(
      `INSERT into AI(title,body) VALUES($1,$2)`,
      [title, body]
    );
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error: "Error fetching response" });
  }
});
router.get("/ai/view", async (req, res) => {
  try {
    const { title, body } = req.body;
    const result = await pool1.query(
      `SELECT * FROM AI ORDER BY id ASC LIMIT 100`
    );
    res.send(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching response" });
  }
});
export default router;
