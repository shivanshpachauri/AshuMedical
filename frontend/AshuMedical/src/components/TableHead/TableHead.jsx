import { useContext } from "react";
import { SortingContext } from "../Context/sortingcontext";
export default function TableHead() {
  const { toggleSorting } = useContext(SortingContext);

  return (
    <>
      <div
        style={{ position: "relative", left: "60rem", width: "200px" }}
        className=" d-flex flex-column  m-2 p-2"
      >
        <button
          type="button"
          name="ascending"
          id="ascending"
          className="m-2 px-4 py-2 btn btn-secondary"
          onClick={toggleSorting}
        >
          Sort
        </button>
      </div>
      <div className="container bg-primary  text-capitalize rounded shadow-sm">
        <div className="row ">
          <div className="col-1">id</div>
          <div className="col-3">name</div>

          <div className="col-1">price</div>
          <div className="col-3">Manufacturer name</div>
          <div className="col-2">pack size label</div>
          <div className="col-2">Salt</div>
        </div>
      </div>
    </>
  );
}
