import React, { Component } from "react";
// import Vehicle from "./head";
import GetCenters from "../Queries/getRegs";
import Cards from "./cards";

import { TabView, TabPanel } from "primereact/tabview";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <GetCenters>
          <Cards />
        </GetCenters>
      </div>
    );
  }
}
