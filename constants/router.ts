import { TPAgesRouterPAthNames } from "@/types/router";

export const PAGES_ROUTER_PATH_NAMES: TPAgesRouterPAthNames = {
  dashboard: "/dashboard",
  categories: "/categories?orderDirection=asc&orderBy=Id",
  materials: "/materials?orderDirection=asc&orderBy=Id",
};

export const ADMIN_ROUTES = [
  {
    name: "Dashboard",
    path: PAGES_ROUTER_PATH_NAMES.dashboard,
  },
  {
    name: "Categories",
    path: PAGES_ROUTER_PATH_NAMES.categories,
  },
  {
    name: "Materials",
    path: PAGES_ROUTER_PATH_NAMES.materials,
  },
];
