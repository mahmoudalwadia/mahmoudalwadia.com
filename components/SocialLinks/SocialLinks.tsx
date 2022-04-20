import Typography from '@components/Typography';
import styled from '@emotion/styled';
import translations from '@translations/main.json';

const socialLinksList = [
  {
    label: translations.socialLinks.linkedIn,
    href: 'https://www.linkedin.com/in/mahmoudalwadia/',
  },
  {
    label: translations.socialLinks.twitter,
    href: 'https://twitter.com/mah_alwadia',
  },
  {
    label: translations.socialLinks.github,
    href: 'https://github.com/mahmoudalwadia',
  },
];

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksWrapper>
      {socialLinksList.map((socialLink) => (
        <SocialLink
          key={socialLink.label}
          href={socialLink.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${translations.linkTo} ${socialLink.label}`}
        >
          <Label>{socialLink.label}</Label>
        </SocialLink>
      ))}
    </SocialLinksWrapper>
  );
};

const SocialLinksWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`;

const SocialLink = styled.a`
  margin-right: 8px;
  text-decoration: underline;
  text-decoration-color: ${(p) => p.theme.colors.secondary};
  text-decoration-thickness: 0.9px;
  transition: color 0.3s ease-in-out, text-decoration-color 0.3s ease-in-out;
  &:hover {
    text-decoration-color: ${(p) => p.theme.colors.primary};
  }
`;

const Label = styled(Typography.c2)`
  color: ${(p) => p.theme.colors.secondary};
  transition: color 0.3s ease-in-out;
  margin: 0;
  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

export default SocialLinks;
