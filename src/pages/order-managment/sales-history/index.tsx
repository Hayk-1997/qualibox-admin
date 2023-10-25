import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const SalesHistory = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>SalesHistory</div>
		</AuthorizedMainClientSideLayout>
	);
};

SalesHistory.getLayout = ProtectedServerSideLayout;

export default SalesHistory;