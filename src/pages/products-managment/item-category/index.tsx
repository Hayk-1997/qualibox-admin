import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';
import AllItemCategories from '@components/products-managment/item-category/allMaterials';

const ItemCategory = (): JSX.Element => {
	console.log(1);
	
	return (
		<AuthorizedMainClientSideLayout>
			<AllItemCategories />
		</AuthorizedMainClientSideLayout>
	);
};

ItemCategory.getLayout = ProtectedServerSideLayout;

export default ItemCategory;