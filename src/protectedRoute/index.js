import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/homepage" /> : <Outlet />;
};

export default ProtectedRoute;
