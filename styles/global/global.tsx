import { css, Global } from '@emotion/react';
import normalize from './normalize';
import { fontFace } from './font';

export const globalStyles = (
  <Global
    styles={css`
      ${normalize},
      ${fontFace},
      * {
        font-family: Inter, sans-serif;
      }
    `}
  />
);
