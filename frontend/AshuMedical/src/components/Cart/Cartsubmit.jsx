import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import postdelivery from "../Http/Postdelivery.jsx";
import Swal from "sweetalert2";
export default function Cartsubmit() {
  const shopping = useSelector((state) => state.cartslice.shopping);
  const [buyingdetails, setbuyingdetails] = useState({
    partyname: "",
    cod: "",
    atm: "",
    address: "",
    phone: "",
  });
  function handlechange(e) {
    const { name, value } = e.target;
    setbuyingdetails({
      ...buyingdetails,
      [name]: value,
    });
  }
  const mutate = postdelivery();
  function handlesubmit(e) {
    e.preventDefault();
    console.log(buyingdetails);
    shopping.forEach((element) => {
      mutate(element);
      console.dir(element);
    });
    console.dir(shopping);
    Swal.fire("submitted successfully");
    e.preventDefault();
  }
  return (
    <div
      className="d-flex flex-column  shadow-lg m-2 p-2 text-capitalize mx-auto"
      style={{ width: "fit-content" }}
    >
      <h1 className="mx-auto">payment : </h1>
      <form on onSubmit={handlesubmit}>
        <label htmlFor="partyname">Party name</label>
        <input
          id="partyname"
          name="partyname"
          type="text"
          value={buyingdetails.partyname}
          onChange={handlechange}
          className="form-control mb-2 mr-sm-2"
          placeholder="partyname"
        />
        <label htmlFor="phone">phone</label>
        <input
          id="phone"
          name="phone"
          value={buyingdetails.phone}
          type="text"
          onChange={handlechange}
          className="form-control mb-2 mr-sm-2"
          placeholder="+91"
        />
        <label htmlFor="address">address</label>
        <textarea
          name="address"
          value={buyingdetails.address}
          id="address"
          type="text"
          onChange={handlechange}
          className="form-control mb-2 mr-sm-2"
          placeholder="address"
        />
        <h2 className="m-2 p-2 ">Delivery by : </h2>
        <div className="d-flex m-2 p-2">
          <input
            className="form-check-input"
            type="radio"
            name="cod"
            value="cod"
            id="cod"
            onChange={handlechange}
          />
          <label htmlFor="cod"> Cash on Delivery</label>

          <input
            className="form-check-input"
            type="radio"
            onChange={handlechange}
            name="atm"
            value="atm"
            id="atmcard"
          />
          <label htmlFor="atmcard"> atm card</label>
        </div>
        <div className="d-flex">
          <Button
            className="mx-auto"
            style={{ width: "fit-content" }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
