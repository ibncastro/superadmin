import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './history'

import Home from './Home'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home history={history} />
        </Router>
      </div>
    );
  }
}
