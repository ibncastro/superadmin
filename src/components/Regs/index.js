import React, { Component } from 'react'
import FetchRegs from '../Queries/fetchByStatus'
import List from './list'
// import { UserConsumer } from '../context/user';


export default class VRegs extends Component {

  state = {
    status: "PENDING"
  }

  grabinputs = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { status } = this.state
    return (
      
       <div className="mt-4">
            <section className="users-list-wrapper">
              <FetchRegs variables={{status}}>
                <List grabinputs={this.grabinputs} />
              </FetchRegs>
            </section>
          </div>
    );
  }

  

}
