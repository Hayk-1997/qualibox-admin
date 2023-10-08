import React from 'react';
import { useAdminAuth } from '../../hooks/admin/useAdminAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ILayout {
  children: React.ReactElement;
}
const AuthorizedAdminLayout = ({ children }: ILayout): JSX.Element => {
  const { user } = useAdminAuth();

  return (
    <main>
      <ToastContainer newestOnTop />
      <div>{user && <>{children}</>}</div>
    </main>
  );
};

export default AuthorizedAdminLayout;
