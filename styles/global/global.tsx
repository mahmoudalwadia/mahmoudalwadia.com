import { css, Global } from '@emotion/react';
import { reset } from './reset';
import { fontFace } from './font';

export const globalStyles = (
  <Global
    styles={css`
      ${reset},
      ${fontFace},
      * {
        font-family: Inter, sans-serif;
      }
    `}
  />
);
