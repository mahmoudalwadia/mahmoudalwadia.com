import { css, Global } from '@emotion/react';
import normalize from './normalize';
import { fontFace } from './font';

const styles = css`
  ${normalize},
  ${fontFace},

  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  body {
    font-family: Inter, sans-serif;
  }

  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  a,
  button {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const globalStyles = <Global styles={styles} />;
