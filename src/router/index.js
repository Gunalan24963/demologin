import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignupPage from "../pages/SignupPage";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/Loginpage";
import ProtectedRoute from "../protectedRoute";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
          </Route>

          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
