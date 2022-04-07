import theme from './theme';
import { BPKey } from './theme/breakpoints';

/**
 * Media Queries (Mobile first) with the basic Bootstrap breakpoints.
 *
 * @example
 *
 *    ${mediaQueries.md} {margin: 16px}};
 *    ${mediaQueries.lg} {margin: 32px}};
 */

type MediaQuery = {
  [key in BPKey]: string;
};

const mediaQueries = Object.entries(theme.breakpoints).reduce(
  (acc, [label, size]) => ({
    ...acc,
    [label]: `@media (min-width: ${size}px)`,
  }),
  {} as MediaQuery
);

export default mediaQueries;
