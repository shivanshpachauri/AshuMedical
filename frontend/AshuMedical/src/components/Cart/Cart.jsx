import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
export default function Cart() {
  const { description, name, price, id, image } = useSelector(
    (state) => state.cartslice
  );
  console.log(
    "description:",
    description,
    "id : ",
    id,
    "name ; ",
    name,
    "price : ",
    price,
    "image ; ",
    image
  );

  return (
    <div className="container">
      <h1 className="mx-auto  m-2 " style={{ width: "fit-content" }}>
        {" "}
        Shopping Cart{" "}
      </h1>
      <br />
      <div className="d-flex text-capitalize flex-wrap">
        <form
          className=" d-flex flex-start text-light   rounded mx-auto m-2 p-2 flex-wrap"
          style={{ width: "fit-content" }}
        >
          <div className="form-group bg-dark rounded shadow-lg m-2 p-2">
            <img
              src={image}
              alt="delivery image 1"
              className="rounded shadow-lg"
            />
            <label htmlFor="">Name :{name} </label>
            <label htmlFor="description">description : {description}</label>
            <label htmlFor="dosage">id : {id}</label>
            <label htmlFor="price">price : {price}</label>
          </div>
        </form>
        <div
          className="card  bg-dark  text-light justify-content-end"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title  text-light">Buy</h5>
            <h6 className="card-subtitle mb-2 text-muted">Price : </h6>
            <p className="card-text">Subtotal : </p>
            <p className="card-text"> </p>
            <button className="btn btn-outline-light" type="submit">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
