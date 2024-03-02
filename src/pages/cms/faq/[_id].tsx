import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';
import DeepView from '@components/cms/faq/deepView';

const FAQ = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<DeepView />
		</AuthorizedMainClientSideLayout>
	);
};

FAQ.getLayout = ProtectedServerSideLayout;

export default FAQ;