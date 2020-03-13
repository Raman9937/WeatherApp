import React, { useState, Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "./AuthContext";

const Login = props => {
  let userData = {
    email: "",
    password: ""
  };
  const [data, handelChange] = useState(userData);
  const { user, isAuth, login } = useContext(AuthContext);
  console.log(user, isAuth);

  useEffect(() => {
    console.log("auth changed");
    if (isAuth === true) {
      console.log("true");
      props.history.push("/");
    }
  }, [isAuth]);

  const handelSubmit = e => {
    e.preventDefault();
    console.log("clicked");
    login(data);
  };

  const handelInputChange = e => {
    handelChange({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Fragment>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={data.email}
            className="form-control"
            onChange={handelInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            className="form-control"
            value={data.password}
            onChange={handelInputChange}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <span>
            New member ? <Link to="/register">Register here</Link>
          </span>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
