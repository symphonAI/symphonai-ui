import { React, createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const handleLogin = async () => {
    const newToken = await fakeAuth();
    console.log("handle login");

    setToken(newToken);
    navigate("/main")
  };

  const handleLogout = () => {
    setToken(null);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth () {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};
