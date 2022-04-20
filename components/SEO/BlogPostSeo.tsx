import { NextSeo } from 'next-seo';
import { SerializedBlogPost } from 'types/blogPost';

type Props = {
  post: SerializedBlogPost;
};
const BlogPostSEO: React.FC<Props> = ({ post }) => {
  const url = `https://mahmoudalwadia.com/blog/${post.slug}`;

  return (
    <>
      <NextSeo
        title={post.metadata.title}
        description={post.metadata.description}
        canonical={url}
        openGraph={{
          title: post.metadata.title,
          url,
          description: post.metadata.description,
          images: [
            {
              url: post.metadata.ogImage,
              alt: post.metadata.title,
            },
          ],
          site_name: 'Mahmoud Alwadia',
          type: 'article',
          article: {
            publishedTime: post.metadata.date as unknown as string, // Since publishedTime needs to be string and post.date is a Date,
            authors: ['https://mahmoudalwadia.com'],
          },
        }}
        twitter={{
          handle: '@mah_alwadia',
          site: '@mah_alwadia',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export default BlogPostSEO;
