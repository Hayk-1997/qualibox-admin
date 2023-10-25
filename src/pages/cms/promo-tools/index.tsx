import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const PromoTools = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>PromoTools</div>
		</AuthorizedMainClientSideLayout>
	);
};

PromoTools.getLayout = ProtectedServerSideLayout;

export default PromoTools;