import { createContext, useState } from "react";

const User_Context = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "xyz", email: "xyz@example.com" });
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <User_Context.Provider value={contextValue}>
      {children}
    </User_Context.Provider>
  );
};

export default User_Context;
