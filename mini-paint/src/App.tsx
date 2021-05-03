import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import MainAppComponent from "./Components/MainAppComponent";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={MainAppComponent}
          ></PrivateRoute>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
