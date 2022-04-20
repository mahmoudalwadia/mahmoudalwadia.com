import styled from '@emotion/styled';

const Blockquote = styled.blockquote`
  border-left-style: solid;
  border-left-width: 4px;
  border-left-color: ${(p) => p.theme.colors.quoteBorder};
  margin: 24px 0 24px 0;
  background: ${(p) => p.theme.colors.quoteBackgroundColor};
  padding: 8px 8px 8px 16px;
  p {
    margin: 0;
    font-style: italic;
    color: ${(p) => p.theme.colors.quoteColor};
  }
`;

export default Blockquote;
