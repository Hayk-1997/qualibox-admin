import useSWR from 'swr';
import { useRouter } from 'next/router';
import ApiInstance from '../../services/axios';
import { clearToken, getUserToken } from '../../helpers/auth';
import { ADMIN } from '../../enum/user';

// interface IUseAuth {
//   middleware: string;
//   redirectIfAuthenticated?: string;
// }
export const useAdminAuth = (): any => {
  const router = useRouter();

  const {
    data: user,
    // error,
    // mutate,
  } = useSWR('/auth/check-auth', () =>
    ApiInstance.get('/auth/check-auth', {
      headers: { Authorization: 'Bearer ' + getUserToken() },
    })
      .then((res) => {
        if (res.data.data.role !== ADMIN.ADMIN) {
          router.push('/admin/login');
        }
        return res.data;
      })
      .catch(() => {
        clearToken();
        router.push('/admin/login');
      })
  );

  return {
    user,
  };
};
