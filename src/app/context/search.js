"use client";

import { createContext, useContext, useState } from "react";

// criando contexto
export const SearchContext = createContext();

// provider
export const SearchContextProvider = ({ children }) => {
    const [searchActive, setSearchActive] = useState(false);
  return (
    <SearchContext.Provider value={{searchActive, setSearchActive}}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
