import React from "react";
import CategoriesItems from "@/components/layout/sidebarNavigations/categoriesItems";

const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
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
