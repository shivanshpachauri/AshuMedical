import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import Deletemedicines from "../Http/Deletemedicines";
import "./search.css";
import ListRows from "./ListRows";
import TableHead from "../TableHead/TableHead";
import Searchmedicines from "../Http/Searchmedicines";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Swal from "sweetalert2";
import Updatemedicine from "../Modals/Updatemedicine";
import { DeleteContext } from "../Context/deletecontext";
import { useLocation } from "react-router-dom";
export default function Search() {
  const { setdeletestate } = useContext(DeleteContext);
  const location = useLocation();
  const medicineref = React.useRef();
  const manufacturerref = React.useRef();
  const packref = React.useRef();
  const idref = React.useRef();
  const short_composition1ref = React.useRef();
  const [searchParams, setSearchParams] = useState({
    id: 0,
    manufacturer_name: "",
    medicine_name: "",
    pack_size_label: "",
    short_composition1: "",
  });
  const mutatemedicines = Deletemedicines();

  const handleDelete = React.useCallback(
    (medicine) => {
      mutatemedicines(medicine);
      Swal.fire("Deleted successfully");
      setdeletestate(true);
    },
    [mutatemedicines, setdeletestate]
  );
  const { data, isLoading, isError } = Searchmedicines(searchParams);

  if (isLoading) {
    return <Loading title="loading search" />;
  }

  if (isError) {
    return <Error title="Error in loading search component" />;
  }

  function handlesubmit(e) {
    e.preventDefault();
    setSearchParams({
      id: idref.current.value,
      manufacturer_name: manufacturerref.current.value,
      medicine_name: medicineref.current.value,
      pack_size_label: packref.current.value,
      short_composition1: short_composition1ref.current.value,
    });

    e.target.reset(); // Reset the form after submission
  }

  return (
    <>
      {location.pathname != "/" && <Updatemedicine />}

      <div
        id="searchcontainer"
        className="container d-flex flex-column shadow-lg px-4 py-4 my-5 bg-body rounded"
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Search component
        </h1>
        <form
          className="text-capitalize container px-4 py-5"
          onSubmit={handlesubmit}
        >
          <label htmlFor="id">Id</label>
          <input type="text" id="id" name="id" ref={idref} />
          {/* short_composition1ref */}

          <label htmlFor="short_composition1">Salt</label>
          <input
            type="text"
            id="short_composition1"
            name="short_composition1"
            ref={short_composition1ref}
          />
          <label htmlFor="Manufacturerid">Manufacturer Name</label>
          <input
            type="text"
            id="Manufacturerid"
            name="manufacturer_name"
            ref={manufacturerref}
          />
          <label htmlFor="packsizeid">Pack Size</label>
          <input
            type="text"
            id="packsizeid"
            name="pack_size_label"
            ref={packref}
          />
          <label htmlFor="medicineid">Search for Medicine Name</label>
          <input
            type="text"
            id="medicineid"
            name="medicine_name"
            ref={medicineref}
          />
          <button className="searchsubmitbutton btn " type="submit">
            Submit
          </button>
        </form>
        <br />
        <TableHead />
        <br />
        <List
          id="searchlist"
          height={500}
          itemCount={data ? data.length : 0}
          itemSize={85}
          width="100%"
        >
          {({ index, style }) => (
            <ListRows
              index={index}
              style={style}
              data={data}
              handleDelete={handleDelete}
            />
          )}
        </List>
      </div>
    </>
  );
}

Search.propTypes = {
  setdeletestate: PropTypes.func.isRequired,
};
