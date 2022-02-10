import { AppProps } from 'next/app';
import Head from '@components/Head';
import globalStyles from '@styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
