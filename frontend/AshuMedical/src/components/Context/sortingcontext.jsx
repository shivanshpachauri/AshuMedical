import { createContext, useState } from "react";
import Proptypes from "prop-types";
// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const SortingContext = createContext();
// Create a provider component
export const SortingProvider = ({ children }) => {
  const [isSorted, setIsSorted] = useState({
    bestselling: false,
    search: false,
  });
  const togglebestselling = () => {
    setIsSorted({
      ...isSorted,
      bestselling: !isSorted.bestselling,
    });
  };

  const togglesearch = () => {
    setIsSorted({
      ...isSorted,
      search: !isSorted.search,
    });
  };
  return (
    <SortingContext.Provider
      value={{ isSorted, togglesearch, togglebestselling }}
    >
      {children}
    </SortingContext.Provider>
  );
};
SortingProvider.propTypes = { children: Proptypes.node.isRequired };
