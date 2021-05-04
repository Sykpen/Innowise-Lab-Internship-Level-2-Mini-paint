export const SET_CURRENT_USER_DATA = "SET_CURRENT_USER_DATA";

export const setCurrentUserData = (data: string, userId: string) => ({type: SET_CURRENT_USER_DATA, data, userId} as const);