import { ReactElement, Fragment } from 'react';
import { useAuth } from '@hooks/useAuth';

const ProtectedServerSideLayout = (page: ReactElement): JSX.Element => {
	const user = useAuth();
	return (
		<Fragment>
			{
				user
					? page
					: null
			}
		</Fragment>
	);
};

export default ProtectedServerSideLayout;
