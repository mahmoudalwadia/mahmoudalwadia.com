import { css } from '@emotion/react';

export const fontFace = css`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Regular.eot');
    src: local('Inter Regular'), local('Inter-Regular'),
      url('/fonts/Inter/Inter-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Inter/Inter-Regular.woff2') format('woff2'),
      url('/fonts/Inter/Inter-Regular.woff') format('woff'),
      url('/fonts/Inter/Inter-Regular.ttf') format('truetype'),
      url('/fonts/Inter/Inter-Regular.svg#Inter-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-SemiBold.eot');
    src: local('Inter SemiBold'), local('Inter-SemiBold'),
      url('/fonts/Inter/Inter-SemiBold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Inter/Inter-SemiBold.woff2') format('woff2'),
      url('/fonts/Inter/Inter-SemiBold.woff') format('woff'),
      url('/fonts/Inter/Inter-SemiBold.ttf') format('truetype'),
      url('/fonts/Inter/Inter-SemiBold.svg#Inter-SemiBold') format('svg');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Light.eot');
    src: local('Inter Light'), local('Inter-Light'),
      url('/fonts/Inter/Inter-Light.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Inter/Inter-Light.woff2') format('woff2'),
      url('/fonts/Inter/Inter-Light.woff') format('woff'),
      url('/fonts/Inter/Inter-Light.ttf') format('truetype'),
      url('/fonts/Inter/Inter-Light.svg#Inter-Light') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Medium.eot');
    src: local('Inter Medium'), local('Inter-Medium'),
      url('/fonts/Inter/Inter-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/Inter/Inter-Medium.woff2') format('woff2'),
      url('/fonts/Inter/Inter-Medium.woff') format('woff'),
      url('/fonts/Inter/Inter-Medium.ttf') format('truetype'),
      url('/fonts/Inter/Inter-Medium.svg#Inter-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  * {
    font-family: Inter, sans-serif;
  }
`;
