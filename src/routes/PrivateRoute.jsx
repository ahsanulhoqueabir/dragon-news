import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;

/**
 * steps:
 * 1. check user is logged in or not
 * 2. if user is logged in ,then allow to visit route
 * 3. else redirect the user to the login page
 * 4. set up the private/protected router
 * 5. handle loading
 *
 *
 *
 *
 */
