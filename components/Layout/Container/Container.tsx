import styled from '@emotion/styled';
import mediaQueries from '@styles/media';

// Max width in the very big screens (+1200px)
const LG_CONTAINER_WIDTH = 1260;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: calc(100vw - 32px);
  ${mediaQueries.sm} {
    max-width: calc(100vw - 64px);
  }
  ${mediaQueries.md} {
    max-width: calc(100vw - 128px);
  }
  ${mediaQueries.xl} {
    padding: 0 64px;
    max-width: ${LG_CONTAINER_WIDTH}px;
  }
`;

export default Container;
