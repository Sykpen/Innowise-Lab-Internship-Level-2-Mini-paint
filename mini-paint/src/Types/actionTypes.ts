import {
  registerNewUser,
  loginUser,
  isUserAlreadyLoggedIn,
} from "./../actions/authorization";

import { setNewTool } from "./../actions/tools";
import {
  setCurrentUserData,
  getCurrentUserData,
} from "./../actions/dataActions";

const actions = {
  registerNewUser,
  loginUser,
  isUserAlreadyLoggedIn,
  setNewTool,
  setCurrentUserData,
  getCurrentUserData,
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
