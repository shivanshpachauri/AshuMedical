import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { checkemail } from "../Http/http";
export default function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  function handlechange(e) {
    const { name, value } = e.target;
    setlogin({
      ...login,
      [name]: value,
    });
  }
  async function handlesubmit(e) {
    e.preventDefault();
    const response = checkemail(login);
    console.log(response);

    e.target.reset();
  }
  return (
    <div className="container px-4 py-5 bg-danger-subtle text-capitalize">
      <form autoComplete="on" onSubmit={handlesubmit}>
        <label htmlFor="email" className="form-label">
          <strong> Email</strong>
        </label>
        <input
          onChange={handlechange}
          type="email"
          className="form-control"
          name="email"
          id="loginemail"
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
        />
        <label htmlFor="password" className="form-label">
          <strong>password</strong>
        </label>
        <input
          onChange={handlechange}
          type="password"
          className="form-control"
          name="password"
          id="loginpassword"
          aria-describedby="emailHelpId"
          placeholder="password"
        />
        <Button type="submit" className="d-block">
          Submit
        </Button>
        <small id="emailHelpId" className="form-text text-muted">
          <a href="/signup">Register</a>
        </small>
      </form>
    </div>
  );
}
