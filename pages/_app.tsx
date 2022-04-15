import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import Head from '@components/Head';
import DefaultSeo from '@components/SEO/DefaultSeo';
import globalStyles from '@styles/global';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Head />
      <DefaultSeo />
      <ThemeProvider>
        {/* TODO: Remove EmotionThemeProvider*/}
        <EmotionThemeProvider theme={theme}>
          <Component {...pageProps} />
        </EmotionThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
