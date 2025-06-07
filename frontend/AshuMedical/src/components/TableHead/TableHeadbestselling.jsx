import { useContext } from "react";
import { SortingContext } from "../Context/sortingcontext";

export default function TableHead() {
  const { togglebestselling } = useContext(SortingContext);
  function handleclick() {
    togglebestselling();
  }
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
          onClick={handleclick}
        >
          Sort
        </button>
      </div>
      <div
        className="container bg-primary text-capitalize rounded shadow-sm text-break "
        style={{
          border: "1px solid black",
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          placeItems: "center",
        }}
      >
        <div>id</div>
        <div>name</div>
        <div>price</div>
        <div>Manufacturer</div>
        <div>Pack_size</div>
        <div>Salt</div>
        <div> action</div>
      </div>
    </>
  );
}
