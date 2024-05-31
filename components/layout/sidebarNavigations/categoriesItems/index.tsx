import React from "react";
import Link from "next/link";

const CategoriesItems = (): React.JSX.Element => {
  return (
    <li className="nav-item">
      <Link className="nav-link collapsed" href="/categories">
        <i className="bi bi-menu-button-wide" />
        <span>Categories</span>
      </Link>
    </li>
  );
};

export default CategoriesItems;
