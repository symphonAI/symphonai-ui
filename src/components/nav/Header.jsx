import { React } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInModal from "./modal/SignInModal";
import SignUpModal from "./modal/SignUpModal";

export default function Header(props) {
  const { signIn, signUp, handleSignIn, cancelSignIn, handleSignUp } = props;

  return (
    <>
      <nav>
        <ul className=" px-4 py-2 flex gap-4 items-center">
          <li>
            <Logo />
          </li>
          <li className=" ml-auto">
            <SignIn handleSignIn={handleSignIn} />
          </li>
          <li>
            <SignUp handleSignUp={handleSignUp} />
          </li>
        </ul>
      </nav>
      {signIn ? <SignInModal cancelSignIn={cancelSignIn} /> : <div />}
      {signUp ? <SignUpModal /> : <div />}
    </>
  );
}

Header.propTypes = {
  signIn: PropTypes.bool.isRequired,
  signUp: PropTypes.bool.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  cancelSignIn: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};
