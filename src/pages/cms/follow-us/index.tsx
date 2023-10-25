import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const FollowUs = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>FollowUs</div>
		</AuthorizedMainClientSideLayout>
	);
};

FollowUs.getLayout = ProtectedServerSideLayout;

export default FollowUs;