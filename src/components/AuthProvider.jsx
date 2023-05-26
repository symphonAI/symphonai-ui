import { React, createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import { useDisplay } from "./DisplayController";

const AuthContext = createContext(null);

// LOOK HERE Hi Squid, plz replace with your own Spotify Client ID
const CLIENT_ID = "9a8c581b641f4dde912dbac93122660a";

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  // const location = useLocation();

  const [token, setToken] = useState(null);

  // const { cancelSignInModal, cancelSignUpModal } = useDisplay();

  function generateRandomString(length) {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  const handleLogin = async () => {
    const scopes = [
      "user-top-read",
      "playlist-modify-public",
      "user-read-private",
      "user-read-email",
    ];
    const redirectUri = "http://localhost:8080/callback";
    const clientId = CLIENT_ID;
    const state = generateRandomString(16);

    const authorizationUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes.join(
      "%20"
    )}&redirect_uri=${redirectUri}&state=${state}`;

    // Make the user login with Spotify
    window.location.href = authorizationUrl;

    // setToken(newToken);
    // cancelSignInModal();
    // cancelSignUpModal();

    // const origin = location.state?.from?.pathname || "/main";
    // navigate(origin);
  };

  const handleCallback = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
      navigate("/main");
    } else {
      console.error("Access token not found");
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = useMemo(
    () => ({
      token,
      onLogin: handleLogin,
      onCallback: handleCallback,
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
