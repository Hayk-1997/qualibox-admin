import axios, { AxiosInstance } from 'axios';
import tokenStorageUtils from '@utils/tokenStorage.utils';

const ApiInstance: AxiosInstance = axios.create({
	baseURL: (process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:82/api"),
	timeout: 5000,
});

// Add a request interceptor
ApiInstance.interceptors.request.use((config) => {
		if (typeof window !== 'undefined') {
			const tokenData = tokenStorageUtils.get()
			const token = tokenData?.token || null;
			if (token) {
				config.headers['Authorization'] = 'Bearer ' + token;
			}
		}
		return config;
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
