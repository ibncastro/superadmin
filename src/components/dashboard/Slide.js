import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";

import GetCenters from '../Queries/getCenters'


export class Regs extends Component {

  render() {
    const {center} = this.props
    const id = center.id;
    const { show, hideModal} = this.props;
    return (
      <div className="card">
        <Sidebar visible={show} fullScreen onHide={() => hideModal()}>
        <div className="mt-4">
                <section className="users-list-wrapper">
                    <GetCenters variables={{id}}>
                        <RegLists />
                    </GetCenters>
                </section>
            </div>
        </Sidebar>
      </div>
    );
  }
}

export default Regs;


class RegLists extends Component {
    render(){
       const { regs } = this.props;
        return (
            <div className="users-list-filter px-1">
            <div className="users-list-table">
                <div className="card">
                    <div className="card-content">
                        <div className="card-body">
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

                                        {regs.map((reg, i) => (
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
        )
    }
}


class ListItem extends Component {
    render() {
        const { reg } = this.props
        // const { show, showModal } = this.state
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

                {/* <td><button type="button" className="btn btn-outline-info btn-sm">Change Status</button>
                &nbsp;
                    <button className="btn btn-outline-warning btn-sm">Details</button> */}
                {/* <ChangeMutation>
                <Modal show={showModal} data={reg} hideModal={this.hideM} />
                </ChangeMutation>
                
               
                    <Details show={show} data={reg} hideModal={this.hideModal} /> */}
                {/* </td> */}

            </tr>
        );
    }
}