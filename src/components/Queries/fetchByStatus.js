import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../../assets/components/spinner/Loading-spinner'
import Error from '../../error'

const GET_REGS = gql `
    query fetchByStatus($status: String!){
  fetchByStatus(status: $status){
    id
    key
    vehicleInspectionNo
    customsDocNo
    roadWorthyCert
    createdAt
    status
    center {
      id
      name
      code
    }
    user{
      email
      nationality
      firstName
      middleName
      lastName
      region
      dateOfBirth
      idType
      idNumber
      mobileNo1
      mobileNo2
      ghanaPostCode
    }
    vehicle{
      chasisNo
      noOfTyres
      noOfAxles
      noOfDoors
      modelName
      manufacturer
      vehicleUse
      fuelType
      engineNo
    }
  }
}
`;

class VRegQuery extends Component {

  getVariables(){
    const { variables } = this.props;
    var query_variables = {
      status: ''
    }

    if(typeof variables !== typeof undefined){
      if(typeof variables.status !== variables){
        query_variables.status = variables.status
      }
    }

    return query_variables;
  }

    render() {
        const { children } = this.props;
        const variables = this.getVariables()
        return (
           <Query query={GET_REGS} variables={variables}>
               {({loading, error, data}) => {
                   if (loading) return <Spinner />
                   if (error) return <Error><p>{error.message}</p></Error>

                   const {fetchByStatus} = data;
                   console.log(fetchByStatus)

                   return React.Children.map(children, function(child){
                       return React.cloneElement(child, { regList:fetchByStatus })
                   })
               }}
           </Query>
        );
    }
}

export default VRegQuery;
