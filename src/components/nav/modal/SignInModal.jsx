import React from "react";
import PropTypes from "prop-types";

export default function SignInModal(props) {
  const { cancelSignInModal, handleSignUpModal } = props;
  const signUpLink = () => {
    cancelSignInModal();
    handleSignUpModal();
  };
  return (
    <div className="h-screen w-screen top-0 flex justify-center items-center fixed bg-black/50">
      <div className=" max-w-sm px-10 pb-4 pt-4 border-white/25 border  bg-white/5 rounded backdrop-blur-md flex flex-col gap-2">
        <div className=" text-white text-center branding">symphonAI</div>
        <h2 className="text-xl font-bold">Welcome back!</h2>
        <p className=" mb-4">
          Sign in with Spotify to to get back to resume your journey of
          discovering new music with symphonAI{" "}
        </p>
        <button
          className=" mb-2 border rounded w-full py-1 hover:bg-white hover:text-red-950 "
          type="button"
        >
          Sign in with Spotify
        </button>
        <button
          onClick={cancelSignInModal}
          className="border rounded w-full py-1 hover:bg-white hover:text-red-950"
          type="button"
        >
          Cancel
        </button>
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={signUpLink}
            className=" font-bold hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

SignInModal.propTypes = {
  cancelSignInModal: PropTypes.func.isRequired,
  handleSignUpModal: PropTypes.func.isRequired,
};
