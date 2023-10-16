import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { appWithTranslation } from 'next-i18next';
import '@styles/globals.css';
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
		<Provider store={store}>
			{getLayout(<Component {...pageProps} />)}
		</Provider>
	);
};

export default appWithTranslation(App);
