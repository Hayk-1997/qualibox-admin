import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const UserTypes = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>UserTypes</div>
		</AuthorizedMainClientSideLayout>
	);
};

UserTypes.getLayout = ProtectedServerSideLayout;

export default UserTypes;