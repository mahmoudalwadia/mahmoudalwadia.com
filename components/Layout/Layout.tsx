import Head from 'next/head';

import Footer from '@components/Footer';
import Header from '@components/Header';
import styled from '@emotion/styled';
import Container from './Container';
import { useTheme } from '@emotion/react';

const Layout: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.colors.background} />
      </Head>
      <AppWrapper>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </AppWrapper>
    </>
  );
};

const AppWrapper = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.background};
  min-height: 100vh;
`;

export default Layout;
