import React from "react";
import Link from "next/link";
import { PAGES_ROUTER_PATH_NAMES } from "@/constants/router";

const MaterialLink = (): React.JSX.Element => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link collapsed"
        href={PAGES_ROUTER_PATH_NAMES.materials}
      >
        <i className="bi bi-menu-button-wide" />
        <span>Materials</span>
      </Link>
    </li>
  );
};

export default MaterialLink;
