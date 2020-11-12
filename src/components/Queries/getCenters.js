import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../../assets/components/spinner/Loading-spinner'
import Error from '../../error'

const GET_REGSS = gql `
query getCenters($id: Int!){
    getCentersById(id: $id){
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

class RegsQuery extends Component {

    getVariables(){
        const { variables } = this.props;
        var query_variables = {
          id: ''
        }
    
        if(typeof variables !== typeof undefined){
          if(typeof variables.id !== variables){
            query_variables.id = variables.id
          }
        }
    
        return query_variables;
      }
  
    render() {
        const { children } = this.props;
        const variables = this.getVariables()
        return (
           <Query query={GET_REGSS} variables={variables}>
               {({loading, error, data}) => {
                   if (loading) return <Spinner />
                   if (error) return <Error><p>{error.message}</p></Error>

                   const {getCentersById} = data;
                   console.log(getCentersById)

                   return React.Children.map(children, function(child){
                       return React.cloneElement(child, { regs:getCentersById })
                   })
               }}
           </Query>
        );
    }
}

export default RegsQuery;
