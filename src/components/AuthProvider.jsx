import { React, createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { useDisplay } from "./DisplayController";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);

  const { cancelSignInModal, cancelSignUpModal } = useDisplay();

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const handleLogin = async () => {
    const newToken = await fakeAuth();
    setToken(newToken);
    cancelSignInModal();

    const origin = location.state?.from?.pathname || "/main";
    navigate(origin);
  };

  const handleSignUp = async () => {
    const newToken = await fakeAuth();
    setToken(newToken);
    cancelSignUpModal();

    const origin = location.state?.from?.pathname || "/main";
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = useMemo(
    () => ({
      token,
      onLogin: handleLogin,
      onSignUp: handleSignUp,
      onLogout: handleLogout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};
