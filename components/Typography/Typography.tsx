import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

import mediaQueries from '@styles/media';

/**
 * <Typography/> is a components set which are used to render text (Paragraphs, Heading) within an interface.
 *
 * Example:
 * <Typography.h1>Hello World!</Typography.h1>
 */

const commonStyles = (p: { theme: Theme }) => css`
  word-break: keep-all;
  color: ${p.theme.colors.primary};
  font-family: ${p.theme.fonts.inter};
  transition: ${p.theme.colorModeTransition};
  margin: 0;
`;

const h1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  ${commonStyles};
  ${mediaQueries.md} {
    font-size: 56px;
    line-height: 64px;
  }
`;

const h2 = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  ${commonStyles};
  ${mediaQueries.md} {
    font-size: 46px;
    line-height: 48px;
  }
`;

const h3 = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  ${commonStyles};
  ${mediaQueries.md} {
    font-size: 40px;
    line-height: 44px;
  }
`;

const h4 = styled.h4`
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  ${commonStyles};
  ${mediaQueries.md} {
    font-size: 32px;
    line-height: 40px;
  }
`;

const h5 = styled.h5`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  ${commonStyles};
`;

const h6 = styled.h6`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  ${commonStyles};
`;

const p = styled.p`
  font-size: 16px;
  line-height: 24px;
  ${commonStyles};
`;

const c1 = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  ${commonStyles};
`;
const c2 = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  ${commonStyles};
`;

const Typography = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  c1,
  c2,
};

export default Typography;
