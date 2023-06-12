import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./AuthProvider";

function ProtectedRoute({ children }) {
  const { checkLogin } = useAuth();

  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  checkLogin().catch((err) => (
    <Navigate to="/" replace state={{ from: location }} />
  ));

  return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.shape.isRequired,
};
