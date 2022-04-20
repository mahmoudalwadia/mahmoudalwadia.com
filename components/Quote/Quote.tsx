import styled from '@emotion/styled';
import mediaQueries from '@styles/media';

const Quote = styled.blockquote<{ noTopSpacing?: boolean }>`
  margin-top: ${(p) => (p.noTopSpacing ? '0' : '40px')};
  margin-bottom: 24px;
  quotes: '„' '“' '‚' '‘';
  font-style: italic;

  & > p {
    font-size: 18px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    line-height: 1.32;
    font-weight: bold;

    ${mediaQueries.md} {
      font-size: 24px;
    }
  }
`;

export default Quote;
