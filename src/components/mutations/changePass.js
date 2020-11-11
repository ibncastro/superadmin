import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CHANGE_PASS = gql `
    mutation changePass($details: passwordInput){
        changePass(details: $details){
           id
           firstName
        }
    }
`;

export default class ChangePassMutation extends Component {
    render(){
        const { children } = this.props;
        return (
            <Mutation mutation={CHANGE_PASS}>
                { changePass => React.Children.map(children, function(child){
                    return React.cloneElement(child, { changePass })
                })}
            </Mutation>
        )
    }
}