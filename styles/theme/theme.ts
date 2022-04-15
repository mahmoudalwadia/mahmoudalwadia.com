import { parsedBreakpoints as breakpoints } from './breakpoints';
import colors from './colors';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const fonts = {
  inter: 'Inter, sans-serif',
};

const theme = {
  colors,
  fonts,
  breakpoints,
};

export default theme;
