import React, { createContext } from "react";

export const Apicontext = createContext();

export const Apiprovider = (props) => {
  //PASTE YOUR API KEY BELOW
  const apikey = "";
  return (
    <Apicontext.Provider value={apikey}>{props.children}</Apicontext.Provider>
  );
};
