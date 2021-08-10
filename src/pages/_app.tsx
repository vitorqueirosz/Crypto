import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globals';
import Head from 'next/head';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Crypto</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="The latest news about Cryptos!" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
