import { areEqual } from "react-window";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import Swal from "sweetalert2";
import { cartActions } from "../store/cartslice";
import Deletemedicines from "../Http/Deletemedicines";
import { EditingContext } from "../Context/Editingcontext";
import { DeleteContext } from "../Context/deletecontext";
const CustomList = React.memo(function CustomList({ item, style }) {
  const { toggleEditing, setmedicines } = useContext(EditingContext);
  const { setdeletestate } = useContext(DeleteContext);

  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.authslice.isLoggedIn);

  const mutatemedicines = Deletemedicines();
  const handleDelete = React.useCallback(
    (medicine) => {
      mutatemedicines(medicine);
      Swal.fire("Deleted successfully");
      setdeletestate(true);
    },
    [mutatemedicines, setdeletestate]
  );
  function handleclick(item) {
    dispatch(
      cartActions.setcart({
        id: item.id,
        name: item.name,
        description: item.short_composition1,
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
    <div className="searchlist  bestsellingtablerow   " style={style}>
      <div>{item.id}</div>

      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.manufacturer_name}</div>
      <div>{item.pack_size_label}</div>
      <div>{item.short_composition1}</div>

      {isLoggedin ? (
        <div className="col-0 mt-1 mx-1 d-flex flex-column">
          <button
            type="button"
            className="btn btn-danger "
            style={{
              margin: "3px",
              padding: "3px",
              height: "5em",
              width: "5em",
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            type="button"
            className="visible  btn btn-primary"
            style={{
              margin: "3px",
              padding: "3px",
              height: "5em",
              width: "5em",
            }}
            onClick={handleedit}
          >
            Edit
          </button>
        </div>
      ) : (
        <button
          className="     btn productcardbutton btn-primary "
          onClick={() => handleclick(item)}
        >
          Buy Now
        </button>
      )}
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
