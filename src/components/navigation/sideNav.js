import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidenav extends Component {
  render() {
    return (
      <div className="horizontal-menu-wrapper">
        <div
          className="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-without-dd-arrow navbar-shadow menu-border"
          role="navigation"
          data-menu="menu-wrapper"
          style={{zIndex: "0"}}
        >
          <div
            className="navbar-container main-menu-content"
            data-menu="menu-container"
            style={{marginLeft: "500px"}}
          >
            <ul
              className="nav navbar-nav"
              id="main-menu-navigation"
              data-menu="menu-navigation"
              
            >
              
                <li className="dropdown nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i className="feather icon-home" />
                    <span data-i18n="Dashboard">Dashboard</span>
                  </Link>
                </li>
             
                <li className="dropdown nav-item" data-menu="dropdown">
                  <Link to="/profile" className="nav-link"  >
                    <i className="feather icon-package" />
                    <span data-i18n="Apps">Profile</span>
                  </Link>
                </li>   
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
