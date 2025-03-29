import { useState } from "react";
import Postdelivery from "../../Http/Postdelivery";
export default function Customers() {
  const [delivery, setdelivery] = useState({
    name: "",
    pack_size_label: "",
    manufacturer_name: "",
    order_by: "",
    quantity: "",
    delivered: "Yes",
    date: "",
  });
  function handlechange(e) {
    const { name, value } = e.target;
    setdelivery({
      ...delivery,
      [name]: value,
    });
  }
  const Post = Postdelivery();
  function handlesubmit(e) {
    e.preventDefault();
    Post(delivery);
    setdelivery({
      name: "",
      pack_size_label: "",
      order_by: "",
      manufacturer_name: "",
      date: "",
      delivered: "No",
      quantity: "",
    });
    alert("submitted successfully");
  }
  return (
    <form className="form-inline" onSubmit={handlesubmit}>
      <label className="sr-only" htmlFor="name">
        Name
      </label>
      <input
        autoComplete="on"
        name="name"
        onChange={handlechange}
        value={delivery.name}
        type="text"
        className="form-control mb-2 mr-sm-2"
        id="name"
        placeholder="Enter Medicine name"
      />
      <label className="sr-only" htmlFor="pack_size_label">
        Pack-size-label
      </label>
      <input
        id="pack_size_label"
        type="text"
        onChange={handlechange}
        value={delivery.pack_size_label}
        name="pack_size_label"
        className="form-control mb-2 mr-sm-2"
        placeholder="Enter packsize"
      />
      <label className="sr-only" htmlFor="manufacturer_name">
        Manufacturer_name
      </label>
      <input
        id="manufacturer_name"
        onChange={handlechange}
        value={delivery.manufacturer_name}
        type="text"
        name="manufacturer_name"
        className="form-control mb-2 mr-sm-2"
        placeholder="Enter manufacturer name"
      />
      <label className="sr-only" htmlFor="order_by">
        Order-BY
      </label>
      <input
        id="order_by"
        onChange={handlechange}
        value={delivery.order_by}
        type="text"
        name="order_by"
        className="form-control mb-2 mr-sm-2"
        placeholder="ordered by this person"
      />
      <label className="sr-only" htmlFor="quantity">
        Quantity
      </label>
      <input
        id="quantity"
        onChange={handlechange}
        value={delivery.quantity}
        type="text"
        name="quantity"
        className="form-control mb-2 mr-sm-2"
        placeholder="Quantity of the item"
      />
      <label className="d-block" htmlFor="dateofdelivery">
        Delivery date
      </label>
      <input
        className="rounded shadow-sm"
        autoComplete="on"
        type="datetime-local"
        id="dateofdelivery"
        onChange={handlechange}
        value={delivery.date}
        name="date"
      />
      <div id="Delivered" className="container mt-3">
        <h5 className="d-block fs-5">Delivered</h5>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="deliveredtrue"
            name="delivered"
            value="Yes"
            onChange={handlechange}
            checked={delivery.delivered === "Yes"}
          />
          <label className="form-check-label" htmlFor="deliveredtrue">
            Yes
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="deliveredfalse"
            onChange={handlechange}
            name="delivered"
            value="No"
            checked={delivery.delivered === "No"}
            //   onChange={(e) =>
            //     setregister({ ...register, gender: e.target.value })
            //   }
          />
          <label className="form-check-label" htmlFor="deliveredfalse">
            No
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
}
