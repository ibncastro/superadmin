import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-body">
            <div
              class="tab-pane"
              id="account-vertical-info"
              role="tabpanel"
              aria-labelledby="account-pill-info"
              aria-expanded="false"
            >
              <form novalidate>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="accountTextarea">Bio</label>
                      <textarea
                        class="form-control"
                        id="accountTextarea"
                        rows="3"
                        placeholder="Your Bio data here..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <div class="controls">
                        <label for="account-birth-date">Birth date</label>
                        <input
                          type="date"
                          class="form-control birthdate-picker"
                          required
                          placeholder="Birth date"
                          id="account-birth-date"
                          data-validation-required-message="This birthdate field is required"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <div class="controls">
                        <label for="account-phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          id="account-phone"
                          required
                          placeholder="Phone number"
                          value="(+656) 254 2568"
                          data-validation-required-message="This phone number field is required"
                        />
                      </div>
                    </div>
                    </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="account-website">Website</label>
                      <input
                        type="text"
                        class="form-control"
                        id="account-website"
                        placeholder="Website address"
                      />
                    </div>
                  </div>
                  <div class="col-12 d-flex flex-sm-row flex-column justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-primary mr-sm-1 mb-1 mb-sm-0"
                    >
                      Save changes
                    </button>
                    <button type="reset" class="btn btn-outline-warning">
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
