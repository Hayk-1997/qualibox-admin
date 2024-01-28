import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';
import AllMaterials from '@components/products-managment/materials/allMaterials';

const Materials = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<AllMaterials />
		</AuthorizedMainClientSideLayout>
	);
};

Materials.getLayout = ProtectedServerSideLayout;

export default Materials;