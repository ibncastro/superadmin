import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import Img from "../../app-assets/images/portrait/small/avatar-s-12.jpg"


export class AddNewModal extends Component {

  onConfirm = (e) => {
    this.props.hideModal();
  };

  render() {
    const { show, data, hideModal } = this.props;
    return (
      <Sidebar style={{ width: "80vw", overflow: "auto" }} visible={show} position="right"  onHide={() => hideModal()}>
        <div className="container-fluid">
          <div className="row px-1 my-2 border rounded">
            <div className="">
              <div className="card-header">
                <div className="card-title">
                  <div className="alert alert-primary row">
                    User Information
                        </div>
                </div>
              </div>
              <div className="card-body">

                <div className="row" style={{ width: "100vw" }}>
                  <div className="users-view-image">
                    <img src={Img} className="users-avatar-shadow w-20 rounded mb-2 pr-2 ml-1" alt="avatar" />
                  </div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">

                    <table className="ml-0 ml-sm-0 ml-lg-0">
                      <tbody>
                        <tr>
                          <td className="font-weight-bold">Full Name</td>
                          <td>{data.user.firstName} {data.user.middleName} {data.user.lastName}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Nationality</td>
                          <td>{data.user.natinality}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Region</td>
                          <td>{data.user.region}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Date Of Birth</td>
                          <td>{data.user.dateOfBirth}</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                  <div className="col-4 col-md-4 col-lg-5">

                    <table className="ml-0 ml-sm-0 ml-lg-0">
                      <tbody>
                      <tr>
                          <td className="font-weight-bold">Type Of Identificatin</td>
                          <td>{data.user.idType}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">ID Number</td>
                          <td>{data.user.idNumber}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Ghana Post Code</td>
                          <td>{data.user.ghanaPostCode}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Mobile Number 1</td>
                          <td>{data.user.mobileNo1}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Mobile Number 2</td>
                          <td>{data.user.mobileNo2}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className="row py-2 px-1 my-4 border rounded">
            <div className="">
              <div className="card-header">
                <div className="card-title">
                  <div className="alert alert-primary row">
                    Registration Information
                        </div>
                </div>
              </div>
              <div className="card-body">

                <div className="row" style={{ width: "100vw" }}>
                  
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">

                    <table className="ml-0 ml-sm-0 ml-lg-0">
                      <tbody>
                        <tr>
                          <td className="font-weight-bold">Manufacturer</td>
                          <td>{data.vehicle.manufacturer}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Chasis Number</td>
                          <td>{data.vehicle.chasisNo}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Model Name</td>
                          <td>{data.vehicle.modelName}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Engine Number</td>
                          <td>{data.vehicle.engineNo}</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="col-4 col-md-4 col-lg-5">

                    <table className="ml-0 ml-sm-0 ml-lg-0">
                      <tbody>
                      <tr>
                          <td className="font-weight-bold">Type Of Fuel</td>
                          <td>{data.vehicle.fuelType}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Number Of Doors</td>
                          <td>{data.user.noOfDoors}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Number Of Tyres</td>
                          <td>{data.vehicle.noOfTyres}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Type Of Body</td>
                          <td>{data.vehicle.bodyType}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Number of Axles</td>
                          <td>{data.vehicle.noOfAxles}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}

                </div>
              </div>
            </div>
          </div>



          <div className="row py-2 px-1 my-4 border rounded">
            <div className="">
              <div className="card-header">
                <div className="card-title">
                  <div className="alert alert-primary row">
                    Vehicle Information
                        </div>
                </div>
              </div>
              <div className="card-body">

                <div className="row" style={{ width: "100vw" }}>
                  
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3">

                    <table className="ml-0 ml-sm-0 ml-lg-0">
                      <tbody>
                        <tr>
                          <td className="font-weight-bold">Manufacturer</td>
                          <td>{data.vehicle.manufacturer}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Chasis Number</td>
                          <td>{data.vehicle.chasisNo}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Model Name</td>
                          <td>{data.vehicle.modelName}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Engine Number</td>
                          <td>{data.vehicle.engineNo}</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                  <div className="col-4 col-md-4 col-lg-5">

                    <table className="ml-0 ml-sm-0 ml-lg-0">
                      <tbody>
                      <tr>
                          <td className="font-weight-bold">Type Of Fuel</td>
                          <td>{data.vehicle.fuelType}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Number Of Doors</td>
                          <td>{data.user.noOfDoors}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Number Of Tyres</td>
                          <td>{data.vehicle.noOfTyres}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Type Of Body</td>
                          <td>{data.vehicle.bodyType}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Number of Axles</td>
                          <td>{data.vehicle.noOfAxles}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>


      </Sidebar>
    );
  }
}

export default AddNewModal;
