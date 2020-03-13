import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./components/AuthContext";

const App = () => {
  const { setCurrentUser, isAuth } = useContext(AuthContext);
  console.log("APP", isAuth);

  useEffect(() => {
    //check for isAuth
    if (localStorage.user) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute path="/" isAuth={isAuth} component={Dashboard} />
    </Switch>
  );
};

export default App;
