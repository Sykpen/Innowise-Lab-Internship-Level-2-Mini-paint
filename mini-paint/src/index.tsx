import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import { rootReducer } from "./reducers/rootReducer";
import rootSaga from "./Sagas/authorizationSaga";
// import { PrivateRoute } from "./Components/PrivateRoute";

import { auth } from "./Utils/firebase";
import { isUserAlreadyLoggedIn } from "./actions/authorization";

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

auth.onAuthStateChanged((user) => {
	if (user) {
		console.log(1);
		store.dispatch(isUserAlreadyLoggedIn(user.email, true));
	}
});

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<Switch>
					<Route path="/register" component={RegisterForm}></Route>
					<Route path="/login" component={LoginForm}></Route>
					<Route exact path="/" component={App}></Route>
				</Switch>
			</Router>
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
