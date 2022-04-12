import Head from 'next/head';

import Footer from '@components/Footer';
import Header from '@components/Header';
import styled from '@emotion/styled';
import Container from './Container';
import { useThemeUI } from 'theme-ui';

const Layout: React.FC = ({ children }) => {
  const { theme } = useThemeUI();

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={theme?.colors?.background as string}
        />
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
  transition: ${(p) => p.theme.colorModeTransition};
  min-height: 100vh;
`;

export default Layout;
