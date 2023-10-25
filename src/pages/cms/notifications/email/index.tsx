import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Email = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Email</div>
		</AuthorizedMainClientSideLayout>
	);
};

Email.getLayout = ProtectedServerSideLayout;

export default Email;