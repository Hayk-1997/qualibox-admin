import { API_URL_ID_STRING } from "./common.constants";

export const API_URLS = {
	AUTH: {
		LOGIN: "/login",
		LOGOUT: "/logout",
		CHECK_OUT: "/check-auth",
		ME: "/me"
	},
	MATERIALS: {
		ALL: "/material/all",
		CURRENT: "/material/" + API_URL_ID_STRING,
		DELETE: "/material/" + API_URL_ID_STRING,
		CREATE: "/material/create"
	}
}