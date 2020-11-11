import React, { Component } from "react";
import Details from './details';
import Modal from './changeModal'

import ChangeMutation from '../mutations/changeStatus'

class ListItem extends Component {

    state = {
        show: false,
        showModal: false
    }

    openDialog = (e) => {
        e.preventDefault();
        this.setState({ show: true })
    }

    openModal = (e) => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    hideM = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        const { reg } = this.props
        const { show, showModal } = this.state
        return (
            <tr>
                <td>{reg.key}</td>
                <td>
                    {reg.user.firstName} {reg.lastName}
                </td>
                <td>{reg.user.email}</td>
                <td>{reg.user.nationality}</td>
                <td>{reg.vehicle.chasisNo}</td>
                <td>{reg.vehicle.manufacturer}</td>
                <td>{reg.vehicle.vehicleUse}</td>

                <td><button type="button" className="btn btn-outline-info btn-sm" onClick={this.openModal}>Change Status</button>
                &nbsp;
                    <button className="btn btn-outline-warning btn-sm" onClick={this.openDialog}>Details</button>
                <ChangeMutation>
                <Modal show={showModal} data={reg} hideModal={this.hideM} />
                </ChangeMutation>
                
               
                    <Details show={show} data={reg} hideModal={this.hideModal} />
                </td>

            </tr>
        );
    }
}


export class List extends Component {
    render() {
        const { regList, grabinputs } = this.props;
        return (

            <div className="users-list-filter px-1">
               
                    {/* <div className="row py-2 mb-2">

                    </div> */}
                    <div className="users-list-table">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                <form>
                                    <div className="col-12">
                                        <label htmlFor="users-list-verified">Status</label>
                                        <fieldset className="form-group">
                                            <select className="form-control" onChange={grabinputs("status")} id="users-list-verified">
                                                <option value="PENDING">PENDING</option>
                                                <option value="REVIEW">REVIEW</option>
                                                <option value="REVIEW COMPLETE">REVIEW COMPLETE</option>
                                                <option value="COMPLETE">COMPLETE</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    </form>
                                    <div className="table-responsive">
                                        <table id="users-list-datatable" className="table">
                                            <thead>
                                                <tr>
                                                    <th>Registration No</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Nationality</th>
                                                    <th>Chasis No</th>
                                                    <th>Manufacturer</th>
                                                    <th>Vehicle Use</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {regList.map((reg, i) => (
                                                    <ListItem key={i} reg={reg} />
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </form> */}
            </div>
        );
    }
}

export default List;
