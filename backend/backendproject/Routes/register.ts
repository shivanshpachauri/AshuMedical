// @ts-nocheck
import { pool1 } from "../postgres/server.ts";
import express from "npm:express";
import { Request, Response } from "npm:express";
// import bcrypt from "npm:bcrypt";
// import bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const router = express.Router();
const saltrounds = 10;

router.post("/login", async (req, res) => {
  const { email, password } = req.body; // Now, req.body will have data
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  try {
    const check = await pool1.query(
      "SELECT email, password FROM medicalschema.register WHERE email=$1",
      [email]
    );

    if (check.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    bcrypt.compare(password, check.rows[0].password, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      if (result) {
        console.log("password matched!!");
        res.send("password match");
      } else {
        console.log("password do not match");
        res.send("password do not match");
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in");
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, fullname, gender, dob, username } = req.body;
    bcrypt.hash(password, saltrounds, async (err, hashedpassword) => {
      if (err) {
        console.error(err);
        return;
      }
      const _result = await pool1.query(
        "insert into medicalschema.register(fullname,dob,username,gender,email,password) VALUES($1,$2,$3,$4,$5,$6)",
        [fullname, dob, username, gender, email, hashedpassword]
      );
    });

    res.json({ message: "registered successfully" });
  } catch (err) {
    console.log("Error in inserting register", err);
    res.json({ message: JSON.stringify(err) });
  }
});
export default router;
