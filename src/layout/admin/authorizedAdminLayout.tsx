import React from 'react';
// import { useAdminAuth } from '../../hooks/admin/useAdminAuth';
import { ToastContainer } from 'react-toastify';
import Navbar from '../../features/navbar';
import Sidebar from '../../features/sidebar';
import 'react-toastify/dist/ReactToastify.css';

interface ILayout {
  children: React.ReactElement;
}
const AuthorizedAdminLayout = ({ children }: ILayout): JSX.Element => {
  // const { user } = useAdminAuth();

  return (
    <main>
      <Navbar />
      <Sidebar />
      <ToastContainer newestOnTop />
      {children}
      {/*<div>{user && <>{children}</>}</div>*/}
    </main>
  );
};

export default AuthorizedAdminLayout;
