import React from "react";
import AppContext, { defaultValues as state } from "./AppContext";

const { Provider } = AppContext;

const AppContextProvider = ({ children }) => {
  return <Provider value={state}>{children}</Provider>;
};

export default AppContextProvider;