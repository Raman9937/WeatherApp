import React, { Component, Fragment } from "react";
import { AuthContext } from "./AuthContext";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  static contextType = AuthContext;

  componentDidMount() {
    console.log("Register");
    if (localStorage.isAuth) {
      console.log("auth true");
      this.props.history.push("/");
    }
  }

  handelChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { registerUser } = this.context;
    const { email, password, name } = this.state;
    let user = {
      email,
      password,
      name
    };
    registerUser(user);
    this.props.history.push("/login");

    // localStorage.setItem("username", email);
    // localStorage.setItem("password", password);
  };

  render() {
    const { email, password, name } = this.state;
    console.log("context object", this.context);

    return (
      <Fragment>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="password">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={this.handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={this.handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={this.handelChange}
            />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Register;
