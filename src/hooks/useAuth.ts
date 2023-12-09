import useSWR from 'swr';
import { useRouter } from 'next/router';
import ApiInstance from '@services/axios';
import { TUser } from '@types/auth';
import tokenStorageUtils from '@utils/tokenStorage.utils';
import { API_URLS } from '@constants/api.constants';
import { PATHS } from '@constants/navigations.constants';

export const useAuth = (): TUser | null => {

	const router = useRouter();
	const swrResponse = useSWR(API_URLS.AUTH.CHECK_OUT, () => {
		const tokenData = tokenStorageUtils.get();
		const token = tokenData?.token || null;
		const headers = (
			token
				? ({ Authorization: 'Bearer ' + token })
				: null
		)
		return ApiInstance.get(API_URLS.AUTH.CHECK_OUT, { headers }).then((res: { data: { data: TUser } }) => {
				return res.data;
			})
			.catch(() => {
				tokenStorageUtils.remove();
				router.push(PATHS.LOGIN);
			})
	}
	);

	const { data: user } = swrResponse

	return user || null;
};
