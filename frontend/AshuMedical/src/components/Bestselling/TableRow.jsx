import PropTypes, { func } from "prop-types";
import React, { useContext } from "react";
import { areEqual } from "react-window";
import { cartActions } from "../store/cartslice";
import "./TableRow.css";
import { EditingContext } from "../Context/Editingcontext";
import { DeleteContext } from "../Context/deletecontext";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
const TableRow = React.memo(({ item, style }) => {
  const dispatch = useDispatch();
  const { toggleEditing, setmedicines } = useContext(EditingContext);
  const { handleDelete } = useContext(DeleteContext);
  const loggedin = useSelector((state) => state.authslice.isLoggedIn);
  function handleclick(item) {
    dispatch(
      cartActions.setcart({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
      })
    );
    Swal.fire("Submitted successfully");
  }
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
    <div className="bestsellingtablerow  d-flex flex-row rounded" style={style}>
      <div className="container d-flex">
        <div className="col-1">{item.id}</div>
        <div className="col-3">{item.name}</div>
        <div className="col-1">{item.price}</div>
        <div className="col-3">{item.manufacturer_name}</div>
        <div className="col-2">{item.pack_size_label}</div>
        <div className="col-1">{item.short_composition1}</div>
      </div>
      {loggedin ? (
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
      ) : (
        <button
          className="btn productcardbutton btn-primary mt-auto"
          onClick={() => handleclick(item)}
        >
          Buy Now
          {/* {btnproperty.index === index ? btnproperty.name : "Buy Now"} */}
        </button>
      )}
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
