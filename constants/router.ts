import { TPAgesRouterPAthNames } from "@/types/router";

export const PAGES_ROUTER_PATH_NAMES: TPAgesRouterPAthNames = {
  dashboard: "/dashboard",
  categories: "/categories?orderDirection=asc&orderBy=Id",
  materials: "/materials?orderDirection=asc&orderBy=Id",
  infoPages: "/info-pages?orderDirection=asc&orderBy=Id",
  orders: "/orders?orderDirection=asc&orderBy=Id",
  products: "/products?orderDirection=asc&orderBy=Id",
  login: "/login",
};

export const ADMIN_SIDEBAR_ROUTES = [
  {
    name: "Dashboard",
    path: PAGES_ROUTER_PATH_NAMES.dashboard,
  },
  {
    name: "Products",
    path: PAGES_ROUTER_PATH_NAMES.products,
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
  {
    name: "Orders",
    path: PAGES_ROUTER_PATH_NAMES.orders,
  },
];
