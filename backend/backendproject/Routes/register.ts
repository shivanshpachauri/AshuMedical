// @ts-nocheck
import { pool1 } from "../postgres/server.ts";
import express from "npm:express";
import { Request, Response } from "npm:express";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const router = express.Router();
const saltrounds = 10;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  try {
    const check = await pool1.query(
      "SELECT email, password FROM medicalschema.register WHERE email=$1",
      [email]
    );

    if (check.rows.length === 0) {
      return res.status(404).json({ message: "User  not found" });
    }

    const match = await bcrypt.compare(password, check.rows[0].password);
    if (match) {
      console.log("Password matched!!");
      return res.send("Password match");
    } else {
      console.log("Password do not match");
      return res.send("Password do not match");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error logging in");
  }
});

router.post("/register", async (req: Request, res: Response) => {
  const { email, password, fullname, gender, dob, username } = req.body;

  if (!email || !password || !fullname || !gender || !dob || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const salt = await bcrypt.genSalt(saltrounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    await pool1.query(
      "INSERT INTO medicalschema.register(fullname, dob, username, gender, email, password) VALUES($1, $2, $3, $4, $5, $6)",
      [fullname, dob, username, gender, email, hashedPassword]
    );

    return res.json({ message: "Registered successfully" });
  } catch (err) {
    console.error("Error in inserting register", err);
    return res.status(500).json({ message: "Error registering user" });
  }
});

export default router;
