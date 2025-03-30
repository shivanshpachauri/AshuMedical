import React, { useState } from "react";

import { Button } from "react-bootstrap";
import GoogleAuth from "./Googlesignin";
import { checkemail } from "../Http/Login/login";
export default function Login() {
  // localstorage and session storage
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
      localStorage.setItem("loggedin", "true");
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
      style={{
        backgroundColor: "#556d8d",
        width: "fit-content",
        height: "fit-content",
      }}
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
        <small
          id="emailHelpId"
          className="mx-auto d-flex  m-2  form-text text-muted"
          style={{ width: "fit-content" }}
        >
          <a href="/signup" style={{ color: "red", fontWeight: "bolder" }}>
            Register
          </a>
        </small>

        <Button onClick={GoogleAuth} className="m-2 mx-auto p-2 d-block">
          Sign up with google &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
        </Button>
        <Button
          style={{ backgroundColor: "#27374d" }}
          type="submit"
          className="d-flex m-2 p-2 mx-auto border-0 d-block text-white"
        >
          Submit
        </Button>
        {success}
      </form>
    </div>
  );
}
