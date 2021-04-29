// import { REGISTER_NEW_USER } from './../constants/index';

export const REGISTER_NEW_USER = "REGISTER_NEW_USER"
export const LOGIN_USER = "LOGIN_USER"

export const registerNewUser = (email: string, password: string) => ({type: REGISTER_NEW_USER, email, password} as const)

export const loginUser = (email: string, password: string) => ({type:LOGIN_USER , email, password} as const)
