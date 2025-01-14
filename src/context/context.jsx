import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(); 

const AppProvider = ({ children }) => {
  const [formErrors, setFormErrors] = useState({
    avatar: false,
    fullName: false,
    email: false,
    gitHubUsername: false,
  });

  const [formData, setFormData] = useState({
    avatar: null,
    fullName: "",
    email: "",
    gitHubUsername: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <AppContext.Provider
      value={{
        formErrors,
        setFormErrors,
        formData,
        setFormData,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider; 
