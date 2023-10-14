import { ReactElement } from 'react';
import React from 'react';
import AuthorizedAdminLayout from '../../layout/admin/authorizedAdminLayout';

const Items = (): JSX.Element => {
  return <div></div>;
};

Items.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthorizedAdminLayout pageContentHeader="Items">
      {page}
    </AuthorizedAdminLayout>
  );
};

export default Items;
