import { useCallback, createContext, useState } from "react";
import Proptypes from "prop-types";
import Deletemedicines from "../Http/Deletemedicines";
import Swal from "sweetalert2";
// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const DeleteContext = createContext();
// Create a provider component
export const DeleteProvider = ({ children }) => {
  const [deletestate, setdeletestate] = useState(false);

  const setdelete = useCallback(() => {
    setdeletestate(true);
  }, [setdeletestate]);

  const mutate = Deletemedicines();

  const handleDelete = useCallback(
    (medicine) => {
      setdelete();

      mutate(medicine);
      Swal.fire("Deleted successfully");
    },
    [mutate, setdelete]
  );
  const deleteobject = {
    deletestate: deletestate,
    setdeletestate: setdeletestate,
    setdelete: setdelete,
    handleDelete: handleDelete,
  };
  return (
    <DeleteContext.Provider value={deleteobject}>
      {children}
    </DeleteContext.Provider>
  );
};
DeleteProvider.propTypes = { children: Proptypes.node.isRequired };
