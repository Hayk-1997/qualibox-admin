import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const PermissionGroups = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>PermissionGroups</div>
		</AuthorizedMainClientSideLayout>
	);
};

PermissionGroups.getLayout = ProtectedServerSideLayout;

export default PermissionGroups;