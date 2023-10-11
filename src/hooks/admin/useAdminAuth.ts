import useSWR from 'swr';
import { useRouter } from 'next/router';
import ApiInstance from '../../services/axios';
import { clearToken, getUserToken } from '../../helpers/auth';
import { TUser } from '../../types/auth/admin';
// import { ADMIN } from '../../enum/user';

export const useAdminAuth = (): TUser | null => {
  const router = useRouter();

  const { data: user } = useSWR('/check-auth', () =>
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

  if (user) {
    return user;
  }

  return null;
};
