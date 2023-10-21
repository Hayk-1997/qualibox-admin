import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { Fragment, ReactElement, ReactNode } from 'react';
import { appWithTranslation } from 'next-i18next';
import '@styles/globals.css';
import '@styles/globals.scss';
import store from '@store';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

interface AppProps extends AppProps {
	Component: NextPageWithLayout;
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => {

	const getLayout = Component.getLayout || ((page) => page);

	return (
		<Fragment>
			<div className='bg' />
			<Provider store={store}>
				{getLayout(<Component {...pageProps} />)}
			</Provider>
		</Fragment>
	);
};

export default appWithTranslation(App);
