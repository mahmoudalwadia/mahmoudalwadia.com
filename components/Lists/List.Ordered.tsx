import styled from '@emotion/styled';

const OrderedList = styled.ol`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  word-break: keep-all;
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.fonts.inter};
  ::selection {
    background: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.background};
  }
  padding-left: 24px;
  color: ${(p) => p.theme.colors.primary};
  position: relative;
  margin: 0 auto;

  li {
    padding-left: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      padding-bottom: 0;
    }
  }

  li > :not(ol, ul) {
    display: inline;
  }

  li::marker {
    color: #6b7280;
    /* color: ${(p) => p.theme.colors.bulletColor}; */
  }
`;

export default OrderedList;
