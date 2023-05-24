import { React } from "react";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInModal from "./modal/SignInModal";
import SignUpModal from "./modal/SignUpModal";
import { useAuth } from "../AuthProvider";
import { useDisplay } from "../DisplayController";

export default function Header() {
  const { token, onLogout } = useAuth();
  const {
    signInModal,
    signUpModal,
    showSignInModal,
    cancelSignInModal,
    showSignUpModal,
    cancelSignUpModal,
  } = useDisplay();

  return (
    <>
      <nav>
        <ul className=" px-4 py-2 flex gap-4 items-center">
          <li>
            <Logo />
          </li>
          {!token && (
            <li className=" ml-auto">
              <SignIn handleSignIn={showSignInModal} />
            </li>
          )}
          {!token && (
            <li>
              <SignUp handleSignUp={showSignUpModal} />
            </li>
          )}
          {token && (
            <li className="ml-auto">
              <a href="/main">Dashboard </a>
            </li>
          )}
          {token && (
            <li>
              <button onClick={onLogout} type="button">Logout</button>
            </li>
          )}
        </ul>
      </nav>
      {signInModal ? (
        <SignInModal
          cancelSignInModal={cancelSignInModal}
          handleSignUpModal={showSignUpModal}
        />
      ) : null}
      {signUpModal ? (
        <SignUpModal
          handleSignInModal={showSignInModal}
          cancelSignUpModal={cancelSignUpModal}
        />
      ) : null}
    </>
  );
}