import { LOGIN_USER } from "../actions/authorization";
import { REGISTER_NEW_USER } from "../constants";

import { ActionsTypes } from "../Types/actionTypes";

const initialState = {
  userId: "",
  currentUserEmail: "",
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
      };
      case LOGIN_USER:
        return {
          ...state,
          currentUserEmail: action.email,
        };
    default:
      return state;
  }
};
