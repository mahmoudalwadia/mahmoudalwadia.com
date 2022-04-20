import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import Head from '@components/Head';
import globalStyles from '@styles/global';
import theme from '@styles/theme';
import useGTag from '@hooks/useGTag';

function MyApp({ Component, pageProps }: AppProps) {
  useGTag();
  return (
    <>
      {globalStyles}
      <Head />
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
