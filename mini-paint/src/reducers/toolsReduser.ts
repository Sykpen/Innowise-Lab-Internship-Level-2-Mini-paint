import { SET_NEW_TOOL } from "../actions/tools";
import { ActionsTypes } from "../Types/actionTypes";

const initialState = {
  currentChosenTool: "pencil",
};

export const ToolsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_NEW_TOOL: {
      return {
        ...state,
        currentChosenTool: action.toolName,
      };
    }
    default:
      return state;
  }
};
