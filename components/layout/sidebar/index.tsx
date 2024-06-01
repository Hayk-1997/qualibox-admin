import React from "react";
import CategoriesItems from "@/components/molecules/sidebarNavigations/categoriesItems";
import { PAGES_ROUTER_PATH_NAMES } from "@/constants/router";

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
          <CategoriesItems />
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
