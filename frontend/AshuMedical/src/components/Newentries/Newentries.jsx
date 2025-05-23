import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./Newentries.css";
import { useNavigate } from "react-router-dom";
import Insertmedicines from "../Http/Insertmedicines";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/submitstate";
export default function Newentries() {
  const submitstate = useSelector((state) => state.submitslice.submitstate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alertstate = useSelector((state) => state.alertstate.error);
  const [medicines, setmedicines] = React.useState({
    id: 0,
    name: "",
    price: 0.0,
    manufacturer_name: "",
    pack_size_label: "",
    short_composition1: "",
  });
  const mutate = Insertmedicines();
  function handlesubmit(e) {
    e.preventDefault();
    mutate(medicines);
    Swal.fire("Submitted successfully");
    dispatch(toggle());
    e.target.reset();
    navigate(".", { replace: true });
  }

  return (
    <div
      id="newentries"
      className="container rounded text-capitalize d-flex flex-column align-items-center"
    >
      <h1 className="text-center mb-4">New Entries</h1>
      {submitstate && (
        <div className=" text-capitalize alert alert-light" role="alert">
          <strong>submitted {alertstate}</strong>
        </div>
      )}
      <form
        id="newentriedform"
        onSubmit={handlesubmit}
        className="text-capitalize"
      >
        <label htmlFor="insertid">Id</label>
        <input
          type="text"
          name="insertid"
          id="insertid"
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
          onChange={(e) => {
            setmedicines({ ...medicines, name: e.target.value });
          }}
          autoComplete="one"
        />
        <label htmlFor="insertprice">Price</label>
        <input
          type="number"
          name="insertprice"
          id="insertprice"
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
          onChange={(e) => {
            setmedicines({ ...medicines, pack_size_label: e.target.value });
          }}
          autoComplete="one"
        />
        <label htmlFor="insertshort_composition">short_composition1</label>
        <input
          type="text"
          name="insertshort_composition"
          id="insertshort_composition"
          onChange={(e) => {
            setmedicines({ ...medicines, short_composition1: e.target.value });
          }}
          autoComplete="one"
        />
        <button
          id="submitmedicines"
          type="submit"
          style={{ backgroundColor: "lightskyblue" }}
          className="m-4 p-2 btn "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
