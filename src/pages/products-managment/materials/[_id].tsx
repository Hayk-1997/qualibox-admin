import { ReactElement } from 'react';
import ProtectedServerSideLayout from '@layout/protectedServerSideLayout';
import AuthorizedLayout from '@layout/authorizedMainClientSideLayout';
import AuthorizedMainClientSideLayout from '@layout/authorizedMainClientSideLayout';
import DeepView from '@components/products-managment/materials/deepView';

const Materials = (): JSX.Element => {
	return (
		<AuthorizedMainClientSideLayout>
			<DeepView />
		</AuthorizedMainClientSideLayout>
	);
};

Materials.getLayout = ProtectedServerSideLayout;

export default Materials;