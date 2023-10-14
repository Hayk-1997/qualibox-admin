import React from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../features/navbar';
import Sidebar from '../../features/sidebar';

import 'react-toastify/dist/ReactToastify.css';
import PageContentHeader from '../../features/pageContentHeader';

interface ILayout {
  children: React.ReactElement;
  pageContentHeader: string;
}
const AuthorizedAdminLayout = ({
  children,
  pageContentHeader,
}: ILayout): JSX.Element => {
  const user = 1; //useAdminAuth();

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
