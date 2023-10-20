import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Dashboard = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Dashboard</div>
		</AuthorizedMainClientSideLayout>
	);
};

Dashboard.getLayout = ProtectedServerSideLayout;

export default Dashboard;
