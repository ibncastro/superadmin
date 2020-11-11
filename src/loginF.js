import React, { Component } from "react";
import LoginMutation from "./components/mutations/login";
import Error from "./error";

import swal from 'sweetalert'
import history from './history'


import loginImg from "./app-assets/images/pages/login.png";

class Login extends Component {
  state = {
    showlogin: true,
    email: "",
    password: "",
  };

  login = (event) => {
    event.preventDefault();
    this.props.login({
      variables: {
        email: this.state.email,
        password: this.state.password,
      },
    }).then(() => {
      swal("Login Success!", "Click the button to view your dashboard", "success").then(() => {
        this.props.changeLoginState(true)
        history.push('/dashboard')
        history.go()
      })
    }).catch((e) => {
      swal("Login Faild!", "Please try again", "fa").then(() => {
          history.push('/')
          history.go()
      })
    })
  };

  render() {
    const { changeLoginState } = this.props;
    const { error, loading } = this.props;
    return (
      <div className="app-content content">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body"></div>
          <section className="row flexbox-container">
            <div className="col-xl-8 col-11 d-flex justify-content-center">
              <div className="card bg-authentication rounded-0 mb-0">
                <div className="row m-0">
                  <div className="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                    <img src={loginImg} alt="branding logo" />
                  </div>
                  {this.state.showlogin && (
                    <div className="col-lg-6 col-12 p-0">
                      <div className="card rounded-0 mb-0 px-2">
                        <div className="card-header pb-1">
                          <div className="card-title">
                            <h4 className="mb-0">Login</h4>
                            {error && (
                              <Error>
                                <h4>There was an error loggin in!</h4>
                              </Error>
                            )}
                          </div>
                        </div>
                        <p className="px-2">
                          Welcome back, please login to your account.
                        </p>
                        <div className="card-content pb-3">
                          <div className="card-body pt-1">
                            <form onSubmit={this.login}>
                              <fieldset className="form-label-group form-group position-relative has-icon-left">
                                <input
                                  type="text"
                                  onChange={(event) =>
                                    this.setState({ email: event.target.value })
                                  }
                                  className="form-control"
                                  id="user-name"
                                  placeholder="Email"
                                  required
                                />
                                <div className="form-control-position">
                                  <i className="feather icon-user" />
                                </div>
                                <label htmlFor="user-name">Email</label>
                              </fieldset>
                              <fieldset className="form-label-group position-relative has-icon-left">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="user-password"
                                  placeholder="Password"
                                  onChange={(event) =>
                                    this.setState({
                                      password: event.target.value,
                                    })
                                  }
                                  required
                                />
                                <div className="form-control-position">
                                  <i className="feather icon-lock" />
                                </div>
                                <label htmlFor="user-password">Password</label>
                              </fieldset>
                              <div className="form-group d-flex justify-content-between align-items-center">
                                <div className="text-left"></div>
                                <div className="text-right">
                                  <a
                                    href="auth-forgot-password.html"
                                    className="card-link"
                                  >
                                    Forgot Password?
                                  </a>
                                </div>
                              </div>
                              
                              <button
                                type="submit"
                                className="btn btn-primary float-right btn-inline"
                              >
                                { loading ? (
                                  <span
                                    className="spinner-grow spinner-grow-sm"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : (
                                  "Login"
                                )}
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default class LoginRegister extends Component {
  render() {
    const { changeLoginState } = this.props;
    return (
      <LoginMutation changeLoginState={changeLoginState}>
        <Login changeLoginState={changeLoginState} />
      </LoginMutation>
    );
  }
}
