import {
  registerNewUser,
  loginUser,
  isUserAlreadyLoggedIn,
} from "./../actions/authorization";

import { setNewTool } from "./../actions/tools";

const actions = {
  registerNewUser,
  loginUser,
  isUserAlreadyLoggedIn,
  setNewTool,
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
