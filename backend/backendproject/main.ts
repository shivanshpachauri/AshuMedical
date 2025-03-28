// @ts-nocheck
import { Request, Response } from "npm:express";
import "https://deno.land/std@0.224.0/dotenv/load.ts";
import helmet from "npm:helmet";
import pg from "npm:pg";
import medicaldb from "./Routes/medicaldb.ts";
import delivery from "./Routes/delivery.ts";
import register from "./Routes/register.ts";
import cart from "./Routes/cart.ts";
import ai from "./Routes/ai.ts";
import createTables from "./postgres/Createtable.ts";
import { pool1 } from "./postgres/server.ts";
import express from "npm:express@^4.17";
import cors from "npm:cors";
import morgan from "npm:morgan";
const app = express();
const PORT = Number(Deno.env.get("PORT")) || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

(async () => {
  try {
    const client = await pool1.connect();
    console.log("Connected to database");
    // client.release();
  } catch (err) {
    console.error("Database connection error:", err);
  }
})();
// create table if not exist
createTables();

// register db
app.use("/api", register);
// Delivery database
app.use("/api", delivery);
// medicaldb
app.use("/api", medicaldb);
// ai
app.use("/api", ai);
// cart
app.use("/api", cart);

app.get("/", (_req: Request, res: Response) => {
  res.send("<h1>Listening from sanjay's server</h1>");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
