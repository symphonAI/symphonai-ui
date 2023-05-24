import { React } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInModal from "./modal/SignInModal";
import SignUpModal from "./modal/SignUpModal";
import { useAuth } from "../AuthProvider";

export default function Header({
  signInModal,
  signUpModal,
  handleSignInModal,
  cancelSignInModal,
  handleSignUpModal,
  cancelSignUpModal,
}) {
  const { token } = useAuth();

  return (
    <>
      <nav>
        <ul className=" px-4 py-2 flex gap-4 items-center">
          <li>
            <Logo />
          </li>
          {!token && (
            <li className=" ml-auto">
              <SignIn handleSignIn={handleSignInModal} />
            </li>
          )}
          {!token && (
            <li>
              <SignUp handleSignUp={handleSignUpModal} />
            </li>
          )}
          {token && <li className="ml-auto"><a href="/main">Dashboard </a></li>}
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
