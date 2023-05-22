import { React } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInModal from "./modal/SignInModal";
import SignUpModal from "./modal/SignUpModal";

export default function Header(props) {
  const {
    signInModal,
    signUpModal,
    handleSignInModal,
    cancelSignInModal,
    handleSignUpModal,
    cancelSignUpModal,
  } = props;

  return (
    <>
      <nav>
        <ul className=" px-4 py-2 flex gap-4 items-center">
          <li>
            <Logo />
          </li>
          <li className=" ml-auto">
            <SignIn handleSignIn={handleSignInModal} />
          </li>
          <li>
            <SignUp handleSignUp={handleSignUpModal} />
          </li>
        </ul>
      </nav>
      {signInModal ? (
        <SignInModal
          cancelSignInModal={cancelSignInModal}
          handleSignUpModal={handleSignUpModal}
        />
      ) : null}
      {signUpModal ? (
        <SignUpModal
          handleSignInModal={handleSignInModal}
          cancelSignUpModal={cancelSignUpModal}
        />
      ) : null}
    </>
  );
}

Header.propTypes = {
  signInModal: PropTypes.bool.isRequired,
  signUpModal: PropTypes.bool.isRequired,
  handleSignInModal: PropTypes.func.isRequired,
  cancelSignInModal: PropTypes.func.isRequired,
  handleSignUpModal: PropTypes.func.isRequired,
  cancelSignUpModal: PropTypes.func.isRequired,
};
