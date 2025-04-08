import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import groupObjects from "./Groupby";
import { cartActions } from "../store/cartslice";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const shopping = useSelector((state) => state.cartslice.shopping);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlemarkerpen() {
    console.dir("directory");
    console.log("log");
    console.table("table");
    console.trace("trace");
    console.error("error");
  }
  const markerpen = (
    <div
      className=" editmarker  rounded d-flex mx-auto flex-end"
      onClick={handlemarkerpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-pen-fill"
        viewBox="0 0 16 16"
      >
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
      </svg>
    </div>
  );

  if (shopping.length === 0) {
    return (
      <div
        className="m-4 mx-auto alert alert-light"
        role="alert"
        style={{ width: "fit-content" }}
      >
        <p>No items added </p>
        <p>Add items to display</p>
      </div>
    );
  }
  const [shoppingbuy, setshoppingbuy] = React.useState([
    { name: "", price: "", description: "", quantity: "" },
  ]);
  function handleincrement(item) {
    dispatch(cartActions.increment(item));
  }
  function handledecrement(item) {
    dispatch(cartActions.decrement(item));
  }
  const subtotal = _.sumBy(shopping, (item) => {
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);
    const total = price * quantity;
    return isNaN(total) ? 0 : total;
  });

  function handlesubmit(e) {
    e.preventDefault();
    navigate("/cartsubmit");
  }

  return (
    <div className="container">
      <h1 className="mx-auto  m-2 " style={{ width: "fit-content" }}>
        {" "}
        Shopping Cart{" "}
      </h1>

      <div className="mt-5 d-flex  justify-content-between">
        <div className="d-flex mx-auto flex-wrap">
          {markerpen}
          <table className="table table-dark table-striped ">
            <thead className="thead">
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {shopping ? (
                shopping.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.name}</td>
                    <td>
                      <div className="d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="m-1 incrementicon bi bi-plus-circle"
                          onClick={() => handleincrement(item)}
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        {item.quantity}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="m-1  decrementicon bi bi-dash-circle"
                          viewBox="0 0 16 16"
                          onClick={() => handledecrement(item)}
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                      </div>
                    </td>
                    <td>{item.description}</td>

                    <td>{item.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Subtotal : </td>
                <td>₹{subtotal}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <aside
          className="rounded bg-dark  text-light m-2 p-2"
          style={{ width: "18rem", height: "fit-content" }}
        >
          <h5 className="  text-light">Buy</h5>
          <h6 className=" mb-2 text-muted">Price : </h6>
          <p className="">Subtotal : ₹{subtotal}</p>
          <p className=""> </p>
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={handlesubmit}
          >
            Buy
          </button>
        </aside>
      </div>
    </div>
  );
}
