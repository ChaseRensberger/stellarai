import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppShell, MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { HeaderSimple } from '../components/layout/SHeader';
import { useRouter } from 'next/router';

const DeterHeader = () => {
	const router = useRouter();
	const showHeader = router.pathname === '/enter' ? false : true;

	if (showHeader) {
		return (
			<HeaderSimple
				links={[
					{ link: '/', label: 'Profile' },
					{ link: '/jobs', label: 'Jobs' },
				]}
			/>
		);
	} else {
		return <></>;
	}
};

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>StellarAI</title>
				<meta name="description" content="StellarAI" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<AppShell header={<DeterHeader />}>
					<Component {...pageProps} />
				</AppShell>
			</MantineProvider>
		</>
	);
};

export default App;
