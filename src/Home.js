import React, { Component } from 'react'
import { withApollo } from 'react-apollo'

import AllContent from './content'
import LoginRegister from './loginF'
import CurrentUserQuery from './components/Queries/currentUser';

 class Home extends Component {
   constructor(props) {
     super(props);
     this.unsubscribe = props.client.onResetStore(() =>
       this.changeLoginState(false)
     );
   }

   state = {
     loggedIn: false,
   };

   componentWillUnmount() {
     this.unsubscribe();
   }

   componentDidMount() {
     const token = localStorage.getItem("superjwt");
     if (token) {
       this.setState({ loggedIn: true });
     }
   }

   changeLoginState = (loggedIn) => {
     this.setState({ loggedIn });
   };

   render() {
     const { loggedIn } = this.state;
     return (
       <div>
         {loggedIn ? (
           <CurrentUserQuery>
             <AllContent changeLoginState={this.changeLoginState} />
          </CurrentUserQuery>
         ) : (
           <LoginRegister changeLoginState={this.changeLoginState} />
         )}
       </div>
     );
   }
 }


    export default withApollo(Home)