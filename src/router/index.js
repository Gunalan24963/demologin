import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Loginpage";
import SignupPage from "../pages/SignupPage";
import Homepage from "../pages/Homepage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
