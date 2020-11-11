import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import swal from 'sweetalert';
import history from "../../history";

export class ChangeStatus extends Component {
  state = {
    status: ""
  };

  grabinputs = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  onConfirm = (e) => {
    this.props.hideModal();
  };

  submitDetails = (e) => {
      e.preventDefault();
      const IdNumber = parseInt(this.props.data.id)
      this.props.changeStatus({
        variables: {
            id: IdNumber,
            status: this.state.status
        }
      }).then(() => {
        swal("Good job!", "Status Changed!", "success").then(() => {
            history.push('/dashboard')
                    history.go()
      })
  }).catch((e) => {
      console.log(e.message)
  })
}

  render() {
    const { show, hideModal } = this.props;
    const { grabinputs } = this;
    return (
      <div className="card">
        <Sidebar visible={show} position="right" onHide={() => hideModal()}>
          <form onSubmit={this.submitDetails}>
            <div>
              <div className="form-group">
                <label htmlFor="fuelType">Choose Status</label>
                <select
                  className="custom-select form-control required"
                  id="eventLocation3"
                  defaultValue={this.props.data.status}
                  onChange={grabinputs("status")}
                  name="eventStatus"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="REVIEW">REVIEW</option>
                  <option value="REVIEW COMPLETE">REVIEW COMPLETE</option>
                  <option value="COMPLETE">COMPLETE</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary block">Pay</button>
          </form>
        </Sidebar>
      </div>
    );
  }
}

export default ChangeStatus;
