import React, { createContext, useState } from "react";

export const SearchedNameContext = createContext();

export const SearchedNameProvider = (props) => {
  const [SearchedName, setSearchedName] = useState("");
  return (
    <SearchedNameContext.Provider value={[SearchedName, setSearchedName]}>
      {props.children}
    </SearchedNameContext.Provider>
  );
};
