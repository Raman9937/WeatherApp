import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = props => {
  let userData = {
    email: "",
    password: ""
  };
  const [data, handelChange] = useState(userData);

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    console.log("Login");
    if (auth === true) {
      console.log("true");
      props.history.push("/");
    }
  }, [auth, props.history]);

  const handelSubmit = e => {
    const { email, password } = data;
    e.preventDefault();
    let username = localStorage.getItem("username");
    let password2 = localStorage.getItem("password");
    if (username === email && password === password2) {
      localStorage.setItem("isAuth", true);
      setAuth(true);
    } else {
      alert("Invalid credentials");
    }
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
