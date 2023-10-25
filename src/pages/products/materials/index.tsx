import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Materials = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Materials</div>
		</AuthorizedMainClientSideLayout>
	);
};

Materials.getLayout = ProtectedServerSideLayout;

export default Materials;