import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Covering = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Covering</div>
		</AuthorizedMainClientSideLayout>
	);
};

Covering.getLayout = ProtectedServerSideLayout;

export default Covering;