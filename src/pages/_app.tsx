import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globals';
import Head from 'next/head';
import theme from 'styles/theme';
import { useApollo } from 'hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}
export default MyApp;
