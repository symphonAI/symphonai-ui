import { React, createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
// import { useDisplay } from "./DisplayController";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  // const location = useLocation();
  const navigate = useNavigate();

  const [token, setToken] = useLocalStorage("jwt", "");

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
    const redirectUri = `${window.location.origin}/callback`;
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const state = generateRandomString(16);

    const authorizationUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes.join(
      "%20"
    )}&redirect_uri=${redirectUri}&state=${state}`;

    // Make the user login with Spotify
    window.location.href = authorizationUrl;
  };

  const handleCallback = (data) => {
    // eslint-disable-next-line no-unused-vars
    const [_key, authCode] = data.queryKey;
    console.log("Auth code:", authCode);
    if (authCode) {
      return fetch(`${process.env.REACT_APP_SYMPHONAI_API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: authCode }),
      })
        .then((response) => response.text())
        .then((jwt) => {
          setToken(jwt);
          navigate("/main");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    return null;
  };

  const handleLogout = () => {
    setToken("");
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
