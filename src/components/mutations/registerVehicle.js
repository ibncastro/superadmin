import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const GET_VEHICLES = gql`
  query vRegistration($userId: Int!) {
    vRegistration(userId: $userId) {
      key
      vehicleInspectionNo
      customsDocNo
      roadworthyCert
      user {
        firstName
        lastName
      }
      vehicle {
        modelName
        chasisNo
      }
    }
  }
`;

const REGISTER_VEHICLE = gql`
  mutation registerVehicle($details: vRegInput!) {
    registerVehicle(details: $details) {
      key
    }
  }
`;

export class RegisterNewVehicleMutation extends Component {
  render() {
    const { children, variables } = this.props;
    return (
      <Mutation
        update={(store, { data: { registerVehicle } }) => {
          var query = {
            query: GET_VEHICLES,
          };

          if (typeof variables !== typeof undefined) {
            query.variables.userId = this.props.currentUser.id;
          }

          const data = store.readQuery(query);
          data.vRegistration.unshift(registerVehicle);
          store.writeQuery({ ...query, data });
         

        }}
        mutation={REGISTER_VEHICLE} 
      >
        {registerVehicle =>
          React.Children.map(children, function (child) {
            return React.cloneElement(child, { registerVehicle });
          })
        }
      </Mutation>
    );
  }
}

export default RegisterNewVehicleMutation;
