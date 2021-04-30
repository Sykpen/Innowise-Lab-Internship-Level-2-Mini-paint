import {
	registerNewUser,
	loginUser,
	isUserAlreadyLoggedIn,
} from "./../actions/authorization";

const actions = { registerNewUser, loginUser, isUserAlreadyLoggedIn };

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
