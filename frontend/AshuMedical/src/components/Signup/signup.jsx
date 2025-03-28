import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./signup.css";
import { formregister } from "../Http/http";
export default function RegisterForm() {
  const [register, setregister] = React.useState({
    fullname: "",
    username: "",
    email: "",
    dob: "",
    password: "",
    gender: "",
  });
  const [confirmpassword, setconfirmpassword] = useState({
    confirmpassword: "",
    confirmpasswordstate: false,
  });
  let alert;
  useEffect(() => {
    if (confirmpassword.confirmpasswordstate === true) {
      alert = (
        <div className="alert alert-success" role="alert">
          Password matched successfully
        </div>
      );
    } else if (confirmpassword.confirmpasswordstate === false) {
      alert = (
        <div className="alert alert-danger" role="alert">
          Password do not match please enter password that match
        </div>
      );
    }
  }, [confirmpassword.confirmpasswordstate]);

  const [registrationstate, setregistrationstate] = React.useState(false);
  async function handlesubmit(e) {
    e.preventDefault();
    if (confirmpassword.confirmpassword === register.password) {
      console.log("password matched", confirmpassword);
      console.log("Register password", register.password);

      setconfirmpassword({ ...confirmpassword, setconfirmpassword: true });
      // confirmpassword.confirmpasswordstate(true)
      await formregister(register);
      setregistrationstate(true);
      setregister({
        fullname: "",
        username: "",
        email: "",
        dob: "",
        password: "",
        gender: "",
      });
      setconfirmpassword({ ...confirmpassword, confirmpassword: "" });
    }
  }
  return (
    <form
      id="registrationform"
      className="container mx-auto border border-0 m-2 p-5"
      onSubmit={handlesubmit}
      style={{ maxWidth: "fit-content" }}
      autoComplete="on"
    >
      <h1 className="text-center">Registration Form</h1>
      <div className="form-floating mb-3 mt-3 fw-semibold m-2 p-2">
        <div className="form-group ">
          <label htmlFor="FullName">Full Name</label>
          <input
            type="text"
            autoComplete="on"
            className="form-control"
            name="formId1"
            id="FullName"
            value={register.fullname}
            onChange={(e) =>
              setregister({ ...register, fullname: e.target.value })
            }
            placeholder="Enter your name"
          />
          <div className="d-block">
            <label htmlFor="dob">DOB</label>
            <input
              className="rounded shadow-sm"
              autoComplete="on"
              type="datetime-local"
              id="dob"
              value={register.dob}
              name="birthdaytime"
              onChange={(e) => {
                setregister({ ...register, dob: e.target.value });
              }}
            ></input>
          </div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            autoComplete="on"
            className="form-control"
            name="Username"
            id="Username"
            value={register.username}
            onChange={(e) =>
              setregister({ ...register, username: e.target.value })
            }
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="on"
            className="form-control"
            name="email"
            id="email"
            value={register.email}
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
            placeholder="Enter your email"
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            autoComplete="on"
            className="form-control"
            name="Password"
            id="Password"
            value={register.password}
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />
          <label htmlFor="Confirmpassword">Confirm Password</label>
          <input
            type="password"
            autoComplete="on"
            className="form-control"
            name="Confirmpassword"
            id="Confirmpassword"
            onChange={(e) =>
              setconfirmpassword({
                ...confirmpassword,
                confirmpassword: e.target.value,
              })
            }
          />
          {alert}
        </div>
        <div id="gender" className="container mt-3">
          <h5 className="d-block fs-5">Gender</h5>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="gendermale"
              name="gender"
              value="male"
              checked={register.gender === "male"}
              onChange={(e) =>
                setregister({ ...register, gender: e.target.value })
              }
            />
            <label className="form-check-label" htmlFor="gendermale">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="genderfemale"
              name="gender"
              value="female"
              checked={register.gender === "female"}
              onChange={(e) =>
                setregister({ ...register, gender: e.target.value })
              }
            />
            <label className="form-check-label" htmlFor="genderfemale">
              Female
            </label>
          </div>
        </div>
      </div>
      <Button type="submit" className="submitbutton btn ">
        Submit
      </Button>
      {registrationstate && (
        <div className="alert alert-primary" role="alert">
          <strong>registered successfully</strong>
        </div>
      )}
    </form>
  );
}
