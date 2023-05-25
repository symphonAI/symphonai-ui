import { React, createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
// import { useDisplay } from "./DisplayController";

const AuthContext = createContext(null);

// Hi Squid, plz replace with your own Client ID
const CLIENT_ID = "ab28c6fb282b46608c95dc39fa5c95b0";

export default function AuthProvider({ children }) {
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

  const handleLogout = () => {
    setToken(null);
  };

  const value = useMemo(
    () => ({
      token,
      onLogin: handleLogin,
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
