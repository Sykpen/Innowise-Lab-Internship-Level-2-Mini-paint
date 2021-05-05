import { combineReducers } from "redux";
import { AuthorizationReducer } from "./authrizationReduser";
import { ToolsReducer } from "./toolsReduser";
import { DataReducer } from "./dataReducer";

export const rootReducer = combineReducers({
  authorization: AuthorizationReducer,
  tools: ToolsReducer,
  data: DataReducer,
});
