import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const PermissionList = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>PermissionList</div>
		</AuthorizedMainClientSideLayout>
	);
};

PermissionList.getLayout = ProtectedServerSideLayout;

export default PermissionList;