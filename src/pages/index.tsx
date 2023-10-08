import { ReactElement } from 'react';
import AuthorizedAdminLayout from '../layout/admin/authorizedAdminLayout';
import Dashboard from './dashboard';

export default function IndexPage(): JSX.Element {
  return <Dashboard />;
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};
