import PropTypes from "prop-types";
import React, { useContext, useState, useCallback } from "react";
import "./updatemedicine.css";
import Updatemedicine from "../Http/Updatemedicines";
import { EditingContext } from "../Context/Editingcontext";
import { createPortal } from "react-dom";
import Swal from "sweetalert2";
export default function Updatedialog() {
  const { medicines, setmedicines, isEdited, toggleEditing } =
    useContext(EditingContext);

  const modalref = React.useRef();

  const handleclose = useCallback(() => {
    modalref.current.close();
    toggleEditing();
  }, [toggleEditing]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        handleclose();
      }
    }

    if (isEdited) {
      modalref.current.showModal();
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEdited, handleclose]);

  const mutate = Updatemedicine();
  async function handlesubmit(e) {
    e.preventDefault();
    mutate(medicines);
    modalref.current.close();
    Swal.fire("submitted successfully");
  }
  return createPortal(
    <dialog ref={modalref} className="updatedialog rounded shadow-lg">
      <form
        id="newentriedform"
        onSubmit={handlesubmit}
        className=" pe-3 text-capitalize"
      >
        <label htmlFor="insertid">Id</label>
        <input
          type="text"
          name="insertid"
          id="insertid"
          value={medicines.id}
          onChange={(e) => {
            setmedicines({ ...medicines, id: e.target.value });
          }}
          autoComplete="one"
        />
        <label htmlFor="insertname">name</label>
        <input
          type="text"
          name="insertname"
          id="insertname"
          value={medicines.name}
          onChange={(e) => {
            setmedicines({ ...medicines, name: e.target.value });
          }}
          autoComplete="one"
        />

        <label htmlFor="insertsalt">Salt</label>
        <input
          type="text"
          name="insertsalt"
          id="insertsalt"
          value={medicines.short_composition1}
          onChange={(e) => {
            setmedicines({ ...medicines, short_composition1: e.target.value });
          }}
          autoComplete="one"
        />
        <label htmlFor="insertprice">Price</label>
        <input
          type="number"
          name="insertprice"
          id="insertprice"
          value={medicines.price}
          step="any"
          onChange={(e) => {
            setmedicines({ ...medicines, price: e.target.value });
          }}
          autoComplete="one"
        />
        <label htmlFor="insertmanufacturer_name">Manufacturer name</label>
        <input
          type="text"
          name="insertmanufacturer_name"
          id="insertmanufacturer_name"
          value={medicines.manufacturer_name}
          onChange={(e) => {
            setmedicines({ ...medicines, manufacturer_name: e.target.value });
          }}
          autoComplete="one"
        />
        <label htmlFor="insertpack-size">pack_size_label</label>
        <input
          type="text"
          name="insertpack-size"
          id="insertpack-size"
          value={medicines.pack_size_label}
          onChange={(e) => {
            setmedicines({ ...medicines, pack_size_label: e.target.value });
          }}
          autoComplete="one"
        />

        <div className="d-flex flex-row justify-content-end">
          <button
            id="submitmedicines"
            type="button"
            className="d-inline btn btn-danger"
            onClick={handleclose}
            style={{ float: "left" }}
          >
            Close
          </button>
          <button
            id="submitmedicines"
            type="submit"
            className="btn btn-primary"
            style={{ float: "right" }}
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modalid")
  );
}
Updatedialog.propTypes = {
  Isopen: PropTypes.bool.isRequired,
};
