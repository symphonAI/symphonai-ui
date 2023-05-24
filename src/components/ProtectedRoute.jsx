import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./AuthProvider";

function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const location = useLocation();
  if (!token) {
    return <Navigate to="/" replace state={{from: location}} />;
  }
  return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.shape.isRequired,
};
