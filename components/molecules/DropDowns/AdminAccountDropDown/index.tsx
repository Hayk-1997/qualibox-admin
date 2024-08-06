"use client";

import React, { useEffect } from "react";
import {
  useGetAuthUserQuery,
  useUserLogOutMutation,
} from "@/lib/apiModules/auth/api";
import { useRouter } from "next/navigation";
import { PAGES_ROUTER_PATH_NAMES } from "@/constants/router";

const AdminAccountDropDown = (): React.JSX.Element => {
  const router = useRouter();

  const { data: authUser } = useGetAuthUserQuery();
  const [userLogOut, { isSuccess }] = useUserLogOutMutation();

  useEffect(() => {
    if (isSuccess) {
      router.replace(PAGES_ROUTER_PATH_NAMES.login);
    }
  }, [isSuccess, router]);

  return (
    <>
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <span className="d-none d-md-block dropdown-toggle ps-2">
          {authUser?.name}
        </span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>{authUser?.name}</h6>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="#"
            onClick={userLogOut}
          >
            <i className="bi bi-box-arrow-right" />
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default AdminAccountDropDown;
