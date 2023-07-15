import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./components/AuthProvider";
import Home from "./pages/Home";

import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import Header from "./components/nav/Header";
import Footer from "./components/Footer";
import DisplayController from "./components/DisplayController";
import ProtectedRoute from "./components/ProtectedRoute";
import Callback from "./components/Callback";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DisplayController>
          <AuthProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="main"
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
              />
              <Route path="callback" element={<Callback />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer versionNumber="0.1.0" />
          </AuthProvider>
        </DisplayController>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
