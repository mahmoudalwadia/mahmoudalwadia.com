import styled from '@emotion/styled';

const Anchor = styled.a`
  color: ${(p) => p.theme.colors.accent};

  &:visited {
    color: ${(p) => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default Anchor;
