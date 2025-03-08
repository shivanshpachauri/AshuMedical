import { useCallback, useContext, useEffect, useRef } from "react";
import "./confirmationdialog.css";
import { createPortal } from "react-dom";
import { DeleteContext } from "../Context/deletecontext";
export default function Confirmationdialog() {
  const deleteref = useRef();
  const { deletestate, setdeletestate } = useContext(DeleteContext);
  const handleclose = useCallback(() => {
    deleteref.current.close();
    setdeletestate(false);
  }, [setdeletestate]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        handleclose();
      }
    }
    if (deletestate) {
      deleteref.current.showModal();
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [deletestate, handleclose]);

  if (deletestate) {
    deleteref.current.showModal();
  }
  return createPortal(
    <dialog
      className="confirmationdialog text-capitalize rounded"
      ref={deleteref}
    >
      <h1> do you want to delete</h1>
      <div className="d-flex flex-row justify-content-center">
        <button
          className=" m-2 p-2 btn btn-primary"
          onClick={() => {
            deleteref.current.close();
            setdeletestate(true);
          }}
        >
          Yes
        </button>
        <button
          className="m-2 p-2 btn btn-danger"
          onClick={() => {
            deleteref.current.close();
            setdeletestate(false);
          }}
        >
          No
        </button>
      </div>
    </dialog>,
    document.body
  );
}
