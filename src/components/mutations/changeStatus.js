import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'

const CHANGE_STATUS = gql `
mutation changeStatus($id: Int!, $status: String!){
    changeStatus(id: $id, status: $status){
      status
      id
    }
  }
`;

const GET_VEHICLES = gql `
    query vRegistration($userId: Int!){
  vRegistration(userId: $userId){
    key
    vehicleInspectionNo
    customsDocNo
    roadWorthyCert
    createdAt
    status
    center
    vehicle{
      modelName
      chasisNo
      fuelType
      engineNo
      manufacturer
      bodyType
      countryOfOrigin
      
    }
  }
}
`;


export default class changePassMutation extends Component {
    render(){
        const { children } = this.props;
        return (
            <Mutation update={(store, { data: { changeStatus }}) => {

                var query = {
                    query: GET_VEHICLES
                }

                const data = store.readQuery(query);
                data.vRegistration.unshift(changeStatus);
                store.writeQuery({ ...query, data })

            }} mutation={CHANGE_STATUS}>
                {changeStatus => React.Children.map(children, function(child) {
                    return React.cloneElement(child, {
                        changeStatus
                    })
                })}
            </Mutation>
        )
    }
}