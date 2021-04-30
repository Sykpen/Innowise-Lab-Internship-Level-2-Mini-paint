// import { REGISTER_NEW_USER } from './../constants/index';

export const REGISTER_NEW_USER = "REGISTER_NEW_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SET_IS_USER_LOGIN = "SET_IS_USER_LOGIN";

export const registerNewUser = (email: string, password: string) =>
	({ type: REGISTER_NEW_USER, email, password } as const);

export const loginUser = (email: string, password: string) =>
	({ type: LOGIN_USER, email, password } as const);

export const isUserAlreadyLoggedIn = (
	email: string | null,
	isUserAlreadyLoggedIn: boolean
) => ({ type: SET_IS_USER_LOGIN, email, isUserAlreadyLoggedIn } as const);
