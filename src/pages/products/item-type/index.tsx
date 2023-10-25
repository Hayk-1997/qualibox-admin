import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const ItemType = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>ItemType</div>
		</AuthorizedMainClientSideLayout>
	);
};

ItemType.getLayout = ProtectedServerSideLayout;

export default ItemType;