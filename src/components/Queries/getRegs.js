import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../../assets/components/spinner/Loading-spinner'
import Error from '../../error'

const GET_CENTERS = gql `
query{
  allCenters{
    id
    name
    code
  }
}
`;

class VRegQuery extends Component {
  
    render() {
        const { children } = this.props;
        return (
           <Query query={GET_CENTERS}>
               {({loading, error, data}) => {
                   if (loading) return <Spinner />
                   if (error) return <Error><p>{error.message}</p></Error>

                   const {allCenters} = data;
                   console.log(allCenters)

                   return React.Children.map(children, function(child){
                       return React.cloneElement(child, { centers:allCenters })
                   })
               }}
           </Query>
        );
    }
}

export default VRegQuery;
