import type { GetStaticProps, NextPage } from 'next';
import { BlogPostLayout } from '@components/Layouts';
import { getBlogPost, postFilePaths } from '@utils/mdx';
import { SerializedBlogPost } from 'types/blogPost';
import BlogPost from '@components/BlogPost';
import BlogPostSEO from '@components/SEO/BlogPostSeo';

type Props = {
  blogPost: SerializedBlogPost;
};
const BlogPostPage: NextPage<Props> = ({ blogPost }) => {
  return (
    <>
      <BlogPostSEO post={blogPost} />
      <BlogPostLayout>
        <BlogPost {...blogPost} />
      </BlogPostLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const blogPost = await getBlogPost(ctx);

  return {
    props: { blogPost },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path: string) => path.replace(/\.mdx?$/, ''))
    .map((slug: string) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
