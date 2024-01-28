import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';
import DeepView from '@components/products-managment/item-category/deepView';

const ItemCategories = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<DeepView />
		</AuthorizedMainClientSideLayout>
	);
};

ItemCategories.getLayout = ProtectedServerSideLayout;

export default ItemCategories;