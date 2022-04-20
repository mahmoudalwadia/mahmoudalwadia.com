import type { NextPage } from 'next';
import Logo from '@components/Logo';
import Typography from '@components/Typography';
import styled from '@emotion/styled';
import Link from 'next/link';
import translations from '@translations/main.json';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{translations[404].metaTitle}</title>
      </Head>
      <Wrapper>
        <Title>{translations[404].title}</Title>
        <Logo width={150} height={156.77} crazyMode />
        <Description>
          {translations[404].message}
          <Link href="/">{translations[404].link}</Link>
        </Description>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Description = styled(Typography.p)`
  max-width: 200px;
  text-align: center;
`;

const Title = styled(Typography.h4)`
  margin: 0;
  margin-bottom: 16px;
`;

export default NotFoundPage;
