import { useRef, useState } from "react";
import { createPortal } from "react-dom";
export default function EditCustomers() {
  const EditCustomersref = useRef();
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
    console.log(delivery);
    e.target.reset();
  }
  function handleclick() {
    EditCustomersref.current.close();
  }
  return createPortal(
    <dialog ref={EditCustomersref} open>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" onChange={handlechange} />
        <label htmlFor="pack_size_label">Pack</label>
        <input type="text" id="pack_size_label" onChange={handlechange} />
        <label htmlFor="manufacturer_name">Manufacturer</label>
        <input type="text" id="manufacturer_name" onChange={handlechange} />
        <label htmlFor="order_by">Order BY</label>
        <input type="text" id="order_by" onChange={handlechange} />
        <label htmlFor="date">date</label>
        <input type="text" id="date" onChange={handlechange} />
        <label htmlFor="quantity">Quantity</label>
        <input type="text" id="Quantity" onChange={handlechange} />
        <label htmlFor="Delivered">delivered</label>
        <input type="text" id="delivered" onChange={handlechange} />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleclick}>
          Close
        </button>
      </form>
    </dialog>,
    document.body
  );
}
