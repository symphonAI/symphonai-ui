import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Header from "./components/nav/Header";

function App() {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleSignInModal = () => {
    setSignInModal(true);
  };

  const cancelSignInModal = () => {
    setSignInModal(false);
  };

  const handleSignUpModal = () => {
    setSignUpModal(true);
  };

  const cancelSignUpModal = () => {
    setSignUpModal(false);
  }
  return (
    <>
      <Header
        signInModal={signInModal}
        signUpModal={signUpModal}
        handleSignInModal={handleSignInModal}
        cancelSignInModal={cancelSignInModal}
        handleSignUpModal={handleSignUpModal}
        cancelSignUpModal={cancelSignUpModal}
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
