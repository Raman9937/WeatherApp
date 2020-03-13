import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  componentDidMount() {
    if (localStorage.isAuth) {
      this.setState({
        isAuth: true
      });
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute
          exact
          path="/"
          component={Dashboard}
          isAuth={this.state.isAuth}
        />
      </Switch>
    );
  }
}
export default App;
