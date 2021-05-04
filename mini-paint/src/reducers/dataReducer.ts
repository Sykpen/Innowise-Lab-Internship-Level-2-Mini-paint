import { ActionsTypes } from "../Types/actionTypes";
import { SET_CURRENT_USER_DATA } from "../actions/dataActions";

const initialState = {
  currentUserData: [],
};

export const ToolsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_CURRENT_USER_DATA: {
      return {
        ...state,
        currentUserData: action.data,
      };
    }
    default:
      return state;
  }
};
