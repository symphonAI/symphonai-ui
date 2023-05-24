import { React, createContext, useContext, useState } from "react";
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

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    signInModal,
    signUpModal,
    showSignInModal,
    cancelSignInModal,
    showSignUpModal,
    cancelSignUpModal,
  }

  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
}

export default DisplayController;

export function useDisplay() {
  return useContext(DisplayContext);
}

DisplayController.propTypes = {
  children: PropTypes.shape.isRequired,
};
