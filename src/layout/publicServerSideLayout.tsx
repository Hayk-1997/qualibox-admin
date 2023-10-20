import { ReactElement, Fragment } from 'react';

const PublicServerSideLayout = (page: ReactElement) => {
	return (
		<Fragment>
			{page}
		</Fragment>
	);
}
export default PublicServerSideLayout