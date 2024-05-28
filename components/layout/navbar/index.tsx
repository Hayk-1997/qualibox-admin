import React from 'react';


const Navbar = () => {
    return (
        <nav
            className="navbar header-navbar pcoded-header iscollapsed"
            header-theme="themelight1"
            pcoded-header-position="fixed"
        >
            <div className="navbar-wrapper">
                <div className="navbar-logo" logo-theme="theme6">
                    <a href="https://demo.dashboardpack.com/admindek-html/default/index.html">
                        <img className="img-fluid" src="./logo.png" alt="Theme-Logo"/>
                    </a>
                    <a
                        className="mobile-menu"
                        id="mobile-collapse"
                        href="https://demo.dashboardpack.com/admindek-html/default/index.html#!"
                    >
                        <i className="feather icon-menu icon-toggle-right"/>
                    </a>
                    <a className="mobile-options waves-effect waves-light">
                        <i className="feather icon-more-horizontal"/>
                    </a>
                </div>
                <div className="navbar-container container-fluid">
                    <ul className="nav-left">
                        <li className="header-search">
                            <div className="main-search morphsearch-search">
                                <div className="input-group">
              <span className="input-group-text search-close">
                <i className="feather icon-x input-group-text"/>
              </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Keyword"
                                    />
                                    <span className="input-group-text search-btn">
                <i className="feather icon-search input-group-text"/>
              </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://demo.dashboardpack.com/admindek-html/default/index.html#!"
                                className="waves-effect waves-light"
                            >
                                <i className="full-screen feather icon-maximize"/>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav-right">
                        <li className="header-notification">
                            <div className="dropdown-primary dropdown">
                                <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                    <i className="feather icon-bell"/>
                                    <span className="badge bg-c-red">5</span>
                                </div>
                                <ul
                                    className="show-notification notification-view dropdown-menu"
                                    data-dropdown-in="fadeIn"
                                    data-dropdown-out="fadeOut"
                                >
                                    <li>
                                        <h6>Notifications</h6>
                                        <label className="form-label label label-danger">New</label>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="img-radius"
                                                    src="./avatar-4.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="notification-user">John Doe</h5>
                                                <p className="notification-msg">
                                                    Lorem ipsum dolor sit amet, consectetuer elit.
                                                </p>
                                                <span className="notification-time">30 minutes ago</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="img-radius"
                                                    src="./avatar-3.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="notification-user">Joseph William</h5>
                                                <p className="notification-msg">
                                                    Lorem ipsum dolor sit amet, consectetuer elit.
                                                </p>
                                                <span className="notification-time">30 minutes ago</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="img-radius"
                                                    src="./avatar-4.jpg"
                                                    alt="Generic placeholder image"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="notification-user">Sara Soudein</h5>
                                                <p className="notification-msg">
                                                    Lorem ipsum dolor sit amet, consectetuer elit.
                                                </p>
                                                <span className="notification-time">30 minutes ago</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-notification">
                            <div className="dropdown-primary dropdown">
                                <div
                                    className="displayChatbox dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    <i className="feather icon-message-square"/>
                                    <span className="badge bg-c-green">3</span>
                                </div>
                            </div>
                        </li>
                        <li className="user-profile header-notification">
                            <div className="dropdown-primary dropdown">
                                <div className="dropdown-toggle" data-bs-toggle="dropdown">
                                    <img
                                        src="./avatar-4.jpg"
                                        className="img-radius"
                                        alt="User-Profile-Image"
                                    />
                                    <span>John Doe</span>
                                    <i className="feather icon-chevron-down"/>
                                </div>
                                <ul
                                    className="show-notification profile-notification dropdown-menu"
                                    data-dropdown-in="fadeIn"
                                    data-dropdown-out="fadeOut"
                                >
                                    <li>
                                        <a href="https://demo.dashboardpack.com/admindek-html/default/index.html#!">
                                            <i className="feather icon-settings"/> Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://demo.dashboardpack.com/admindek-html/default/index.html#">
                                            <i className="feather icon-user"/> Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://demo.dashboardpack.com/admindek-html/default/email-inbox.html">
                                            <i className="feather icon-mail"/> My Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://demo.dashboardpack.com/admindek-html/default/auth-lock-screen.html">
                                            <i className="feather icon-lock"/> Lock Screen
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://demo.dashboardpack.com/admindek-html/default/auth-sign-in-social.html">
                                            <i className="feather icon-log-out"/> Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;