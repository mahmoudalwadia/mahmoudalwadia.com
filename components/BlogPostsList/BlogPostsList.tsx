import Typography from '@components/Typography';
import styled from '@emotion/styled';
import Link from 'next/link';
import mediaQueries from '@styles/media';
import { BlogPost } from 'types/blogPost';
import BlogPostMetaData from '@components/BlogPostMetaData';
import { gTagEvent } from '@utils/gtag';

type Props = {
  blogPosts: BlogPost[];
};

const BlogPostsList: React.FC<Props> = ({ blogPosts }) => {
  const handleClick = (title: string) => {
    gTagEvent({
      action: 'Blog post link click',
      category: 'Link Click',
      label: title,
    });
  };
  return (
    <BlogPostsListWrapper>
      {blogPosts.map(({ metadata, slug }) => (
        <Link key={slug} href={`/blog/${slug}`} passHref>
          <BlogPostLink onClick={() => handleClick(metadata.title)}>
            <Title>{metadata.title}</Title>
            <Description>{metadata.description}</Description>
            <BlogPostMetaData
              date={metadata.date}
              timeToRead={metadata.readingTime.text}
            />
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
  &:first-of-type {
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
  margin: 0;
`;

const Description = styled(Typography.c1)`
  margin: 0;
  margin-top: 8px;
  color: ${(p) => p.theme.colors.secondary};
`;

export default BlogPostsList;
