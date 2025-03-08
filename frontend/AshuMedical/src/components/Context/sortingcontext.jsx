import { createContext, useState } from "react";
import Proptypes from "prop-types";
// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const SortingContext = createContext();
// Create a provider component
export const SortingProvider = ({ children }) => {
  const [isSorted, setIsSorted] = useState(false);
  const toggleSorting = () => {
    setIsSorted((prevState) => !prevState);
  };

  return (
    <SortingContext.Provider value={{ isSorted, toggleSorting }}>
      {children}
    </SortingContext.Provider>
  );
};
SortingProvider.propTypes = { children: Proptypes.node.isRequired };
