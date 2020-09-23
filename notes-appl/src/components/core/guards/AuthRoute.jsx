import React from "react";
import { getLoggedUser } from "../api/users.api";
import { Redirect } from "react-router-dom";

export function AuthRoute(props) {
  const loggedUser = getLoggedUser();
  
  if (props.admin && loggedUser.isAdmin) {
    return <props.component {...props} />;
  }


  return <Redirect to="/login" />;
}  