import express from "npm:express@^4.17";
import { Request, Response } from "npm:express";
import "https://deno.land/std@0.224.0/dotenv/load.ts";

import middleware from "./middleware/middleware.ts";
import createTables from "./postgres/Createtable.ts";
import medicaldb from "./Routes/medicaldb.ts";
import delivery from "./Routes/delivery.ts";
import register from "./Routes/register.ts";
import cart from "./Routes/cart.ts";
import ai from "./Routes/ai.ts";

import connect from "./postgres/connect.ts";
const app = express();
const PORT = Number(Deno.env.get("PORT")) || 3000;

// middlewares
app.use(middleware);

// connect to the database
connect;
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
