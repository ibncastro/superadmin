import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import profileImg from "../../assets/app-assets/images/portrait/small/avatar-s-11.jpg"

 class Mainnav extends Component {

  state = {
    notificationsHover: false,
    profileHover: false
  }

  toggleNotification = () => {
    this.setState({notificationsHover: !this.state.notificationsHover})
  }

  toggleProfile = () => {
    this.setState({profileHover: !this.state.profileHover})
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.changeLoginState(false);
    this.props.client.resetStore();
  }

    render() {
      const { currentUser }  = this.props;
      const notificationClass = `dropdown dropdown-notification nav-item${this.state.notificationsHover ? " show" : ""}`
      const profileClass = `dropdown dropdown-user mr-2 nav-item${this.state.profileHover ? " show" : ""}`

        return (
          <div>
            <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed navbar-shadow navbar-brand-center" style={{marginBottom: "6px"}}>
              
              <div className="navbar-wrapper">
                <div className="navbar-container content">
                  <div className="navbar-collapse" id="navbar-mobile">
                    <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                      <ul className="nav navbar-nav">
                        <li className="nav-item mobile-menu d-xl-none mr-auto">
                          <a
                            className="nav-link nav-menu-main menu-toggle hidden-xs"
                            href="#"
                          >
                            <i className="ficon feather icon-menu" />
                          </a>
                        </li>
                      </ul>
                      
                    </div>
                    <ul className="nav navbar-nav float-right">
                      <li className="dropdown dropdown-language nav-item">
                        <a
                          className="dropdown-toggle nav-link"
                          id="dropdown-flag"
                          href="#"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="flag-icon flag-icon-us" />
                          <span className="selected-language">English</span>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdown-flag"
                        >
                          <a
                            className="dropdown-item"
                            href="#"
                            data-language="en"
                          >
                            <i className="flag-icon flag-icon-us" /> English
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-language="fr"
                          >
                            <i className="flag-icon flag-icon-fr" /> French
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-language="de"
                          >
                            <i className="flag-icon flag-icon-de" /> German
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-language="pt"
                          >
                            <i className="flag-icon flag-icon-pt" /> Portuguese
                          </a>
                        </div>
                      </li>
                      
                      <li onMouseEnter={this.toggleNotification} onMouseLeave={this.toggleNotification} className={notificationClass}>
                        <a
                          className="nav-link nav-link-label"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="ficon feather icon-bell" />
                          <span className="badge badge-pill badge-primary badge-up">
                            5
                          </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                          <li className="dropdown-menu-header">
                            <div className="dropdown-header m-0 p-2">
                              <h3 className="white">5 New</h3>
                              <span className="notification-title">
                                App Notifications
                              </span>
                            </div>
                          </li>
                          <li className="scrollable-container media-list">
                            <a
                              className="d-flex justify-content-between"
                              href=""
                            >
                              <div className="media d-flex align-items-start">
                                <div className="media-left">
                                  <i className="feather icon-plus-square font-medium-5 primary" />
                                </div>
                                <div className="media-body">
                                  <h6 className="primary media-heading">
                                    You have new order!
                                  </h6>
                                  <small className="notification-text">
                                    {" "}
                                    Are your going to meet me tonight?
                                  </small>
                                </div>
                                <small>
                                  <time
                                    className="media-meta"
                                    dateTime="2015-06-11T18:29:20+08:00"
                                  >
                                    9 hours ago
                                  </time>
                                </small>
                              </div>
                            </a>
                            <a
                              className="d-flex justify-content-between"
                              href=""
                            >
                              <div className="media d-flex align-items-start">
                                <div className="media-left">
                                  <i className="feather icon-download-cloud font-medium-5 success" />
                                </div>
                                <div className="media-body">
                                  <h6 className="success media-heading red darken-1">
                                    99% Server load
                                  </h6>
                                  <small className="notification-text">
                                    You got new order of goods.
                                  </small>
                                </div>
                                <small>
                                  <time
                                    className="media-meta"
                                    dateTime="2015-06-11T18:29:20+08:00"
                                  >
                                    5 hour ago
                                  </time>
                                </small>
                              </div>
                            </a>
                            <a
                              className="d-flex justify-content-between"
                              href=""
                            >
                              <div className="media d-flex align-items-start">
                                <div className="media-left">
                                  <i className="feather icon-alert-triangle font-medium-5 danger" />
                                </div>
                                <div className="media-body">
                                  <h6 className="danger media-heading yellow darken-3">
                                    Warning notifixation
                                  </h6>
                                  <small className="notification-text">
                                    Server have 99% CPU usage.
                                  </small>
                                </div>
                                <small>
                                  <time
                                    className="media-meta"
                                    dateTime="2015-06-11T18:29:20+08:00"
                                  >
                                    Today
                                  </time>
                                </small>
                              </div>
                            </a>
                            <a
                              className="d-flex justify-content-between"
                              href=""
                            >
                              <div className="media d-flex align-items-start">
                                <div className="media-left">
                                  <i className="feather icon-check-circle font-medium-5 info" />
                                </div>
                                <div className="media-body">
                                  <h6 className="info media-heading">
                                    Complete the task
                                  </h6>
                                  <small className="notification-text">
                                    Cake sesame snaps cupcake
                                  </small>
                                </div>
                                <small>
                                  <time
                                    className="media-meta"
                                    dateTime="2015-06-11T18:29:20+08:00"
                                  >
                                    Last week
                                  </time>
                                </small>
                              </div>
                            </a>
                            <a
                              className="d-flex justify-content-between"
                              href=""
                            >
                              <div className="media d-flex align-items-start">
                                <div className="media-left">
                                  <i className="feather icon-file font-medium-5 warning" />
                                </div>
                                <div className="media-body">
                                  <h6 className="warning media-heading">
                                    Generate monthly report
                                  </h6>
                                  <small className="notification-text">
                                    Chocolate cake oat cake tiramisu marzipan
                                  </small>
                                </div>
                                <small>
                                  <time
                                    className="media-meta"
                                    dateTime="2015-06-11T18:29:20+08:00"
                                  >
                                    Last month
                                  </time>
                                </small>
                              </div>
                            </a>
                          </li>
                          <li className="dropdown-menu-footer">
                            <a
                              className="dropdown-item p-1 text-center"
                              href=""
                            >
                              Read all notifications
                            </a>
                          </li>
                        </ul> 
                      </li>
                      <li className={profileClass} onMouseEnter={this.toggleProfile} onMouseLeave={this.toggleProfile}>
                        <a
                          className="dropdown-toggle nav-link dropdown-user-link"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <div className="user-nav mt-1 d-sm-flex d-none">
                            <span className="user-name text-bold-600">
                              { currentUser != null ? currentUser.firstName : " "}
                            </span>
                           
                          </div>
                          <span>
                            <img
                              className="round"
                              src={profileImg}
                              alt="avatar"
                              height={40}
                              width={40}
                            />
                          </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            className="dropdown-item"
                            href="/profile"
                          >
                            <i className="feather icon-user" /> Change Password
                          </a>
                          
                          <div className="dropdown-divider" />
                          <button className="dropdown-item" onClick={this.logout}>
                            <i className="feather icon-power" /> Logout
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}

export default withApollo(Mainnav)
