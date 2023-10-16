import { ReactElement } from 'react';
import React from 'react';
import AuthorizedLayout from '@layout/authorizedLayout';

const Items = (): JSX.Element => {
	return <div></div>;
};

Items.getLayout = function getLayout(page: ReactElement) {
	return (
		<AuthorizedLayout pageContentHeader="Items">
			{page}
		</AuthorizedLayout>
	);
};

export default Items;
