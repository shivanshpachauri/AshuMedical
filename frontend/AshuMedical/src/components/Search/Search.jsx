import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import { useLocation } from "react-router-dom";

import "./search.css";

import CustomList from "./CustomList.jsx";
import TableHead from "../TableHead/TableHead";
import Searchmedicines from "../Http/Searchmedicines";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Updatemedicine from "../Modals/Updatemedicine";

export default function Search() {
  const location = useLocation();

  const medicineref = useRef();
  const manufacturerref = useRef();
  const packref = useRef();
  const idref = useRef();
  const short_composition1ref = useRef();
  const [searchParams, setSearchParams] = useState({
    id: 0,
    manufacturer_name: "",
    medicine_name: "",
    pack_size_label: "",
    short_composition1: "",
  });

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
    e.target.reset();
  }
  return (
    <>
      {location.pathname != "/" && <Updatemedicine />}

      <div
        id="searchcontainer"
        className="d-flex container flex-column shadow-lg flex-wrap bg-body rounded"
      >
        <h1 className="m-3 display-5">Search component</h1>
        <form className="text-capitalize container " onSubmit={handlesubmit}>
          <label htmlFor="id">Id</label>
          <input type="text" id="id" name="id" ref={idref} />
          <label htmlFor="medicineid"> Medicine Name</label>
          <input
            type="text"
            id="medicineid"
            name="medicine_name"
            ref={medicineref}
          />
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

          <div className="d-flex mx-auto" style={{ width: "fit-content" }}>
            <button className="searchsubmitbutton btn" type="submit">
              Submit
            </button>
          </div>
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
          style={{ overflowX: "hidden" }}
        >
          {({ index, style }) => (
            <CustomList key={data[index].id} item={data[index]} style={style} />
          )}
        </List>
      </div>
    </>
  );
}
