export const REGISTER_NEW_USER = "REGISTER_NEW_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SET_IS_USER_LOGIN = "SET_IS_USER_LOGIN";
export const LOGOUT_USER = "LOGOUT_USER";

export const registerNewUser = (email: string, password: string) =>
  ({ type: REGISTER_NEW_USER, email, password } as const);

export const loginUser = (email: string, password: string) =>
  ({ type: LOGIN_USER, email, password } as const);

export const isUserAlreadyLoggedIn = (userId: string, email: string) =>
  ({ type: SET_IS_USER_LOGIN, email, userId } as const);

export const logoutCurrentUser = () => ({ type: LOGOUT_USER });
