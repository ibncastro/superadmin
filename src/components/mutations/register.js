import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import history from '../history'


const REGISTER = gql`
  mutation register($user: userDetailsInput!) {
    register(user: $user) {
      token
    }
 }`;
 

export default class RegisterMutation extends Component {
  render() {
    const { children, changeLoginState } = this.props;
    return (
      <Mutation
        update = {(store, { data: { register } }) => {
            if(register.token) {
                localStorage.setItem('superjwt', register.token);
                changeLoginState(true);
                history.push('/dashboard')
                history.go()
            }
        }}
      mutation={REGISTER}>
        {(register, { loading, error}) =>
          React.Children.map(children, function(child){
            return React.cloneElement(child, { register, loading, error });
          })
        }
      </Mutation>
    )
  }
}