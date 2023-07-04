import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignupPage from "../pages/SignupPage";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/Loginpage";
import ProtectedRoute from "../protectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />

          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
