import React from 'react';
import { useAuth } from '@hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import Navbar from '@features/navbar';
import Sidebar from '@features/sidebar';
import PageContentHeader from '@features/pageContentHeader';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
	children: React.ReactElement;
	pageContentHeader: string;
}
const AuthorizedAdminLayout = ({ children, pageContentHeader }: Props): JSX.Element => {
	const user = useAuth();
	return (
		<main>
			<Navbar />
			<Sidebar />
			<ToastContainer newestOnTop />
			{user && (
				<div className="content-wrapper">
					<PageContentHeader pageContentHeader={pageContentHeader} />
					{children}
				</div>
			)}
		</main>
	);
};

export default AuthorizedAdminLayout;
