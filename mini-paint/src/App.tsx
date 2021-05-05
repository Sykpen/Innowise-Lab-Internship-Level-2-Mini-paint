import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import MainAppComponent from "./Components/MainAppComponent";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import AllPaintings from "./Components/AllPaintings";

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
          <Route path="/all" component={AllPaintings}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
