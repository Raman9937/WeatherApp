import React, { Component, Fragment } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  componentDidMount() {
    if (localStorage.isAuth) {
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
    const { email, password, name } = this.state;
    localStorage.setItem("username", email);
    localStorage.setItem("password", password);
    this.props.history.push("/login");
  };

  render() {
    const { email, password, name } = this.state;
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
