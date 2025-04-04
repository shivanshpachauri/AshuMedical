import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import groupObjects from "./Groupby";
import { cartActions } from "../store/cartslice";
export default function Cart() {
  const shopping = useSelector((state) => state.cartslice.shopping);
  const dispatch = useDispatch();
  const [shoppingbuy, setshoppingbuy] = React.useState([
    { name: "", price: "", description: "", quantity: "" },
  ]);
  function handleincrement(item) {
    console.log(item);
    dispatch(cartActions.increment(item));
    console.log(shopping);
  }
  function handledecrement(item) {
    console.log(item);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pen-fill"
              viewBox="0 0 16 16"
            >
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
            </svg>
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
                  <td>
                    <div className="d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="m-1 bi bi-plus-circle"
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
                        className="m-1  bi bi-dash-circle"
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
              ))}
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
          <button className="btn btn-outline-light" type="submit">
            Buy
          </button>
        </aside>
      </div>
    </div>
  );
}
//
// {shopping.map((item, index) => (
//   <form
//     key={index}
//     className=" d-flex flex-column flex-start text-light   rounded flex-wrap bg-dark rounded shadow-lg m-2 p-2"
//     style={{ width: "215px" }}
//     onSubmit={handlesubmit}
//   >
//     <img
//       src={item.image || " "}
//       alt={`${item.name}`}
//       className="rounded shadow-lg"
//       style={{
//         height: "200px",
//         width: "200px",
//         objectFit: "cover",
//       }}
//     />
//     <label htmlFor="name">Name :{item.name} </label>
//     <label className="d-block text-truncate " htmlFor="description">
//       desc :{" "}
//       {item.description.length > 20
//         ? `${item.description.substr(0, 20)}...`
//         : item.description.trim()}
//     </label>
//     <label htmlFor="dosage">quantity : {item.quantity}</label>
//     <label htmlFor="price">price : ₹{item.price}</label>
//     <button
//       style={{ width: "200px" }}
//       className="btn btn-outline-light"
//       type="submit"
//     >
//       Buy
//     </button>
//   </form>
// ))}
