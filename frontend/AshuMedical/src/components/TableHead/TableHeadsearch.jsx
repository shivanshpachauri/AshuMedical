import { useContext } from "react";
import { SortingContext } from "../Context/sortingcontext";

export default function TableHead() {
  const { togglesearch } = useContext(SortingContext);
  function handleclick() {
    togglesearch();
  }
  return (
    <section
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          marginBottom: "1em",
        }}
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
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          placeItems: "center",
          gap: "1em",
          height: "3em",
          borderRadius: "1em",
          backgroundColor: "blue",
          textTransform: "capitalize",
        }}
      >
        <div>id</div>
        <div>name</div>
        <div>price</div>
        <div>Manufacturer</div>
        <div>Pack</div>
        <div>Salt</div>
        <div>Action</div>
      </div>
    </section>
  );
}
