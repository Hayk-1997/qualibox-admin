import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const ShippingOptions = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>ShippingOptions</div>
		</AuthorizedMainClientSideLayout>
	);
};

ShippingOptions.getLayout = ProtectedServerSideLayout;

export default ShippingOptions;