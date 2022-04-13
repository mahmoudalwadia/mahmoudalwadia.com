import Typography from '@components/Typography';
import styled from '@emotion/styled';
import Link from 'next/link';
import translations from '@translations/main.json';
import mediaQueries from '@styles/media';

// TODO: Remove once you fetch correct data
const blogPostListMocks = [
  {
    title: 'More than 2 years in startup, does it worth it?',
    description:
      'Reflection on joining startup in their pre-seed round and working 2.5 years with them and making it number one platform for car subscription in Germany.',
    href: '/blog/more-than-2-years-in-startup-does-it-worth-it',
    date: 'April 1st, 2021',
    timeToRead: 5,
  },
  {
    title: 'How we should track customers journey',
    description:
      'Rethinking about how we should track customers in our apps to enable better adds spending by targeting the high potential customer.',
    href: '/blog/how-we-should-track-customers-journey',
    date: 'March 1st, 2021',
    timeToRead: 11,
  },
];

const BlogPostsList: React.FC = () => {
  return (
    <BlogPostsListWrapper>
      {blogPostListMocks.map((blogPost) => (
        <Link key={blogPost.title} href={blogPost.href} passHref>
          <BlogPostLink>
            <Title>{blogPost.title}</Title>
            <Description>{blogPost.description}</Description>
            <MetaData>
              {`${blogPost.date} · ${blogPost.timeToRead} ${translations.timeToReadUnit}`}
            </MetaData>
          </BlogPostLink>
        </Link>
      ))}
    </BlogPostsListWrapper>
  );
};

const BlogPostsListWrapper = styled.div`
  margin-top: 80px;
  max-width: 550px;

  ${mediaQueries.md} {
    margin-top: 120px;
  }
`;

const BlogPostLink = styled.a`
  display: inline-block;
  margin-top: 24px;

  &:first-child {
    margin-top: 0;
  }

  ${mediaQueries.md} {
    margin-top: 32px;

    &:hover h4,
    &:focus h4 {
      color: ${(p) => p.theme.colors.accent};
    }
  }
`;

const Title = styled(Typography.h4)`
  transition: color 0.3s ease-in-out;
`;

const Description = styled(Typography.c1)`
  margin-top: 8px;
  transition: color 0.3s ease-in-out;
  color: ${(p) => p.theme.colors.secondary};
`;

const MetaData = styled(Typography.c2)`
  margin-top: 8px;
  color: ${(p) => p.theme.colors.secondary};
`;

export default BlogPostsList;
