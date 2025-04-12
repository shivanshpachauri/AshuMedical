import { Button } from "react-bootstrap";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { cartActions } from "../store/cartslice.js";
import postdelivery from "../Http/Postdelivery.jsx";
export default function Cartsubmit() {
  const shopping = useSelector((state) => state.cartslice.shopping);

  if (shopping.length === 0) {
    return (
      <div
        className="mx-auto alert alert-danger"
        style={{ width: "fit-content" }}
        role="alert"
      >
        No items added to the cart please add items to the cart
      </div>
    );
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mutate = postdelivery();

  const dateInstance = new Date();
  const date = `${dateInstance.getFullYear()}-${
    dateInstance.getMonth() + 1
  }-${dateInstance.getDate()}`;

  const [buyingdetails, setbuyingdetails] = useState({
    partyname: "",
    cod: "",
    atm: "",
    address: "",
    phone: "",
  });

  const handlechange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setbuyingdetails({
        ...buyingdetails,
        [name]: value,
      });
    },
    [setbuyingdetails, buyingdetails]
  );
  const handlesubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(buyingdetails);

      shopping.forEach((element) => {
        mutate({
          ...element,
          order_by: buyingdetails.partyname || " ",
          date: date || " ",
        });
      });

      Swal.fire("submitted successfully");
      dispatch(cartActions.removeall());
      navigate("/dashboard/viewcustomers");
    },
    [shopping, buyingdetails]
  );

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
          required
        />
        <label htmlFor="phone">phone</label>
        <input
          id="phone"
          name="phone"
          autoComplete="on"
          value={buyingdetails.phone}
          type="text"
          onChange={handlechange}
          className="form-control mb-2 mr-sm-2"
          placeholder="+91"
          required
        />
        <label htmlFor="address">address</label>
        <textarea
          autoComplete="on"
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
            name="paymentmethod"
            value="cod"
            id="cod"
            checked={buyingdetails.cod === "cod"}
            onChange={() => {
              setbuyingdetails({ ...buyingdetails, cod: e.target.value });
            }}
          />
          <label htmlFor="cod"> Cash on Delivery</label>

          <input
            className="form-check-input"
            type="radio"
            checked={buyingdetails.atm === "atm"}
            onChange={() => {
              setbuyingdetails({ ...buyingdetails, atm: e.target.value });
            }}
            name="paymentmethod"
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
