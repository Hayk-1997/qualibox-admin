import axios, { AxiosInstance } from 'axios';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { DATE_FORMAT } from '@constants/common.constants';
import dayjs from 'dayjs';
import { BASE_URL } from '@constants/api.constants';



const ApiInstance: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
});

// Add a request interceptor
ApiInstance.interceptors.request.use((config) => {
		if (typeof window === 'undefined') { return config; }
		const tokenData = tokenStorageUtils.get()
		const token = tokenData?.token || null;
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token;
		}
		if (config.method === "get") {
			config.url = config.url.indexOf("?") > -1 ? config.url + "&timestump=" + Date.now() : config.url + "?timestump=" + Date.now()
		}
		return config
	},
	(error) => {
		// Do something with request error
		return Promise.reject(error);
	}
);


// Add a response interceptor
ApiInstance.interceptors.response.use((response) => {
		// Do something with response data
		return response;
	},
	(error) => {
		// Do something with response error
		return Promise.reject(error);
	}
);

export default ApiInstance;
