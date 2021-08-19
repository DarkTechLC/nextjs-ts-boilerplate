import Head from 'next/head';

import { Main } from 'components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
