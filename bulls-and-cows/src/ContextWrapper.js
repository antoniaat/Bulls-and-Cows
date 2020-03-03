import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const ContextWrapper = props => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        auth,
        updateAuth: isAuth => {
          setAuth(isAuth);
        }
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default ContextWrapper;
