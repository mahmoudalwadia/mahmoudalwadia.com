/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  async redirects() {
    return [
      {
        source: '/a-hurtful-advancing-civilization',
        destination:
          'https://open.substack.com/pub/mahmoudalwadia/p/a-hurtful-advancing-civilization',
        permanent: true,
      },
      {
        source: '/blog/make-mobility-fun-and-sustainable',
        destination:
          'https://github.com/mahmoudalwadia/mahmoudalwadia.com/blob/c945e6f5ad12a963e0a41f7d5ea2fe733f4018da/data/posts/make-mobility-fun-and-sustainable.mdx',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
