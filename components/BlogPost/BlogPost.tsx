import MDX from '@components/MDX';
import { SerializedBlogPost } from 'types/blogPost';
import styled from '@emotion/styled';
import Typography from '@components/Typography';
import BlogPostMetaData from '@components/BlogPostMetaData';
import mediaQueries from '@styles/media';

const BlogPost: React.FC<SerializedBlogPost> = ({ source, metadata }) => {
  return (
    <ArticleWrapper>
      <HeroWrapper>
        <BlogPostMetaData
          date={metadata.date}
          timeToRead={metadata.readingTime.text}
          isAligned
        />
        <Title>{metadata.title}</Title>
      </HeroWrapper>
      <MDX source={source} />
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.article`
  padding: 0 16px;
  max-width: 600px;
  ${mediaQueries.md} {
    padding: 0;
  }
`;

const Title = styled(Typography.h1)`
  margin: 0;
  letter-spacing: -0.06em;
`;
const HeroWrapper = styled.div`
  padding: 40px 0px 12px 0;
  ${mediaQueries.md} {
    padding: 96px 0px 40px 0;
  }
`;

export default BlogPost;
