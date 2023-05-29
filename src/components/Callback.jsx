import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function Callback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { onCallback } = useAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const accessToken = searchParams.get("access_token");

    if (accessToken) {
      // Handle the access token on the frontend
      onCallback(accessToken);
      navigate("/main");
    } else {
      // console.error("Access token not found");
      // Handle the case when the access token is missing or invalid
      // For example, redirect to an error page or display an error message
    }
  }, []);

  return null; // Render nothing or a loading indicator since this component handles the logic internally
}

export default Callback;
