import React from "react";
import CategoryLink from "@/components/molecules/sidebarNavigations/CategoryLink";
import { PAGES_ROUTER_PATH_NAMES } from "@/constants/router";
import MaterialLink from "@/components/molecules/SidebarNavigations/MaterialLink";

const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href={PAGES_ROUTER_PATH_NAMES.dashboard}>
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>
          <CategoryLink />
          <MaterialLink />
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
