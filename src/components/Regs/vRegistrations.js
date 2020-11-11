import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

// import Sonnet from './Sonnet'
import PaymentModal from "./PaymentModal";
import { TabView, TabPanel } from "primereact/tabview";
import OwnerList from '../changeOwner/changeOwnerQuery'

import Img from "../../app-assets/images/elements/macbook-pro.png";

class SingleReg extends Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { vreg, ind } = this.props;
    const { show } = this.state;
    return (
      <div className="col-lg-6 col-sm-12 ">
        <div className="card border-info">
          <div className="card-header"></div>
          <div className="card-content" style={{ minHeight: "400px" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-5 mt-4">
                  <div className="col-12 ml-4 col-md-8 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={Img}
                        className="img-fluid"
                        alt="product image"
                      />
                    </div>
                  </div>
                  {vreg.status === "REVIEW COMPLETE" && (
                    <button
                      className="btn btn-outline-primary mt-4"
                      onClick={this.showModal}
                    >
                      Make Payment
                    </button>
                  )}
                </div>

                <div className="col-sm-7">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Overview">
                      <table className="table table-sm">
                        <tbody>
                          <tr>
                            <th scope="row">Registration Number</th>
                            <td className="text-success">{vreg.key}</td>
                          </tr>
                          <tr>
                            <th scope="row">Status</th>
                            <td className="text-warning">{vreg.status}</td>
                          </tr>
                          <tr>
                            <th scope="row">Vehicle Chasis Number</th>
                            <td className="text-success">
                              {vreg.vehicle.chasisNo}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Vehicle Number Plate</th>
                            <td className="text-success">GW-1455-20</td>
                          </tr>

                          {/* <tr>
                            <th scope="row">Registration Date</th>
                            <td className="text-success">{vreg.createdAt}</td>
                          </tr>
                          <tr>
                            <th scope="row">Registration Expiry Date</th>
                            <td className="text-danger">{vreg.createdAt}</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </Tab>
                    <Tab eventKey="profile" title="Vehicle Details">
                      <table className="table table-sm">
                        <tbody>
                          <tr>
                            <th scope="row">Model</th>
                            <td>{vreg.vehicle.modelName}</td>
                          </tr>
                          <tr>
                            <th scope="row">Vehicle Use</th>
                            <td>{vreg.vehicle.vehicleUse}</td>
                          </tr>
                          <tr>
                            <th scope="row">Vehicle Inspection Number</th>
                            <td>{vreg.vehicleInspectionNo}</td>
                          </tr>
                          <tr>
                            <th scope="row">Fuel Type</th>
                            <td>{vreg.vehicle.fuelType}</td>
                          </tr>

                          <tr>
                            <th scope="row">Registration Date</th>
                            <td>Larry</td>
                          </tr>
                          <tr>
                            <th scope="row">Registration Expiry Date</th>
                            <td>Larry</td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                      <h2>Content</h2>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PaymentModal
          show={show}
          grabinputs={this.grabinputs}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default class VRegistrations extends Component {

  render() {
    const { vregs } = this.props;
    return (
      <section id="timeline-card">
        <div className="row mx-2 ">
          <Link
            to="/registerNewVehicle"
            className="btn btn-outline-primary mr-3"
          >
            <i className="feather icon-plus"></i> Register New Vehicle
          </Link>
          <Link to="/changeOwnerShip" className="btn btn-outline-success ">
            <i className="feather icon-plus"></i> Change Vehicle Owner
          </Link>
        </div>

        <TabView className="mt-1">
          <TabPanel header="Vehicle Registrations">
            <div className="row mt-1">
              {vregs.map((reg, i) => (
                <SingleReg key={i} ind={i} vreg={reg} />
              ))}
            </div>
          </TabPanel>
          <TabPanel header="Changing Owners"><OwnerList /></TabPanel>
        </TabView>
      </section>
    );
  }
}
