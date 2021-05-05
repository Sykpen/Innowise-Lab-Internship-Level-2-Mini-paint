import { dataInterface } from "../Types/dataTypes";

export const SET_CURRENT_USER_DATA = "SET_CURRENT_USER_DATA";
export const GET_CURRENT_USER_DATA = "GET_CURRENT_USER_DATA";
export const STORE_USER_DATA = "STORE_USER_DATA";

export const setCurrentUserData = (data: string, userId: string) =>
  ({ type: SET_CURRENT_USER_DATA, data, userId } as const);

export const getCurrentUserData = (userId: string) =>
  ({ type: GET_CURRENT_USER_DATA, userId } as const);

export const storeUserData = (data: dataInterface) =>
  ({ type: STORE_USER_DATA, data } as const);
