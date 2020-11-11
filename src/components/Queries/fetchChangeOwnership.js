import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../../assets/components/spinner/Loading-spinner'
import Error from '../../error'

const GET_NEWOWNERS = gql `
query getChangeOwner($userId: Int!) {
  getChangeOwner(userId: $userId) {
    regNumber
    status
    owner
    chasisNo
  }
}`

class ChangeOwnerQuery extends Component {
  getVariables(){
    var query_variables = {};

    query_variables.userId = this.props.currentUser.id;

    return query_variables;
  }
    render() {
        const { children } = this.props;
        const variables = this.getVariables()
        return (
           <Query query={GET_NEWOWNERS} variables={variables}>
               {({loading, error, data}) => {
                   if (loading) return <Spinner />
                   if (error) return <Error><p>{error.message}</p></Error>

                   const { getChangeOwner } = data;
                   console.log(getChangeOwner)

                   return React.Children.map(children, function(child){
                       return React.cloneElement(child, { getOwners: getChangeOwner })
                   })
               }}
           </Query>
        );
    }
}

export default ChangeOwnerQuery;
