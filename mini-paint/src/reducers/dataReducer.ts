import { ActionsTypes } from "../Types/actionTypes";
import { SET_CURRENT_USER_DATA, STORE_USER_DATA } from "../actions/dataActions";

const initialState = {
  currentUserData: "",
  userDataFromFirebase: {},
};

export const DataReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_CURRENT_USER_DATA: {
      return {
        ...state,
        currentUserData: action.data,
      };
    }
    case STORE_USER_DATA: {
      return {
        ...state,
        userDataFromFirebase: action.data,
      };
    }
    default:
      return state;
  }
};
