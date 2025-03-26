import { areEqual } from "react-window";
import PropTypes from "prop-types";
import React from "react";
import { useContext } from "react";
import { EditingContext } from "../Context/Editingcontext";
const CustomList = React.memo(function CustomList({ item, onDelete, style }) {
  const { toggleEditing, setmedicines } = useContext(EditingContext);
  function handleedit() {
    toggleEditing();
    setmedicines({
      id: item.id,
      name: item.name,
      manufacturer_name: item.manufacturer_name,
      price: item.price,
      pack_size_label: item.pack_size_label,
      short_composition1: item.short_composition1,
    });
  }
  return (
    <div
      id="searchlist"
      className="bestsellingtablerow rounded m-2 p-2 mx-auto"
      style={style}
    >
      <div className="d-flex flex-row">
        <div className="col-1">{item.id}</div>

        <div className="col-3 ">{item.name}</div>
        <div className="col-1">{item.price}</div>
        <div className="col-3  ">{item.manufacturer_name}</div>
        <div className="col-2 ">{item.pack_size_label}</div>
        <div className="col-1">{item.short_composition1}</div>
        <div className="col-0">
          <div className="d-flex flex-column">
            <button
              type="button"
              className="btn btn-danger "
              onClick={onDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="visible btn btn-primary"
              onClick={handleedit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}, areEqual);
CustomList.propTypes = {
  item: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};
CustomList.displayName = "CustomList";
export default CustomList;
