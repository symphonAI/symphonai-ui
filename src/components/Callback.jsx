import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useAuth } from "./AuthProvider";

function Callback() {
  const location = useLocation();
  const { onCallback } = useAuth();

  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const { isLoading, isError } = useQuery(["onCallback", code], onCallback, {
    enabled: !!code, // Only enable the query when code is present
    retry: false, // Disable automatic retries
  });

  if (isLoading) {
    // Render a loading state while the API call is in progress
    return <div>Loading...</div>;
  }

  if (isError) {
    // Handle the error state
    return <div>Error fetching data</div>;
  }

  // Render your component using the retrieved data
  return null;
}

export default Callback;
