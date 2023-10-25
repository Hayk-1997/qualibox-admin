import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Transactions = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Transactions</div>
		</AuthorizedMainClientSideLayout>
	);
};

Transactions.getLayout = ProtectedServerSideLayout;

export default Transactions;