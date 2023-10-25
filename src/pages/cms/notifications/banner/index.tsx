import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Banner = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Banner</div>
		</AuthorizedMainClientSideLayout>
	);
};

Banner.getLayout = ProtectedServerSideLayout;

export default Banner;