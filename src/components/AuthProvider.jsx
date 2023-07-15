/* eslint-disable no-console */
import { React, createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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
    const redirectUri = `${window.location.origin}/`;
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const state = generateRandomString(16);

    const authorizationUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes.join(
      "%20"
    )}&redirect_uri=${redirectUri}&state=${state}`;

    // Make the user login with Spotify
    window.location.href = authorizationUrl;
  };

  /**
   * Because the cookie is HTTPOnly, cannot access it through
   * JavaScript. Therefore the only way to check if the cookie
   * is valid is to use it to see if it passes the API auth.
   */
  const checkLogin = () =>
    new Promise((resolve, reject) => {
      console.log("Calling checkLogin()...");
      fetch(`${process.env.REACT_APP_SYMPHONAI_API_BASE_URL}/test-auth`, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (response.ok) {
            setLoggedIn(true);
            resolve(response.text());
          } else {
            setLoggedIn(false);
            reject(new Error(`HTTP status ${response.status}`));
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  const handleCallback = (data) => {
    const [, authCode] = data.queryKey;
    const redirectUri = `${window.location.origin}/`;
    if (authCode) {
      return (
        fetch(`${process.env.REACT_APP_SYMPHONAI_API_BASE_URL}/login`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: authCode, redirectUri }),
        })
          .then((response) => response.text())
          // eslint-disable-next-line no-unused-vars
          .then((_jwt) => {
            console.log("Navigating...");
            // Cookie should be set at this point
            // via the API response's "Set-Cookie"
            // attribute
            // This happens automatically.
            navigate("/main");
          })
          .catch((error) => {
            console.error("Error:", error);
            // TODO I guess we gotta decide how we want this handled
            // Show a "Toast" and make the user log in again, maybe?
          })
      );
    }
    return null;
  };

  const handleLogout = () => {
    // Logout replaces the user's valid cookie
    // with an expired one.
    fetch(`${process.env.REACT_APP_SYMPHONAI_API_BASE_URL}/logout`, {
      method: "GET",
      credentials: "include",
    })
      // eslint-disable-next-line no-unused-vars
      .then((_resp) => {
        setLoggedIn(false);
        navigate("/");
      })
      .catch((err) => {
        console.error("Unable to logout:", err);
      });
  };

  const value = useMemo(
    () => ({
      loggedIn,
      checkLogin,
      setLoggedIn,
      onLogin: handleLogin,
      onCallback: handleCallback,
      onLogout: handleLogout,
    }),
    [loggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};
