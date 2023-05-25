import { React } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import SignIn from "./SignIn";
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

          {token && (
            <li className="ml-auto hover:underline">
              <NavLink to="/main">Dashboard </NavLink>
            </li>
          )}
          {token && (
            <li className="hover:underline">
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
