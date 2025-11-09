import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) return <div className="">loading...</div>;

  if (user) return children;

  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
};

export default PrivateRoute;
