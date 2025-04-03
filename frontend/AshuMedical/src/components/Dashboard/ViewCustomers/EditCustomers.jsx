import Updatedelivery from "../../Http/Updatedelivery";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalInputActions } from "../../store/Editinputcustomerslice";
export default function EditCustomers() {
  const EditCustomersref = useRef();

  const showModal = useSelector((state) => state.editcustomermodal.modalstate);

  const delivery = useSelector((state) => state.editinputmodal);
  const dispatch = useDispatch();
  useEffect(() => {
    if (showModal) {
      EditCustomersref.current.showModal();
    }
  }, [showModal]);
  function handlechange(e) {
    const { name, value } = e.target;
    // const data = {
    //   [name]: value,
    // };

    dispatch(modalInputActions.setdelivery({ ...delivery, [name]: value }));
    // dispatch(modalInputActions.setdelivery(data));
  }
  const deliveryupdate = Updatedelivery();
  function handlesubmit(e) {
    e.preventDefault();
    deliveryupdate(delivery);
    EditCustomersref.current.close();
    Swal.fire("updated successfully");
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
          style={{ margin: 0, padding: 0 }}
          name="name"
          defaultValue={delivery.name}
          type="text"
          id="name"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="pack_size_label">Pack</label>
        <input
          style={{ margin: 0, padding: 0 }}
          name="pack_size_label"
          defaultValue={delivery.pack_size_label}
          type="text"
          id="pack_size_label"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="manufacturer_name">Manufacturer</label>
        <input
          style={{ margin: 0, padding: 0 }}
          name="manufacturer_name"
          defaultValue={delivery.manufacturer_name}
          type="text"
          id="manufacturer_name"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="order_by">Order BY</label>
        <input
          style={{ margin: 0, padding: 0 }}
          name="order_by"
          defaultValue={delivery.order_by}
          type="text"
          id="order_by"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="date">date</label>
        <input
          style={{ margin: 0, padding: 0 }}
          name="date"
          defaultValue={delivery.date}
          type="datetime-local"
          id="date"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          style={{ margin: 0, padding: 0 }}
          name="quantity"
          defaultValue={delivery.quantity}
          type="text"
          id="quantity"
          onChange={handlechange}
          autoComplete="one"
        />
        <label htmlFor="Delivered">delivered</label>
        <input
          style={{ margin: 0, padding: 0 }}
          name="delivered"
          defaultValue={delivery.delivered}
          type="text"
          id="Delivered"
          onChange={handlechange}
          autoComplete="one"
        />
        <div className="d-flex flex-row m-1 p-1">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleclose}
          >
            Close
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modalid")
  );
}
