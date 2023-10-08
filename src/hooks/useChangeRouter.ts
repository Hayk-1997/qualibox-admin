import { useCallback } from 'react';
import { NextRouter, useRouter } from 'next/router';

type QueryData = string[];

interface ChangeRouter {
  changeRouter: (queryData: QueryData, key: string) => void;
}
const useChangeRouter = (): ChangeRouter => {
  const router: NextRouter = useRouter();

  const changeRouter = useCallback(
    (queryData: QueryData, key: string) => {
      router.push(
        {
          pathname: '/shop',
          query: {
            ...router.query,
            [key]: queryData,
          },
        },
        undefined,
        { scroll: false }
      );
    },
    [router]
  );

  return { changeRouter };
};

export default useChangeRouter;
