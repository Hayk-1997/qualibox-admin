import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const General = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>General</div>
		</AuthorizedMainClientSideLayout>
	);
};

General.getLayout = ProtectedServerSideLayout;

export default General;