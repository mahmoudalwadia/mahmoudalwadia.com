import { default as NextHead } from 'next/head';
import FontLoader from './FontLoader';
import FaviconLoader from './FaviconLoader';

const Head = () => {
  return (
    <NextHead>
      <FontLoader />
      <FaviconLoader />
    </NextHead>
  );
};

export default Head;
