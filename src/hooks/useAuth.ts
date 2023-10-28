import useSWR from 'swr';
import { useRouter } from 'next/router';
import ApiInstance from '@services/axios';
import { TUser } from '@types/auth';
import tokenStorageUtils from '@utils/tokenStorage.utils';

export const useAuth = (): TUser | null => {

	const router = useRouter();
	const swrResponse = useSWR('/check-auth', () => {
		const tokenData = tokenStorageUtils.get();
		const token = tokenData?.token || null;
		const headers = (
			token
				? ({ Authorization: 'Bearer ' + token })
				: null
		)
		return ApiInstance.get('/check-auth', { headers }).then((res: { data: { data: TUser } }) => {
				return res.data.data;
			})
			.catch(() => {
				tokenStorageUtils.remove();
				router.push('/login');
			})
	}
	);

	const { data: user } = swrResponse

	return user || null;
};
