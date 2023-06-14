import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./AuthProvider";

function ProtectedRoute({ children }) {
  const { checkLogin } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  checkLogin().catch((err) =>
    navigate("/", {
      replace: true,
      state: {
        location,
      },
    })
  );

  return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.shape.isRequired,
};
