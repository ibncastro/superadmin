import React from 'react';
import ReactDOM from 'react-dom';

import './horizontal-menu.css'
import './index.scss';
import 'bootstrap/dist/js/bootstrap.js';

import $ from 'jquery';
import Popper from 'popper.js'

import { ApolloProvider } from 'react-apollo'
import App from './App';
import * as serviceWorker from './serviceWorker';

import client from './apollo'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.render(    
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
