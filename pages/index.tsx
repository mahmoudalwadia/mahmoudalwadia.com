import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import SocialLinks from '@components/SocialLinks';
import BlogPostsList from '@components/BlogPostsList';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <SocialLinks />
      <BlogPostsList />
    </Layout>
  );
};

export default HomePage;
