import { Provider } from 'react-redux';
import type { AppProps as NextAppProps } from 'next/app';
import { NextPage } from 'next';
import { Fragment, ReactElement, ReactNode } from 'react';
import { appWithTranslation } from 'next-i18next';
import store from '@store';
import '@styles/globals.css';
import '@styles/style.css';
import '@styles/style.scss';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

interface AppProps extends NextAppProps {
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
