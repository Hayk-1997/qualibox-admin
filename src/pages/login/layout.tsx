import { ReactElement, useCallback, useEffect } from 'react';
import AuthPageLayout from '@layout/authPageLayout';

const Layout = (page: ReactElement) => {
	return <AuthPageLayout>{page}</AuthPageLayout>;
}
export default Layout