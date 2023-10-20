import { ReactElement, Fragment } from 'react';
import { useAuth } from '@hooks/useAuth';

const ProtectedServerSideLayout = (page: ReactElement): JSX.Element => {
	const user = useAuth();
	return (
		<Fragment>
			{page}
		</Fragment>

		// <main>
		// 	<Navbar />
		// 	<Sidebar />
		// 	<ToastContainer newestOnTop />
		// 	{user && (
		// 		<div className="content-wrapper">
		// 			<PageContentHeader pageContentHeader={pageContentHeader} />
		//				{children}
		// 		</div>
		// 	)}
		// </main>
	);
};

export default ProtectedServerSideLayout;
