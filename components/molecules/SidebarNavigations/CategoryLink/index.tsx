import React from "react";
import Link from "next/link";
import { PAGES_ROUTER_PATH_NAMES } from "@/constants/router";

const CategoryLink = (): React.JSX.Element => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link collapsed"
        href={PAGES_ROUTER_PATH_NAMES.categories}
      >
        <i className="bi bi-menu-button-wide" />
        <span>Categories</span>
      </Link>
    </li>
  );
};

export default CategoryLink;
