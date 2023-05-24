import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import Home from "./pages/Home";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Header from "./components/nav/Header";
import DisplayController from "./components/DisplayController";

function App() {
  return (
    <BrowserRouter>
      <DisplayController>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="main" element={<Main />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </AuthProvider>
      </DisplayController>
    </BrowserRouter>
  );
}

export default App;
