import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const CHANGE_OWNER = gql `
    mutation changeOwner($details: changeOwnerInput){
  changeOwner(details: $details){
    regNumber
    chasisNo
    owner
  }
}
`

const GET_NEWOWNERS = gql `
query getChangeOwner{
  getChangeOwner{
    regNumber
    status
    owner
    chasisNo
  }
}
`

export default class changeOwnerMutation extends Component {
    render(){
        const { children } = this.props;
        return (
            <Mutation update={(store, { data: {changeOwner}}) => {
                var query = {
                    query: GET_NEWOWNERS,
                };

                const data = store.readQuery(query);
                data.getChangeOwner.unshift(changeOwner);
                store.writeQuery({ ...query, data })

            }} mutation={CHANGE_OWNER}>

                {changeOwner => React.Children.map(children, function(child) {
                    return React.cloneElement(child, {
                        changeOwner
                    })
                })}

            </Mutation>
        )
    }
}