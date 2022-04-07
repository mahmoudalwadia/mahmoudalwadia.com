import type { NextPage } from 'next';
import mediaQueries from '@styles/media';
import styled from '@emotion/styled';
import Layout from '@components/Layout';

const Text = styled.p`
  background: #000;
  color: red;
  ${mediaQueries.md} {
    color: blue;
  }
  ${mediaQueries.lg} {
    color: yellow;
  }
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Text>Hello World!</Text>
    </Layout>
  );
};

export default Home;
