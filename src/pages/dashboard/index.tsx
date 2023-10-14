import { ReactElement } from 'react';
import AuthorizedAdminLayout from '../../layout/admin/authorizedAdminLayout';

const Dashboard = (): JSX.Element => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthorizedAdminLayout pageContentHeader="Dashboard">
      {page}
    </AuthorizedAdminLayout>
  );
};

export default Dashboard;
