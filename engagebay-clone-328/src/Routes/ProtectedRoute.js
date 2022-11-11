import React from "react";
import { useUserAuth } from "../Context/userAuthContext";

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  if (!user) {
    // redirect to login page
  }
  return children;
};

export default ProtectedRoute;
