import PropTypes from "prop-types";
import React, { useContext } from "react";
import { areEqual } from "react-window";
import "./TableRow.css";
import { EditingContext } from "../Context/Editingcontext";
import { DeleteContext } from "../Context/deletecontext";
const TableRow = React.memo(({ item, style }) => {
  const { toggleEditing, setmedicines } = useContext(EditingContext);
  const { handleDelete } = useContext(DeleteContext);
  function handleedit() {
    toggleEditing();
    setmedicines({
      id: item[1].id,
      name: item[1].name,
      manufacturer_name: item[1].manufacturer_name,
      price: item[1].price,
      pack_size_label: item[1].pack_size_label,
      short_composition1: item[1].short_composition1,
    });
  }
  return (
    <div className="bestsellingtablerow m-2 p-2 mx-auto rounded" style={style}>
      <div className="d-flex flex-row">
        <div className="col-1">{item[1].id}</div>
        <div className="col-3">{item[1].name}</div>
        <div className="col-1">{item[1].price}</div>
        <div className="col-3">{item[1].manufacturer_name}</div>
        <div className="col-2">{item[1].pack_size_label}</div>
        <div className="col-1">{item[1].short_composition1}</div>
        <div className="col-0">
          <div style={{ float: "right" }} className="d-flex flex-column">
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => handleDelete(item)}
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

TableRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    manufacturer_name: PropTypes.string.isRequired,
    pack_size_label: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.object.isRequired,
};

TableRow.displayName = "TableRow";
export default TableRow;
