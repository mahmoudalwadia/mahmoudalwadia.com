import Footer from '@components/Footer';
import Header from '@components/Header';
import styled from '@emotion/styled';
import Container from './Container';

const BlogPostLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Header />
      </Container>
      <ContentWrapper>{children}</ContentWrapper>
      <Container>
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

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default BlogPostLayout;
