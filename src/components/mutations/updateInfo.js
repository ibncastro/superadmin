import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'

const UPDATE_INFO = gql `
    mutation updateInfo($details: updateInfoInput!){
        updateInfo(details: $details) {
            email
            mobileNo1
            mobileNo2
            postalAddress
            ghanaPostCode
        }
    }
`;

const CURRENT_USER = gql `
    query currentUser {
        currentUser {
            id
            firstName
            email
            houseNo
            mobileNo1
            mobileNo2
            postalAddress
            ghanaPostCode
        }
    }
`;


export default class UpdateInfoMutation extends Component {
    render(){
        const { children, currentUser } = this.props;
        return (
            <Mutation update={(store, { data: { updateInfo }}) => {

                var query = {
                    query: CURRENT_USER
                }

                const data = store.readQuery(query);
                // data.currentUser.unshift(updateInfo);
                store.writeQuery({ ...query, data })

            }} mutation={UPDATE_INFO}>
                {updateInfo => React.Children.map(children, function(child) {
                    return React.cloneElement(child, {
                        updateInfo, currentUser
                    })
                })}
            </Mutation>
        )
    }
}