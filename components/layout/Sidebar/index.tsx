import React from "react";
import { ADMIN_ROUTES } from "@/constants/router";
import Link from "next/link";

const Sidebar = (): React.JSX.Element => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {ADMIN_ROUTES.map((route) => (
            <li className="nav-item" key={route.name}>
              <Link className="nav-link" href={route.path}>
                <i className="bi bi-menu-button-wide" />
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
