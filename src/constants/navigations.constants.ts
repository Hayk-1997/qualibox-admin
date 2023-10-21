import { createElement, SyntheticEvent } from "react";
import type { MenuProps } from 'antd';
import { LineChartOutlined, InfoCircleOutlined, UnorderedListOutlined, UserOutlined, BuildOutlined, ReconciliationOutlined  } from "@ant-design/icons"


export type MenuItem = Required<MenuProps>['items'][number];
export type Paths = Record<string, string>;

export const PATHS: Paths = {
	//#region Auth Section
	LOGIN: "/login",
	ACTIVATE: "/activate",
	RESET_PASSWORD: "/reset-password",
	FORGOT_PASSWORD: "/forgot-password",
	//#endregion
	//#region Dashboard
	DASHBOARD: "/dashboard",
	//#endregion
	//#region General Information
	GENERAL: "/general",
	//#endregion
	//#region Order Managment
	ORDER_MANAGMENT_SHIPPING_OPTIONS: "/order-managment/shipping-options",
	ORDER_MANAGMENT_TRANSACTIONS: "/order-managment/transactions",
	ORDER_MANAGMENT_SALES_ORDERS: "/order-managment/sales-orders",
	ORDER_MANAGMENT_SALES_HISTORY: "/order-managment/sales-history",
	//#endregion
	//#region Products
	PRODUCTS_MATERIALS: "/products/materials",
	PRODUCTS_COVERING: "/products/covering",
	PRODUCTS_ITEM_CATEGORY: "/products/item-category",
	PRODUCTS_ITEM_TYPES: "/products/item-type",
	//#endregion
	//#region User Managment
	USER_MANAGMENT_USER_TYPES: "/user-managment/user-types",
	USER_MANAGMENT_PENDING_AUTHORIZATION: "/user-managment/pending-authorization",
	USER_MANAGMENT_PERMISSION_LIST: "/user-managment/permission-list",
	USER_MANAGMENT_PERMISSION_GROUPS: "/user-managment/permission-groups",
	USER_MANAGMENT_USERS: "/user-managment/users",
	//#endregion
	//#region CMS
	CMS_PROMO_TOOLS: "/cms/promo-tools",
	CMS_NOTIFICATIONS_BANNER: "/cms/notifications/banner",
	CMS_NOTIFICATIONS_MODALS: "/cms/notifications/modal",
	CMS_NOTIFICATIONS_EMAIL: "/cms/notifications/email",
	CMS_FOLLOW_US: "/cms/follow-us",
	CMS_TERMS: "/cms/terms",
	CMS_PRIVACY_AND_POLICY: "/cms/privacy-&-policy",
	CMS_FAQ: "/cms/faq",
	CMS_ABOUT_US: "/cms/about-us"
	//#endregion
};

const PROTECTED_NAVIGATION_MENU_ITEM_KEYS = {

}

export const PROTECTED_NAVIGATION_MENU_ITEMS: MenuItem[] = [
	{
		key: PATHS.DASHBOARD,
		label: "Dashboard",
		icon: createElement(LineChartOutlined),
		type: null,
		children: null
	},
	{
		key: PATHS.GENERAL,
		label: "General",
		icon: createElement(InfoCircleOutlined),
		type: null,
		children: null
	},
	{
		key: "Order Managment",
		label: "Order Managment",
		icon: createElement(UnorderedListOutlined),
		type: null,
		children: [
			{
				key: PATHS.ORDER_MANAGMENT_SHIPPING_OPTIONS,
				label: "Shipping Option",
				icon: null, 
				children: null,
				type: null
			},
			{
				key: PATHS.ORDER_MANAGMENT_TRANSACTIONS,
				label: "Transactions",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.ORDER_MANAGMENT_SALES_ORDERS,
				label: "Sales Orders",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.ORDER_MANAGMENT_SALES_HISTORY,
				label: "Sales History",
				icon: null,
				type: null,
				children: null
			} as MenuItem
		]
	},
	{
		key: "Product Managment",
		label: "Product Managment",
		icon: createElement(BuildOutlined),
		type: null,
		children: [
			{
				key: PATHS.PRODUCTS_MATERIALS,
				label: "Materials",
				icon: null, 
				children: null,
				type: null
			},
			{
				key: PATHS.PRODUCTS_COVERING,
				label: "Covering",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.PRODUCTS_ITEM_CATEGORY,
				label: "Item Category",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.PRODUCTS_ITEM_TYPES,
				label: "Item Type",
				icon: null,
				type: null,
				children: null
			}
		]
	},
	{
		key: "User Managment",
		label: "User Managment",
		icon: createElement(UserOutlined),
		type: null,
		children: [
			{
				key: PATHS.USER_MANAGMENT_USER_TYPES,
				label: "User Types",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.USER_MANAGMENT_PENDING_AUTHORIZATION,
				label: "Pending Authorization",
				icon: null,
				type: null,
				children: null
			},
			{
				key: "Permissions",
				label: "Permissions",
				icon: null,
				type: null,
				children: [
					{
						key: PATHS.USER_MANAGMENT_PERMISSION_LIST,
						label: "Permission List",
						icon: null,
						type: null,
						children: null
					},
					{
						key: PATHS.USER_MANAGMENT_PERMISSION_GROUPS,
						label: "Permission Group",
						icon: null,
						type: null,
						children: null
					}
				]
			},
			{
				key: PATHS.USER_MANAGMENT_USERS,
				label: "Users",
				icon: null,
				type: null,
				children: null
			}
		]
	},
	{
		key: "CMS",
		label: "CMS",
		icon: createElement(ReconciliationOutlined ),
		type: null,
		children: [
			{
				key: PATHS.CMS_PROMO_TOOLS,
				label: "Promo Tools",
				icon: null,
				type: null,
				children: null
			},
			{
				key: "Notifications",
				label: "Notifications",
				icon: null,
				type: null,
				children: [
					{
						key: PATHS.CMS_NOTIFICATIONS_BANNER,
						label: "Banners",
						icon: null,
						type: null,
						children: null
					},
					{
						key: PATHS.CMS_NOTIFICATIONS_MODALS,
						label: "Modals",
						icon: null,
						type: null,
						children: null
					},
					{
						key: PATHS.CMS_NOTIFICATIONS_EMAIL,
						label: "Email",
						icon: null,
						type: null,
						children: null
					}
				]
			},
			{
				key: PATHS.CMS_FOLLOW_US,
				label: "Follow Us",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.CMS_TERMS,
				label: "Terms",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.CMS_PRIVACY_AND_POLICY,
				label: "Privacy & Policy",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.CMS_FAQ,
				label: "F.A.Q.",
				icon: null,
				type: null,
				children: null
			},
			{
				key: PATHS.CMS_ABOUT_US,
				label: "About Us",
				icon: null,
				type: null,
				children: null
			}
		]
	}
];