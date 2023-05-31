import { React, createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
// import { useDisplay } from "./DisplayController";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  // const location = useLocation();

  console.log("Env vars (debug only):", process.env);

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
    const redirectUri = `${process.env.REACT_APP_SYMPHONAI_API_BASE_URL}/callback`;
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
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
      // localStorage.setItem("token", newToken);
      setToken(newToken);
    } else {
      // console.error("Access token not found");
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
