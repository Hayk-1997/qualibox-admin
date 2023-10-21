import useSWR from 'swr';
import { useRouter } from 'next/router';
import ApiInstance from '@services/axios';
import { clearToken, getUserToken } from '@helpers/auth';
import { TUser } from '@types/auth';

export const useAuth = (): TUser | null => {

	const router = useRouter();
	const swrResponse = useSWR('/check-auth', () =>
		ApiInstance.get('/check-auth', {
			headers: { Authorization: 'Bearer ' + getUserToken() },
		})
			.then((res: { data: { data: TUser } }) => {
				//@TODO need to refactor later
				// if (res.data.data.role !== ADMIN.ADMIN) {
				//   router.push('/login');
				// }
				return res.data.data;
			})
			.catch(() => {
				clearToken();
				router.push('/login');
			})
	);

	const { data: user } = swrResponse

	console.log("swrResponse: ", swrResponse);
	

	if (user) {
		return user;
	}

	return null;
};
