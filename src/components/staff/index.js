import React, { Component } from "react";

import ChangePassword from "./changePassword";
import ChangePassMutation from "../mutations/changePass";

export default class Account extends Component {
  render() {
    return (
      
                <ChangePassMutation>
                  <ChangePassword />
                </ChangePassMutation>
              
    );
  }
}
