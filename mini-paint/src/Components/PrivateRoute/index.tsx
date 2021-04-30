import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { PrivateRouteInterface } from "../../Types/privateRouter";
import { auth } from "../../Utils/firebase";
import { useSelector } from "react-redux";

interface RootState {
	authorization: Iauthorization;
}

interface Iauthorization {
	userId: string;
	currentUserEmail: string;
	isUserAlreadyLoggedIn: boolean;
}
export const PrivateRoute = (props: PrivateRouteInterface) => {
	const isUserLoggedIn = useSelector(
		(state: RootState) => state.authorization.isUserAlreadyLoggedIn
	);

	console.log(2);

	if (isUserLoggedIn) {
		return <Route {...props} />;
	}

	return <Redirect to="/login"></Redirect>;
};
