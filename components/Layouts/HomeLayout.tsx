import Footer from '@components/Footer';
import Header from '@components/Header';
import styled from '@emotion/styled';
import Container from './Container';

const HomeLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  background: ${(p) => p.theme.colors.background};
  min-height: 100vh;
`;

export default HomeLayout;
