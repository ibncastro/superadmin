import React, { Component } from "react";
import swal from "sweetalert";
import history from '../../history'


export default class ChangePassword extends Component {
  state = {
    oldPassword: "",
    newPassword: "",
    confirmPass: ""
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
   if (this.state.newPassword === this.state.confirmPass){
    this.props.changePass({
      variables: {
        details: {
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword
        }
      }
    }).then(() => {
      swal("Password Change Successful"," soo ", "success").then(() => {
        history.push("/profile")
        history.go()
      })
    }).catch((e) => {
      console.log(e.message)
    })
   } else {
     swal("Passwords do not match", " Failed")
   }
  }


  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-body">
            <div
              className="tab-pane"
              id="account-vertical-password"
              role="tabpanel"
              aria-labelledby="account-pill-password"
              aria-expanded="false"
            >
              <form noValidate onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <div className="controls">
                        <label htmlFor="account-old-password">Old Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="account-old-password"
                          required
                          placeholder="Old Password"
                          onChange={this.handleChange("oldPassword")}
                          data-validation-required-message="This old password field is required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="controls">
                        <label htmlFor="account-new-password">New Password</label>
                        <input
                          type="password"
                          name="password"
                          id="account-new-password"
                          className="form-control"
                          placeholder="New Password"
                          required
                          onChange={this.handleChange("newPassword")}
                          data-validation-required-message="The password field is required"
                          minLength="6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="controls">
                        <label htmlFor="account-retype-new-password">
                          Retype New Password
                        </label>
                        <input
                          type="password"
                          name="con-password"
                          className="form-control"
                          required
                          id="account-retype-new-password"
                          data-validation-match-match="password"
                          placeholder="Retype Password"
                          onChange={this.handleChange("confirmPass")}
                          data-validation-required-message="The Confirm password field is required"
                          minLength="6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-sm-row flex-column justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-primary mr-sm-1 mb-1 mb-sm-0"
                    >
                      Save changes
                    </button>
                    <button type="reset" className="btn btn-outline-warning">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
