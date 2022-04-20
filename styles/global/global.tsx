import { css, Global } from '@emotion/react';
import normalize from './normalize';
import { fontFace } from './font';

const styles = css`
  ${normalize},
  ${fontFace},

  :root {
    /**
     * Thanks to Benjamin De Cock
     * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
     */
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);

    /* Light theme */
    --primary: #191919;
    --secondary: #73737d;
    --background: #fafafa;
    --accent: #6166dc;
    --gradient: linear-gradient(
      180deg,
      rgba(217, 219, 224, 0) 0%,
      #d9dbe0 100%
    );
    --horizontalRule: rgba(8, 8, 11, 0.15);
    --quoteBorder: #e5e7eb;
    --quoteColor: #616161;
    --quoteBackgroundColor: #f1f1f1;
    --bulletColor: #d1d5db;
    --counterColor: #6b7280;
  }

  /* Dark theme */
  [data-theme='dark'] {
    --primary: #ffffff;
    --secondary: #73737d;
    --background: #111216;
    --accent: #e9daac;
    --gradient: linear-gradient(
      180deg,
      #111216 0%,
      rgba(66, 81, 98, 0.36) 100%
    );
    --horizontalRule: rgba(255, 255, 255, 0.15);
    --quoteBorder: #333333;
    --quoteColor: #cecece;
    --quoteBackgroundColor: #222222;
    --counterColor: #6b7280;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
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

  ::selection {
    background: var(--primary);
    color: var(--background);
  }
`;

export const globalStyles = <Global styles={styles} />;
