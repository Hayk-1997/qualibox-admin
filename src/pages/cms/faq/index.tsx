import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const Faq = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>Faq</div>
		</AuthorizedMainClientSideLayout>
	);
};

Faq.getLayout = ProtectedServerSideLayout;

export default Faq;