import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userInfo = window.sessionStorage.getItem("tkn");

  return userInfo ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
