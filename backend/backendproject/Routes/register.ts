// @ts-nocheck
import { pool1 } from "../postgres/server.ts";
import express from "npm:express";
import { Request, Response } from "npm:express";
import bcrypt from "npm:bcrypt";
const router = express.Router();
const saltrounds = 10;

router.patch("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const check = await pool1.query(
      "select email, password from register where email=$1 ",
      [email]
    );
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
    res.json({ message: err });
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
      console.log(hashedpassword);
      const _result = await pool1.query(
        "insert into register(fullname,dob,username,gender,email,password) VALUES($1,$2,$3,$4,$5,$6)",
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
