import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import _ from "lodash";
export default function Cart() {
  const shopping = useSelector((state) => state.cartslice.shopping);
  const [shoppingbuy, setshoppingbuy] = React.useState([
    { name: "", price: "", description: "", quantity: "" },
  ]);
  const subtotal = _.sumBy(shopping, (item) => {
    const price = parseFloat(item.price);
    return isNaN(price) ? 0 : price;
  });
  console.log(subtotal);

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
          {shopping.map((item, index) => (
            <form
              key={index}
              className=" d-flex flex-column flex-start text-light   rounded flex-wrap bg-dark rounded shadow-lg m-2 p-2"
              style={{ width: "215px" }}
              onSubmit={handlesubmit}
            >
              <img
                src={item.image}
                alt="delivery image 1"
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
              <label htmlFor="dosage">id : {item.id}</label>
              <label htmlFor="price">price : {item.price}</label>
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
          <p className="">Subtotal : {subtotal}</p>
          <p className=""> </p>
          <button className="btn btn-outline-light" type="submit">
            Buy
          </button>
        </aside>
      </div>
    </div>
  );
}
