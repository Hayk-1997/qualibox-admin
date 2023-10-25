import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Users = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Users</div>
		</AuthorizedMainClientSideLayout>
	);
};

Users.getLayout = ProtectedServerSideLayout;

export default Users;