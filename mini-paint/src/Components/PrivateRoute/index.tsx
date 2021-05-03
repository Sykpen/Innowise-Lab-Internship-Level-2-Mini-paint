import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { PrivateRouteInterface } from "../../Types/privateRouter";
import { auth } from "../../Utils/firebase";

export const PrivateRoute = (props: PrivateRouteInterface) => {
  const [user] = useAuthState(auth);

  console.log(user);

  if (!user) {
    return <Redirect to="/login"/>;
  }
  return <Route {...props} />;
};
