import { React, createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const DisplayContext = createContext(null);

function DisplayController({ children }) {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const showSignInModal = () => {
    setSignInModal(true);
  };

  const cancelSignInModal = () => {
    setSignInModal(false);
  };

  const showSignUpModal = () => {
    setSignUpModal(true);
  };

  const cancelSignUpModal = () => {
    setSignUpModal(false);
  };

  const value = useMemo(
    () => ({
      signInModal,
      signUpModal,
      showSignInModal,
      cancelSignInModal,
      showSignUpModal,
      cancelSignUpModal,
    }),
    [signInModal, signUpModal]
  );

  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
}

export default DisplayController;

export function useDisplay() {
  return useContext(DisplayContext);
}

DisplayController.propTypes = {
  children: PropTypes.func.isRequired,
};
