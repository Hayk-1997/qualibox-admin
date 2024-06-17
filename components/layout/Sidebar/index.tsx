"use client";

import React from "react";
import { ADMIN_ROUTES } from "@/constants/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

const Sidebar = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {ADMIN_ROUTES.map((route) => (
            <li className="nav-item" key={route.name}>
              <Link
                className={cn("nav-link", {
                  active: route.path.includes(pathname),
                })}
                href={route.path}
              >
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
