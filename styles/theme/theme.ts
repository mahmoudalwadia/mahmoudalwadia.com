import { makeTheme } from '@theme-ui/css/utils';
import { parsedBreakpoints as breakpoints } from './breakpoints';
import colors from './colors';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const colorModeTransition =
  'all 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad), fill 0.25s var(--ease-in-out-quad), stroke 0.25s var(--ease-in-out-quad)';

const fonts = {
  inter: 'Inter, sans-serif',
};

const theme = makeTheme({
  config: {
    initialColorModeName: Theme.LIGHT,
  },
  colors,
  fonts,
  colorModeTransition,
  breakpoints,
});

export default theme;
