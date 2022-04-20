import { GetStaticProps, NextPage } from 'next';
import { getBlogPostList } from '@utils/mdx';
import HomeLayout from '@components/Layouts/HomeLayout';
import Hero from '@components/Hero';
import SocialLinks from '@components/SocialLinks';
import BlogPostsList from '@components/BlogPostsList';
import DefaultSeo from '@components/SEO/DefaultSeo';
import { BlogPost } from 'types/blogPost';

type Props = {
  posts: BlogPost[];
};

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <DefaultSeo />
      <HomeLayout>
        <Hero />
        <SocialLinks />
        <BlogPostsList blogPosts={posts} />
      </HomeLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getBlogPostList();

  return { props: { posts } };
};

export default HomePage;
