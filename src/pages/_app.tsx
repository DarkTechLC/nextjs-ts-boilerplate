import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta
          name="description"
          content="A boilerplate to work with TypeScript, ReactJS, NextJs and Styled Components"
        />
        <meta name="theme-color" content="#06092b" />
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
