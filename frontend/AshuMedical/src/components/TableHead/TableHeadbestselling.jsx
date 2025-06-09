import { useContext } from "react";
import { SortingContext } from "../Context/sortingcontext";

export default function TableHead() {
  const { togglebestselling } = useContext(SortingContext);
  function handleclick() {
    togglebestselling();
  }
  return (
    <section
      style={{
        marginBottom: "1em",
        gap: "0.5em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <button
          type="button"
          name="ascending"
          id="ascending"
          className=" btn btn-secondary"
          style={{ width: "7em", height: "100%" }}
          onClick={handleclick}
        >
          Sort
        </button>
      </div>
      <div
        className="container bg-primary text-capitalize rounded shadow-sm text-break "
        style={{
          height: "4em",
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
    </section>
  );
}
