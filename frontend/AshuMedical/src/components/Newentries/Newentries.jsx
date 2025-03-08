import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./Newentries.css";
import { useNavigate } from "react-router-dom";
import Insertmedicines from "../Http/Insertmedicines";
export default function Newentries({ submitstate, setsubmitstate }) {
  Newentries.propTypes = {
    submitstate: PropTypes.bool.isRequired,
    setsubmitstate: PropTypes.func.isRequired,
  };
  const navigate = useNavigate();
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
    alert("Submitted successfully");
    setsubmitstate(true);
    e.target.reset();
    navigate(".", { replace: true });
  }
  useEffect(() => {
    setTimeout(() => {
      setsubmitstate(false);
    }, 20000);
  }, [setsubmitstate]);

  return (
    <div
      id="newentries"
      className="container text-capitalize d-flex flex-column align-items-center"
    >
      <h1 className="text-center mb-4">New Entries</h1>
      {submitstate && (
        <div className=" text-capitalize alert alert-light" role="alert">
          <strong>submitted successfully</strong>
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
          className="m-4 p-2 btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
