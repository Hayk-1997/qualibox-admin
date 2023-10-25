import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const PendingAuthorization = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>PendingAuthorization</div>
		</AuthorizedMainClientSideLayout>
	);
};

PendingAuthorization.getLayout = ProtectedServerSideLayout;

export default PendingAuthorization;