import React, { Component } from "react";
import swal from "sweetalert";
import img from "../../app-assets/images/portrait/small/avatar-s-12.jpg";

import history from '../history'

export default class General extends Component {
  state = {
    email: this.props.currentUser.email,
    houseNo: this.props.currentUser.houseNo,
    ghanaPostCode: this.props.currentUser.ghanaPostCode,
    postalAddress: this.props.currentUser.postalAddress,
    mobileNo1: this.props.currentUser.mobileNo1,
    mobileNo2: this.props.currentUser.mobileNo2
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateInfo({
      variables: {
        details: {
          email: this.state.email,
          houseNo: this.state.houseNo,
          ghanaPostCode: this.state.ghanaPostCode,
          postalAddress: this.state.postalAddress,
          mobileNo1: this.state.mobileNo1,
          mobileNo2: this.state.mobileNo2
        },
      },
    }).then(() => {
      swal("Update Successful"," soo ", "success").then(() => {
        history.push("/profile")
        history.go()
      })
    }).catch((e) => {
      console.log(e.message)
    })
  };



  render() {
    // const { updateInfo } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-body">
            <div
              role="tabpanel"
              className="tab-pane active"
              id="account-vertical-general"
              aria-labelledby="account-pill-general"
              aria-expanded="true"
            >
              <div className="media">
                <a href="">
                  <img
                    src={img}
                    className="rounded mr-75"
                    alt="profile image"
                    height="64"
                    width="64"
                  />
                </a>
                <div className="media-body mt-75">
                  <div className="col-12 px-0 d-flex flex-sm-row flex-column justify-content-start">
                    <label
                      className="btn btn-sm btn-primary ml-50 mb-50 mb-sm-0 cursor-pointer"
                      htmlFor="account-upload"
                    >
                      Upload new photo
                    </label>
                    <input type="file" id="account-upload" hidden />
                    <button className="btn btn-sm btn-outline-warning ml-50">
                      Reset
                    </button>
                  </div>
                  <p className="text-muted ml-75 mt-50">
                    <small>Allowed JPG, GIF or PNG. Max size of 800kB</small>
                  </p>
                </div>
              </div>
              {/* <hr> */}
              
              <form noValidate onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <div className="controls">
                        <label htmlFor="account-Email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="account-Email"
                          placeholder="Email"
                          defaultValue={this.props.currentUser.email}
                          required
                          onChange={this.handleChange("email")}
                          data-validation-required-message="This Email field is required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="controls">
                        <label htmlFor="account-name">House Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="account-name"
                          placeholder=""
                          defaultValue={this.props.currentUser.houseNo}
                          onChange={this.handleChange("houseNo")}
                          data-validation-required-message="This name field is required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <div className="controls">
                        <label htmlFor="account-e-mail">Ghana Post Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="account-e-mail"
                          placeholder=""
                          defaultValue={this.props.currentUser.ghanaPostCode}
                          onChange={this.handleChange("ghanaPostCode")}
                          data-validation-required-message="This email field is required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="account-company">Postal Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="account-company"
                        placeholder=""
                        onChange={this.handleChange("postalAddress")}
                        defaultValue={this.props.currentUser.postalAddress}
                      />
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <div
                      className="alert alert-warning alert-dismissible mb-2"
                      role="alert"
                    >
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <p className="mb-0">
                        Your email is not confirmed. Please check your inbox.
                      </p>
                      <a href="javascript: void(0);">Resend confirmation</a>
                    </div>
                  </div> */}
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="account-company">Mobile Number 1</label>
                      <input
                        type="number"
                        className="form-control"
                        id="account-company"
                        placeholder="Company name"
                        onChange={this.handleChange("mobileNo1")}
                        defaultValue={this.props.currentUser.mobileNo1}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="account-company">Mobile Number 2</label>
                      <input
                        type="number"
                        className="form-control"
                        id="account-company"
                        placeholder=""
                        onChange={this.handleChange("mobileNo2")}
                        defaultValue={this.props.currentUser.mobileNo2}
                      />
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
