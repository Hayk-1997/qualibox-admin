import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const SalesOrders = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>SalesOrders</div>
		</AuthorizedMainClientSideLayout>
	);
};

SalesOrders.getLayout = ProtectedServerSideLayout;

export default SalesOrders;