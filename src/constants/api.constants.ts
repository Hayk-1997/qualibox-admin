import { API_URL_ID_STRING } from "./common.constants";

export const BASE_URL = (process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:82/api")
export const STORAGE_URL = (process.env.NEXT_PUBLIC_STORAGE_URL ?? "http://localhost:82/storage")

export const API_URLS = {
	AUTH: {
		LOGIN: "/login",
		LOGOUT: "/logout",
		CHECK_OUT: "/check-auth",
		ME: "/me"
	},
	MATERIALS: {
		ALL: "/material/all",
		DEEP_VIEW: "/material/" + API_URL_ID_STRING,
		UPDATE: "/material/update/" + API_URL_ID_STRING,
		DELETE: "/material/" + API_URL_ID_STRING,
		CREATE: "/material/create",
		UPLOAD_IMG: "/material/" + API_URL_ID_STRING + "/upload-files",
		REMOVE_IMG: "/material/upload-files/" + API_URL_ID_STRING
	},
	ITEM_CATEGORIES: {
		ALL: "/category/all",
		DEEP_VIEW: "/category/" + API_URL_ID_STRING,
		UPDATE: "/category/update/" + API_URL_ID_STRING,
		DELETE: "/category/" + API_URL_ID_STRING,
		CREATE: "/category/create"
	}
}