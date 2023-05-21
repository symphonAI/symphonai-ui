import React from "react";
import PropTypes from "prop-types";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function SignUp(props) {
  const { handleSignUp } = props;
  return (
    <button
      onClick={handleSignUp}
      type="button"
      className="w-fit rounded px-4 py-1 flex gap-1 justify-center items-center  border-white border hover:bg-white hover:text-red-950"
    >
      Sign Up
      <ChevronDoubleRightIcon className="h-4 w-4" />
    </button>
  );
}

SignUp.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
};
