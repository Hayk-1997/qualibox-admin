import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Terms = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Terms</div>
		</AuthorizedMainClientSideLayout>
	);
};

Terms.getLayout = ProtectedServerSideLayout;

export default Terms;