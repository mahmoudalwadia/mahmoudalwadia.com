import { AppProps } from 'next/app';
// TODO: upgrade to MDX V0.2
import { ThemeProvider } from 'theme-ui';
import Head from '@components/Head';
import DefaultSeo from '@components/SEO/DefaultSeo';
import globalStyles from '@styles/global';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Head />
      <DefaultSeo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
