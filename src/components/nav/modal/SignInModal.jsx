import React from "react";
import PropTypes from "prop-types";

export default function SignInModal(props) {
  const { cancelSignIn } = props;
  return (
    <div className="h-screen w-screen top-0 flex justify-center items-center fixed bg-black/50">
      <div className=" max-w-md px-12 py-6  bg-white/5 rounded backdrop-blur-md flex flex-col gap-2">
        <div className=" text-white branding">symphonAI</div>
        <p>
          Welcome back! Sign in with Spotify to to get back to resume your
          journey of discovering new music with symphonAI{" "}
        </p>
        <button
          className="border rounded w-full py-1 hover:bg-white hover:text-red-950 "
          type="button"
        >
          Sign in with Spotify
        </button>
        <button
          onClick={cancelSignIn}
          className="border rounded w-full py-1 hover:bg-white hover:text-red-950"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

SignInModal.propTypes = {
  cancelSignIn: PropTypes.func.isRequired,
};
