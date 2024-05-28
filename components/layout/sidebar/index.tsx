import React from 'react';


const Sidebar = () => {
    return (
        <nav
            className="pcoded-navbar"
            navbar-theme="theme1"
            active-item-theme="theme1"
            sub-item-theme="theme2"
            active-item-style="style0"
            pcoded-navbar-position="fixed"
        >
            <div className="nav-list">
                <div
                    className="slimScrollDiv"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <div
                        className="pcoded-inner-navbar main-menu"
                        style={{overflow: "hidden", width: "100%", height: "100%"}}
                    >
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            Navigation
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu active pcoded-trigger"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-home"/>
              </span>
                                    <span className="pcoded-mtext">Dashboard</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="active">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/index.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Default</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dashboard-crm.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">CRM</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dashboard-analytics.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Analytics</span>
                                            <span className="pcoded-badge label label-info ">NEW</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sidebar"/>
              </span>
                                    <span className="pcoded-mtext">Page layouts</span>
                                    <span className="pcoded-badge label label-warning">NEW</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li
                                        className="pcoded-hasmenu"
                                        dropdown-icon="style1"
                                        subitem-icon="style1"
                                    >
                                        <a
                                            href="javascript:void(0)"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Vertical</span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-static.html"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Static Layout</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-header-fixed.html"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Header Fixed</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-compact.html"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Compact</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-sidebar.html"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Sidebar Fixed</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className="pcoded-hasmenu"
                                        dropdown-icon="style1"
                                        subitem-icon="style1"
                                    >
                                        <a
                                            href="javascript:void(0)"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Horizontal</span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-horizontal-static.html"
                                                    target="_blank"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Static Layout</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-horizontal-fixed.html"
                                                    target="_blank"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Fixed layout</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-horizontal-icon.html"
                                                    target="_blank"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Static With Icon</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/menu-horizontal-icon-fixed.html"
                                                    target="_blank"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Fixed With Icon</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/menu-bottom.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Bottom Menu</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/navbar-light.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-menu"/>
              </span>
                                    <span className="pcoded-mtext">Navigation</span>
                                </a>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-layers"/>
              </span>
                                    <span className="pcoded-mtext">Widget</span>
                                    <span className="pcoded-badge label label-danger">100+</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/widget-statistic.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Statistic</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/widget-data.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Data</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/widget-chart.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Chart Widget</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            UI Element
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-box"/>
              </span>
                                    <span className="pcoded-mtext">Basic</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/alert.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Alert</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/breadcrumb.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Breadcrumbs</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/button.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Button</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/box-shadow.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Box-Shadow</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/accordion.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Accordion</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/generic-class.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Generic Class</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/tabs.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Tabs</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/color.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Color</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/label-badge.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Label Badge</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/progress-bar.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Progress Bar</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/list.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">List</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/tooltip.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Tooltip And Popover</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/typography.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Typography</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/other.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Other</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-gitlab"/>
              </span>
                                    <span className="pcoded-mtext">Advance</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/draggable.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Draggable</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/modal.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Modal</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/notification.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Notifications</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/rating.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Rating</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/range-slider.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Range Slider</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/slider.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Slider</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/syntax-highlighter.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Syntax Highlighter</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/tour.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Tour</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/treeview.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Tree View</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/nestable.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Nestable</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/toolbar.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Toolbar</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-package"/>
              </span>
                                    <span className="pcoded-mtext">Extra</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/session-timeout.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Session Timeout</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/session-idle-timeout.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Session Idle Timeout</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/offline.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Offline</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" ">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/animation.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-aperture rotate-refresh"/>
              </span>
                                    <span className="pcoded-mtext">Animations</span>
                                </a>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-command"/>
              </span>
                                    <span className="pcoded-mtext">Icons</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/icon-font-awesome.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Font Awesome</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/icon-themify.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Themify</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/icon-simple-line.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Simple Line Icon</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            Forms
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-clipboard"/>
              </span>
                                    <span className="pcoded-mtext">Form</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/form-elements-component.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Components</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/form-elements-add-on.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Add-On</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/form-elements-advance.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Advance</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/form-validation.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Validation</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" ">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/form-picker.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-edit-1"/>
              </span>
                                    <span className="pcoded-mtext">Form Picker</span>
                                    <span className="pcoded-badge label label-warning">NEW</span>
                                </a>
                            </li>
                            <li className=" ">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/form-select.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-feather"/>
              </span>
                                    <span className="pcoded-mtext">Form Select</span>
                                </a>
                            </li>
                            <li className=" ">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/form-masking.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-shield"/>
              </span>
                                    <span className="pcoded-mtext">Form Masking</span>
                                </a>
                            </li>
                            <li className=" ">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/form-wizard.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-tv"/>
              </span>
                                    <span className="pcoded-mtext">Form Wizard</span>
                                </a>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            Tables
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-credit-card"/>
              </span>
                                    <span className="pcoded-mtext">Bootstrap Table</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/bs-basic-table.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Basic Table</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/bs-table-sizing.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Sizing Table</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/bs-table-border.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Border Table</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/bs-table-styling.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Styling Table</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-inbox"/>
              </span>
                                    <span className="pcoded-mtext">Data Table</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-basic.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Basic Initialization</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-advance.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Advance Initialization</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-styling.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Styling</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-api.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">API</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ajax.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Ajax</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-server-side.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Server Side</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-plugin.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Plug-In</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-data-sources.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Data Sources</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-server"/>
              </span>
                                    <span className="pcoded-mtext">DT Extensions</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-autofill.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">AutoFill</span>
                                        </a>
                                    </li>
                                    <li
                                        className="pcoded-hasmenu"
                                        dropdown-icon="style1"
                                        subitem-icon="style1"
                                    >
                                        <a
                                            href="javascript:void(0)"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Button</span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className=" ">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-basic-buttons.html"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Basic Button</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a
                                                    href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-buttons-html-5-data-export.html"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Data Export</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-col-reorder.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Col Reorder</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-fixed-columns.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Fixed Columns</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-fixed-header.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Fixed Header</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-key-table.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Key Table</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-responsive.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Responsive</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-row-reorder.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Row Reorder</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-scroller.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Scroller</span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/dt-ext-select.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Select Table</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" ">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/foo-table.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-hash"/>
              </span>
                                    <span className="pcoded-mtext">FooTable</span>
                                </a>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-airplay"/>
              </span>
                                    <span className="pcoded-mtext">Handson Table</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-appearance.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Appearance</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-data-operation.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Data Operation</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-rows-cols.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Rows Columns</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-columns-only.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Columns Only</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-cell-features.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Cell Features</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-cell-types.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Cell Types</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-integrations.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Integrations</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-rows-only.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Rows Only</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/handson-utilities.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Utilities</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/editable-table.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-edit"/>
              </span>
                                    <span className="pcoded-mtext">Editable Table</span>
                                </a>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            Chart And Maps
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-pie-chart"/>
              </span>
                                    <span className="pcoded-mtext">Charts</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-google.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Google Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-chartjs.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">ChartJs</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-list.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">List Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-float.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Float Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-knob.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Knob chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-morris.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Morris Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-nvd3.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Nvd3 Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-peity.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Peity Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-radial.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Radial Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-rickshaw.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Rickshaw Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-sparkline.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Sparkline Chart</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/chart-c3.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">C3 Chart</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-map"/>
              </span>
                                    <span className="pcoded-mtext">Maps</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/map-google.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Google Maps</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/map-vector.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Vector Maps</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/map-api.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Google Map Search API</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/location.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Location</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            Pages
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-unlock"/>
              </span>
                                    <span className="pcoded-mtext">Authentication</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/auth-sign-in-social.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Login</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/auth-sign-up-social.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Registration</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/auth-reset-password.html"
                                            target="_blank"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Forgot Password</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/auth-lock-screen.html"
                                            target="_blank"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Lock Screen</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-sliders"/>
              </span>
                                    <span className="pcoded-mtext">Maintenance</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/error.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Error</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/comming-soon.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Comming Soon</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/offline-ui.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Offline UI</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-mail"/>
              </span>
                                    <span className="pcoded-mtext">Email</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/email-compose.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Compose Email</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/email-inbox.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Inbox</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/email-read.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Read Mail</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            App
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li className="">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/todo.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-bookmark"/>
              </span>
                                    <span className="pcoded-mtext">To-Do</span>
                                </a>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            Extension
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-file-plus"/>
              </span>
                                    <span className="pcoded-mtext">Editor</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/ck-editor.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">CK-Editor</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/wysiwyg-editor.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">WYSIWYG Editor</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-calendar"/>
              </span>
                                    <span className="pcoded-mtext">Event Calendar</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/event-full-calender.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Full Calendar</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://demo.dashboardpack.com/admindek-html/default/event-clndr.html"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">CLNDER</span>
                                            <span className="pcoded-badge label label-info">NEW</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/image-crop.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-scissors"/>
                <b>IC</b>
              </span>
                                    <span className="pcoded-mtext">Image Cropper</span>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/file-upload.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-upload-cloud"/>
              </span>
                                    <span className="pcoded-mtext">File Upload</span>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/change-loges.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-briefcase"/>
              </span>
                                    <span className="pcoded-mtext">Change Loges</span>
                                    <span className="pcoded-badge label label-warning">1.0</span>
                                </a>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label" menu-title-theme="theme1">
                            Other
                        </div>
                        <ul
                            className="pcoded-item pcoded-left-item"
                            item-border="true"
                            item-border-style="solid"
                            subitem-border="false"
                        >
                            <li
                                className="pcoded-hasmenu"
                                dropdown-icon="style1"
                                subitem-icon="style1"
                            >
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
              <span className="pcoded-micon">
                <i className="feather icon-list"/>
              </span>
                                    <span className="pcoded-mtext">Menu Levels</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a
                                            href="javascript:void(0)"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Menu Level 2.1</span>
                                        </a>
                                    </li>
                                    <li
                                        className="pcoded-hasmenu"
                                        dropdown-icon="style1"
                                        subitem-icon="style1"
                                    >
                                        <a
                                            href="javascript:void(0)"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Menu Level 2.2</span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className="">
                                                <a
                                                    href="javascript:void(0)"
                                                    className="waves-effect waves-dark"
                                                >
                                                    <span className="pcoded-mtext">Menu Level 3.1</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="">
                                        <a
                                            href="javascript:void(0)"
                                            className="waves-effect waves-dark"
                                        >
                                            <span className="pcoded-mtext">Menu Level 2.3</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a
                                    href="javascript:void(0)"
                                    className="disabled waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-power"/>
                <b>D</b>
              </span>
                                    <span className="pcoded-mtext">Disabled Menu</span>
                                </a>
                            </li>
                            <li className="">
                                <a
                                    href="https://demo.dashboardpack.com/admindek-html/default/sample-page.html"
                                    className="waves-effect waves-dark"
                                >
              <span className="pcoded-micon">
                <i className="feather icon-watch"/>
              </span>
                                    <span className="pcoded-mtext">Sample Page</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="slimScrollBar"
                        style={{
                            background: "rgb(0, 0, 0)",
                            width: 5,
                            position: "absolute",
                            top: 0,
                            opacity: "0.4",
                            display: "block",
                            borderRadius: 7,
                            zIndex: 99,
                            right: 1,
                            height: "140.538px"
                        }}
                    />
                    <div
                        className="slimScrollRail"
                        style={{
                            width: 5,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: "none",
                            borderRadius: 7,
                            background: "rgb(51, 51, 51)",
                            opacity: "0.2",
                            zIndex: 90,
                            right: 1
                        }}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;