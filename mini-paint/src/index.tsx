import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm"
import LoginForm from "./Components/LoginForm"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route exact path="/" component={App}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
