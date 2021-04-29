import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { PrivateRouteInterface } from "../../Types/privateRouter";
import { auth } from "../../Utils/firebase";

const PrivateRoute = (props: PrivateRouteInterface) => {
  const [user] = useAuthState(auth);

  if (user) {
    return <Route {...props} />;
  }

  return <Redirect to="/login"></Redirect>;
};

export default PrivateRoute;
