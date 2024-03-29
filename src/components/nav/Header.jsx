import { React } from "react";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignInModal from "./modal/SignInModal";
import SignUpModal from "./modal/SignUpModal";
import { useAuth } from "../AuthProvider";
import { useDisplay } from "../DisplayController";

export default function Header() {
  const { loggedIn, onLogout } = useAuth();

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
        <ul className="px-4 py-2 flex gap-4 items-center">
          <li>
            <Logo />
          </li>
          {!loggedIn && (
            <li className="ml-auto">
              <SignIn handleSignIn={showSignInModal} />
            </li>
          )}
          {loggedIn && (
            <li className="ml-auto">
              <button onClick={onLogout} type="button">
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
      {signInModal && (
        <SignInModal
          cancelSignInModal={cancelSignInModal}
          handleSignUpModal={showSignUpModal}
        />
      )}
      {signUpModal && (
        <SignUpModal
          handleSignInModal={showSignInModal}
          cancelSignUpModal={cancelSignUpModal}
        />
      )}
    </>
  );
}
