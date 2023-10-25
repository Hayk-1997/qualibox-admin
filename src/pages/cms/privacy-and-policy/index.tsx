import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const PrivacyAndPolicy = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>PrivacyAndPolicy</div>
		</AuthorizedMainClientSideLayout>
	);
};

PrivacyAndPolicy.getLayout = ProtectedServerSideLayout;

export default PrivacyAndPolicy;