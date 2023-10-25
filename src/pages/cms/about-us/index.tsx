import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const AboutUs = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>AboutUs</div>
		</AuthorizedMainClientSideLayout>
	);
};

AboutUs.getLayout = ProtectedServerSideLayout;

export default AboutUs;