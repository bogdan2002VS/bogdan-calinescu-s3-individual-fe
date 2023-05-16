import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../helpers/firebase";
const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userCheck, setUserCheck] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserCheck(user);
      } else {
        setUserCheck(false);
      }
    });
  }, []);
  const values = {
    userCheck,
    setUserCheck,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
