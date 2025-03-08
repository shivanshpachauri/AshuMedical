import { createContext, useState } from "react";
import Proptypes from "prop-types";
// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const EditingContext = createContext();
// Create a provider component
export const EditingProvider = ({ children }) => {
  const [isEdited, setIsEdited] = useState(false);

  const [medicines, setmedicines] = useState({
    id: "",
    name: "",
    price: "",
    manufacturer_name: "",
    short_composition1: "",
    pack_size_label: "",
  });
  const toggleEditing = () => {
    setIsEdited((prevState) => !prevState);
    // setIsEdited((state)=>{..state,!state});
  };
  const Editobject = {
    isEdited: isEdited,
    toggleEditing: toggleEditing,
    medicines: medicines,
    setmedicines: setmedicines,
  };
  return (
    <EditingContext.Provider value={Editobject}>
      {children}
    </EditingContext.Provider>
  );
};
EditingProvider.propTypes = { children: Proptypes.node.isRequired };
