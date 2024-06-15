import { TPAgesRouterPAthNames } from "@/types/router";

export const PAGES_ROUTER_PATH_NAMES: TPAgesRouterPAthNames = {
  dashboard: "/dashboard",
  categories: "/categories?orderDirection=asc&orderBy=Id",
  materials: "/materials?orderDirection=asc&orderBy=Id",
  infoPages: "/info-pages?orderDirection=asc&orderBy=Id",
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
  {
    name: "Info Pages",
    path: PAGES_ROUTER_PATH_NAMES.infoPages,
  },
];
