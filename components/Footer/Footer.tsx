import styled from '@emotion/styled';
import Typography from '@components/Typography';
import mediaQueries from '@styles/media';
import Link from 'next/link';
import translations from '@translations/main.json';

const Footer: React.FC = () => {
  return (
    <>
      <FooterGradient />
      <HorizontalRule />
      <FooterWrapper>
        <FooterLink
          href="https://github.com/mahmoudalwadia/mahmoudalwadia.com"
          target="_blank"
          aria-label={`${translations.linkTo} ${translations.footer.Links.sourceCode}`}
        >
          <FooterText>{translations.footer.Links.sourceCode}</FooterText>
        </FooterLink>
        <Link href="/rss.xml" passHref>
          <FooterLink
            target="_blank"
            aria-label={`${translations.linkTo} ${translations.footer.Links.rss}`}
          >
            <FooterText>{translations.footer.Links.rss}</FooterText>
          </FooterLink>
        </Link>
      </FooterWrapper>
    </>
  );
};

const FooterLink = styled.a`
  transition: text-decoration-color 0.3s ease-in-out;
  text-decoration: underline;
  text-decoration-thickness: 0.9px;
  text-decoration-color: ${(p) => p.theme.colors.secondary};
  &:hover {
    text-decoration-color: ${(p) => p.theme.colors.primary};
  }
`;

const FooterText = styled(Typography.c2)`
  transition: color 0.3s ease-in-out;
  color: ${(p) => p.theme.colors.secondary};
  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const FooterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(p) => p.theme.colors.secondary};
  padding-bottom: 50px;

  ${mediaQueries.md} {
    padding-bottom: 80px;
  }
`;

const HorizontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  margin-bottom: 56px;
  border-bottom: 1px solid ${(p) => p.theme.colors.horizontalRule};

  ${mediaQueries.md} {
    padding-bottom: 140px;
    margin-top: 0px;
  }
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 264px;
  z-index: 0;
  pointer-events: none;
  background: ${(p) => p.theme.colors.gradient};
  ${mediaQueries.md} {
    height: 288px;
  }
`;

export default Footer;
