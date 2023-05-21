import React from "react";
import PropTypes from "prop-types";

export default function SignIn(props) {
  const { handleSignIn } = props;
  return (
    <button onClick={handleSignIn} type="button" className="hover:underline">
      Sign In
    </button>
  );
}

SignIn.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
};
