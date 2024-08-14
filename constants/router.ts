import { TPagesRouterPAthNames } from "@/types/router";

export const PAGES_ROUTER_PATH_NAMES: TPagesRouterPAthNames = {
  dashboard: "/admin/dashboard",
  categories: "/admin/categories?orderDirection=asc&orderBy=Id",
  materials: "/admin/materials?orderDirection=asc&orderBy=Id",
  infoPages: "/admin/info-pages?orderDirection=asc&orderBy=Id",
  orders: "/admin/orders?orderDirection=asc&orderBy=Id",
  products: "/admin/products?orderDirection=asc&orderBy=Id",
  tags: "/admin/tags?orderDirection=asc&orderBy=Id",
  backOffice: "/admin/back-office",
  login: "/admin/login",
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
    name: "Tags",
    path: PAGES_ROUTER_PATH_NAMES.tags,
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
  {
    name: "Back Office",
    path: PAGES_ROUTER_PATH_NAMES.backOffice,
  },
];
