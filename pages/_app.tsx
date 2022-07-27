import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';
import Head from 'next/head';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<>
			<Head>
				<title>StellarAI</title>
				<meta name="description" content="StellarAI" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider withGlobalStyles withNormalizeCSS>
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

export default App;
