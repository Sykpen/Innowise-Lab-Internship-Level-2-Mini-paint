import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { PrivateRouteInterface } from "../../Types/privateRouter";
import { auth } from "../../Utils/firebase";
import { useDispatch } from "react-redux";
import {isUserAlreadyLoggedIn} from '../../actions/authorization'

export const PrivateRoute = (props: PrivateRouteInterface) => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  if (user) {
    dispatch(isUserAlreadyLoggedIn(user.uid, user.email || ''))
  }
  
  if (!user) {
    return <Redirect to="/login"/>;
  }
  return <Route {...props} />;
};
