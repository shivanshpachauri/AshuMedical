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
      <div className="container d-flex align-items-center flex-wrap bg-primary text-capitalize rounded shadow-sm text-break text-center">
        <div className="col-1">id</div>
        <div className="col-3">name</div>
        <div className="col-1">price</div>
        <div className="col-3">Manufacturer</div>
        <div className="col-2">Pack_size</div>
        <div className="col-1">Salt</div>
      </div>
    </>
  );
}
