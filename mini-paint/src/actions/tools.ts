export const SET_NEW_TOOL = "SET_NEW_TOOL";

export const setNewTool = (toolName: string) =>
  ({ type: SET_NEW_TOOL, toolName } as const);
