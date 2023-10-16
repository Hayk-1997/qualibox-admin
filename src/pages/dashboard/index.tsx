import { ReactElement } from 'react';
import AuthorizedLayout from '@layout/authorizedLayout';

const Dashboard = (): JSX.Element => {
	return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
	return (
		<AuthorizedLayout pageContentHeader="Dashboard">
			{page}
		</AuthorizedLayout>
	);
};

export default Dashboard;
