import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import styled from '@emotion/styled';
import * as mdx from '@mdx-js/react';
import Typography from '@components/Typography';
import Anchor from '@components/Anchor';
import Blockquote from '@components/Blockquote';
import Quote from '@components/Quote';
import Lists from '@components/Lists';

const RoundedImage = styled(Image)`
  border-radius: 8px;
`;

const Hr = styled.hr`
  border: 0.5px solid ${(p) => p.theme.colors.primary};
`;

const components = {
  Image: RoundedImage,
  a: Anchor,
  blockquote: Blockquote,
  h1: Typography.h1, // h1 reserved article title
  h2: Typography.h2,
  h3: Typography.h3,
  h4: Typography.h4,
  h5: Typography.h5,
  h6: Typography.h6,
  p: Typography.p,
  ul: Lists.ul,
  ol: Lists.ol,
  Quote: Quote,
  hr: Hr,
} as React.ComponentProps<typeof mdx.MDXProvider>['components'];

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const MDX: React.FC<Props> = ({ source }) => {
  return <MDXRemote {...source} components={components} />;
};

export default MDX;
