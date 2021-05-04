import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers/rootReducer";
import rootSaga from "./Sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
   <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
