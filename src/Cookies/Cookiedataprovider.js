import React, { createContext, useContext, useState } from "react";

const CookieDataprovider = createContext();

export const useCookie = () => useContext(CookieDataprovider);

const CookieDataProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  return (
    <CookieDataprovider.Provider value={{ email, setEmail }}>
      {children}
    </CookieDataprovider.Provider>
  );
};

export default CookieDataProvider;
