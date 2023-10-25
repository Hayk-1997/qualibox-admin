import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';

const ItemCategory = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<div>ItemCategory</div>
		</AuthorizedMainClientSideLayout>
	);
};

ItemCategory.getLayout = ProtectedServerSideLayout;

export default ItemCategory;