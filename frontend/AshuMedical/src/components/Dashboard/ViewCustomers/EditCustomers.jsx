import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
export default function EditCustomers() {
  const EditCustomersref = useRef();

  const showModal = useSelector((state) => state.editcustomermodal.modalstate);
  useEffect(() => {
    console.log(showModal);
    EditCustomersref.current.showModal();
    if (showModal === true) {
      console.log("inside the if statement if showmodal is true");
    }
  }, []);
  const [delivery, setdelivery] = useState({
    name: "",
    pack_size_label: "",
    quantity: "",
    manufacturer_name: "",
    Date: "",
    order_by: "",
    delivered: "",
  });
  function handlechange(e) {
    const { name, value } = e.target;
    setdelivery({
      ...delivery,
      [name]: value,
    });
  }
  function handlesubmit(e) {
    e.preventDefault();
    console.log(delivery);
    e.target.reset();
  }
  function handleclose() {
    EditCustomersref.current.close();
  }
  return createPortal(
    <dialog className="updatedialog rounded shadow-lg" ref={EditCustomersref}>
      <form
        onSubmit={handlesubmit}
        className="d-flex flex-column text-capitalize"
      >
        <label htmlFor="name">name</label>
        <input
          name="name"
          value={delivery.name}
          type="text"
          id="name"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="pack_size_label">Pack</label>
        <input
          name="pack_size_label"
          value={delivery.pack_size_label}
          type="text"
          id="pack_size_label"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="manufacturer_name">Manufacturer</label>
        <input
          name="manufacturer_name"
          value={delivery.manufacturer_name}
          type="text"
          id="manufacturer_name"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="order_by">Order BY</label>
        <input
          name="order_by"
          value={delivery.order_by}
          type="text"
          id="order_by"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="date">date</label>
        <input
          name="Date"
          value={delivery.Date}
          type="datetime-local"
          id="date"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          name="quantity"
          value={delivery.quantity}
          type="text"
          id="Quantity"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="Delivered">delivered</label>
        <input
          name="delivered"
          value={delivery.delivered}
          type="text"
          id="delivered"
          onChange={handlechange}
          autoComplete="one"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <button className="btn btn-danger" type="button" onClick={handleclose}>
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modalid")
  );
}
