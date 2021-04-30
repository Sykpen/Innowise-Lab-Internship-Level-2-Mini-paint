import firebase from "firebase";
import "firebase/auth";

import ReduxSagaFirebase from "redux-saga-firebase";

const app = firebase.initializeApp({
	apiKey: "AIzaSyA52V9e7wL_7X67VcClHfZA3MRklJhs2eA",
	authDomain: "minipaint-adee7.firebaseapp.com",
	projectId: "minipaint-adee7",
	storageBucket: "minipaint-adee7.appspot.com",
	messagingSenderId: 217354248374,
	appId: "1:217354248374:web:0bb9a208bdaef6db990617",
});

export const auth = firebase.auth();
export default app;
export const rsf = new ReduxSagaFirebase(app);
