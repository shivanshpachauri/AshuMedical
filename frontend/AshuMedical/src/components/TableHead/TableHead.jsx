import { useContext } from "react";
import { SortingContext } from "../Context/sortingcontext";

export default function TableHead() {
  const { toggleSorting } = useContext(SortingContext);

  return (
    <>
      <div
        style={{ position: "relative" }}
        className="d-flex flex-row justify-content-end m-2"
      >
        <button
          type="button"
          name="ascending"
          id="ascending"
          className="p-2 btn btn-secondary"
          style={{ width: "7em" }}
          onClick={toggleSorting}
        >
          Sort
        </button>
      </div>
      <div className="container d-flex align-items-center flex-wrap bg-primary text-capitalize rounded shadow-sm p-3">
        <div className="col-1 text-center" style={{ padding: "10px" }}>
          id
        </div>
        <div className="col-3 text-center" style={{ padding: "10px" }}>
          name
        </div>
        <div className="col-1 text-center" style={{ padding: "10px" }}>
          price
        </div>
        <div className="col-3 text-center" style={{ padding: "10px" }}>
          Manufacturer
        </div>
        <div className="col-2 text-center" style={{ padding: "10px" }}>
          Pack_size
        </div>
        <div className="col-1 text-center" style={{ padding: "10px" }}>
          Salt
        </div>
      </div>
    </>
  );
}
