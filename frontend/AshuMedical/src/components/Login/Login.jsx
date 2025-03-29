import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { checkemail } from "../Http/Login/login";
export default function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [success, setsuccess] = useState("");
  function handlechange(e) {
    const { name, value } = e.target;
    setlogin({
      ...login,
      [name]: value,
    });
  }
  async function handlesubmit(e) {
    e.preventDefault();
    const response = await checkemail(login);
    if (response.length > 0 && response === "password match") {
      const success = (
        <div className="alert alert-success" role="alert">
          Logged in successfully
        </div>
      );
      setsuccess(success);
    }
    if (response === "password do not match" || response.length <= 0) {
      const error = (
        <div className="alert alert-danger" role="alert">
          invalid email password
        </div>
      );
      setsuccess(error);
    }

    e.target.reset();
  }
  return (
    <div
      className="mx-auto mt-5 align-items-center  d-flex flex-column text-white rounded  text-capitalize"
      style={{ backgroundColor: "#556d8d", width: "400px", height: "341px" }}
    >
      <h1 className="text-center m-2 p-2 "> Login</h1>
      <form autoComplete="on" onSubmit={handlesubmit}>
        <label htmlFor="email" className="form-label">
          <strong> Email</strong>
        </label>
        <input
          autoComplete="on"
          style={{ width: "300px" }}
          onChange={handlechange}
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
        />
        <label htmlFor="password" className="form-label">
          <strong>password</strong>
        </label>
        <input
          autoComplete="on"
          style={{ width: "300px" }}
          onChange={handlechange}
          type="password"
          className="form-control"
          name="password"
          id="password"
          aria-describedby="emailHelpId"
        />
        <small id="emailHelpId" className="  m-2  form-text text-muted">
          <a href="/signup" style={{ color: "red", fontWeight: "bolder" }}>
            Register
          </a>
        </small>
        <Button
          style={{ backgroundColor: "#27374d" }}
          type="submit"
          className="l-3 border-0 d-block text-white"
        >
          Submit
        </Button>
        {success}
      </form>
    </div>
  );
}
