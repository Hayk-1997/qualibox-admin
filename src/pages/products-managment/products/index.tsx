import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';
// import AllProducts from '@components/products-managment/products/allProducts';

const Products = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			{/* <AllProducts /> */}
		</AuthorizedMainClientSideLayout>
	);
};

Products.getLayout = ProtectedServerSideLayout;

export default Products;