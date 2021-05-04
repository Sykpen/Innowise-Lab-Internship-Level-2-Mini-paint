import { LOGIN_USER, SET_IS_USER_LOGIN } from "../actions/authorization";
import { REGISTER_NEW_USER } from "../constants";

import { ActionsTypes } from "../Types/actionTypes";

const initialState = {
  userId: "",
  currentUserEmail: "",
  isUserAlreadyLoggedIn: false,
};

export const AuthorizationReducer = (
  state = initialState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case REGISTER_NEW_USER:
      return {
        ...state,
        currentUserEmail: action.email,
        isUserAlreadyLoggedIn: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUserEmail: action.email,
        isUserAlreadyLoggedIn: true,
      };
    case SET_IS_USER_LOGIN:
      return {
        ...state,
        userId: action.userId,
		currentUserEmail: action.email,
        isUserAlreadyLoggedIn: true,
      };
    default:
      return state;
  }
};
