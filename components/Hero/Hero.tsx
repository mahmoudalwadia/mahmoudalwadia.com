import Typography from '@components/Typography';
import styled from '@emotion/styled';
import mediaQueries from '@styles/media';
import translations from '@translations/main.json';

const Hero: React.FC = () => (
  <HeroWrapper>
    <HeadLine>{translations.aboutMe.title}</HeadLine>
    <Bio>{translations.aboutMe.bio}</Bio>
  </HeroWrapper>
);

const HeadLine = styled(Typography.h1)`
  letter-spacing: -0.06em;
  margin: 0;
  margin-bottom: 16px;
  max-width: 658px;
`;

const Bio = styled(Typography.p)`
  max-width: 560px;
  font-weight: 300;
  margin: 0;
  color: ${(p) => p.theme.colors.secondary};
`;

const HeroWrapper = styled.div`
  margin-top: 40px;
  ${mediaQueries.md} {
    margin-top: 64px;
  }
`;

export default Hero;
