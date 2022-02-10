import { default as NextHead } from 'next/head';
import FontLoader from './FontLoader';

const Head = () => {
  return (
    <NextHead>
      <FontLoader />
    </NextHead>
  );
};

export default Head;
