import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedComponent = (props) => {
  //if there is already a user in localStorage, redirect to children compmonent
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    //if there is no user in localStorage, redirect to login page
    return <Navigate to="/login" />;
  }
};

export default ProtectedComponent;
