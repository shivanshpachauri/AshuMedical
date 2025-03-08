import React from "react";
import { Button } from "react-bootstrap";
export default function Login() {
  return (
    <div className="container px-4 py-5 bg-danger-subtle text-capitalize">
      <form autoComplete="on">
        <label htmlFor="email" className="form-label">
          <strong> Email</strong>
        </label>
        <input
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
          type="password"
          className="form-control"
          name="password"
          id="loginpassword"
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
        />
        <Button className="d-block">Submit</Button>
        <small id="emailHelpId" className="form-text text-muted">
          <a href="/signup">Register</a>
        </small>
      </form>
    </div>
  );
}
