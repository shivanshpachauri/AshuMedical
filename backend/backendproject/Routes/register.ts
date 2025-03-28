// @ts-nocheck
import { pool1 } from "../postgres/server.ts";
import express from "npm:express";
import { Request, Response } from "npm:express";
const router = express.Router();

router.patch("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const check = await pool1.query(
      "select email, password from register where email=$1 and password=$2",
      [email, password]
    );

    res.send(check.rows);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
    res.status(500).send("Error logging in");
  }
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, fullname, gender, dob, username } = req.body;
    const _result = await pool1.query(
      "insert into register(fullname,dob,username,gender,email,password) VALUES($1,$2,$3,$4,$5,$6)",
      [fullname, dob, username, gender, email, password]
    );

    res.json({ message: "registered successfully" });
  } catch (err) {
    res.json({ message: JSON.stringify(err) });
    console.log("Error in inserting register", err);
  }
});
export default router;
