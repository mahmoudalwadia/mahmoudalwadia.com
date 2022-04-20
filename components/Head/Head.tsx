import { default as NextHead } from 'next/head';
import FontLoader from './FontLoader';
import FaviconLoader from './FaviconLoader';
import GTagLoader from './GTagLoader';

const Head = () => {
  return (
    <NextHead>
      <FontLoader />
      <FaviconLoader />
      <GTagLoader />
    </NextHead>
  );
};

export default Head;
