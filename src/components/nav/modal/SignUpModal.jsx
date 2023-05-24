import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../AuthProvider";

export default function SignUpModal({ handleSignInModal, cancelSignUpModal }) {
  const { onLogin } = useAuth();
  const signInLink = () => {
    handleSignInModal();
    cancelSignUpModal();
  };

  return (
    <div className="h-screen w-screen top-0 flex justify-center items-center fixed bg-black/50">
      <div className=" max-w-sm px-10 pb-4 pt-4 border-white/25 border  bg-white/5 rounded backdrop-blur-md flex flex-col gap-2">
        <div className=" text-white text-center branding">symphonAI</div>
        <h2 className="text-xl font-bold">Hello!</h2>
        <p className=" mb-4">
          Sign up and link your Spotify account to start discovering new music
          with the power of symphonAI.
        </p>
        <button
          onClick={onLogin}
          className=" mb-2 border rounded w-full py-1 hover:bg-white hover:text-red-950 "
          type="button"
        >
          Sign up with Spotify
        </button>
        <button
          onClick={cancelSignUpModal}
          className="border rounded w-full py-1 hover:bg-white hover:text-red-950"
          type="button"
        >
          Cancel
        </button>
        <p className="text-sm">
          Already have an account?{" "}
          <button
            type="button"
            onClick={signInLink}
            className=" font-bold hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

SignUpModal.propTypes = {
  cancelSignUpModal: PropTypes.func.isRequired,
  handleSignInModal: PropTypes.func.isRequired,
};
