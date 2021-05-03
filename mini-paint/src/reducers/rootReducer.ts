import { combineReducers } from "redux";
import { AuthorizationReducer } from "./authrizationReduser";
import { ToolsReducer } from "./toolsReduser";

export const rootReducer = combineReducers({
  authorization: AuthorizationReducer,
  tools: ToolsReducer,
});
