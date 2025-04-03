import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import _ from "lodash";
import groupObjects from "./Groupby";
export default function Cart() {
  const shopping = useSelector((state) => state.cartslice.shopping);
  const [shoppingbuy, setshoppingbuy] = React.useState([
    { name: "", price: "", description: "", quantity: "" },
  ]);
  const subtotal = _.sumBy(shopping, (item) => {
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);
    const total = price * quantity;
    return isNaN(total) ? 0 : total;
  });

  function handlesubmit(e) {
    e.preventDefault();
    console.log(shoppingbuy);
  }

  return (
    <div className="container">
      <h1 className="mx-auto  m-2 " style={{ width: "fit-content" }}>
        {" "}
        Shopping Cart{" "}
      </h1>
      <br />
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row flex-wrap">
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
              {shopping.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.description}</td>

                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Subtotal : </td>
                <td>₹{subtotal}</td>
              </tr>
            </tfoot>
          </table>
          {shopping.map((item, index) => (
            <form
              key={index}
              className=" d-flex flex-column flex-start text-light   rounded flex-wrap bg-dark rounded shadow-lg m-2 p-2"
              style={{ width: "215px" }}
              onSubmit={handlesubmit}
            >
              <img
                src={item.image || " "}
                alt={`${item.name}`}
                className="rounded shadow-lg"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "cover",
                }}
              />
              <label htmlFor="name">Name :{item.name} </label>
              <label className="d-block text-truncate " htmlFor="description">
                desc :{" "}
                {item.description.length > 20
                  ? `${item.description.substr(0, 20)}...`
                  : item.description.trim()}
              </label>
              <label htmlFor="dosage">quantity : {item.quantity}</label>
              <label htmlFor="price">price : ₹{item.price}</label>
              <button
                style={{ width: "200px" }}
                className="btn btn-outline-light"
                type="submit"
              >
                Buy
              </button>
            </form>
          ))}
        </div>
        <aside
          className="rounded bg-dark  text-light m-2 p-2"
          style={{ width: "18rem", height: "fit-content" }}
        >
          <h5 className="  text-light">Buy</h5>
          <h6 className=" mb-2 text-muted">Price : </h6>
          <p className="">Subtotal : ₹{subtotal}</p>
          <p className=""> </p>
          <button className="btn btn-outline-light" type="submit">
            Buy
          </button>
        </aside>
      </div>
    </div>
  );
}
