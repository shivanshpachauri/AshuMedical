import { createContext, useState } from "react";
import Proptypes from "prop-types";
// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const MedicineContext = createContext();
// Create a provider component
export const MedicineProvider = ({ children }) => {
  const [Medicine, setIsMedicine] = useState({
    id: 0,
    name: "",
    price: 0.0,
    manufacturer_name: "",
    pack_size_label: "",
  });
  const toggleMedicine = () => {
    setIsMedicine((prevState) => !prevState);
  };

  return (
    <MedicineContext.Provider value={{ Medicine, toggleMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};
MedicineProvider.propTypes = { children: Proptypes.node.isRequired };
