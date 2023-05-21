import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Header from "./components/nav/Header";

function App() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
  };

  const cancelSignIn = () => {
    setSignIn(false);
  };

  const handleSignUp = () => {
    setSignUp(true);
  };
  return (
    <>
      <Header
        signIn={signIn}
        signUp={signUp}
        handleSignIn={handleSignIn}
        cancelSignIn={cancelSignIn}
        handleSignUp={handleSignUp}
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
