import Logo from '@components/Logo';
import Link from 'next/link';
import DarkModeToggle from '@components/DarkModeToggle';
import styled from '@emotion/styled';
import translations from '@translations/main.json';

const Header: React.FC = () => (
  <HeaderWrapper>
    <Link href="/" passHref>
      <LogoLink aria-label={translations.accessibility.logo}>
        <Logo />
      </LogoLink>
    </Link>
    <DarkModeToggle />
  </HeaderWrapper>
);

const LogoLink = styled.a``;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 88px;
`;

export default Header;
