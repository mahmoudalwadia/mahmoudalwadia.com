const withMDX = require('@next/mdx')();

module.exports = withMDX({
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/default-og-image.jpg',
        destination:
          'https://mahmoud-personal-website-assets.s3.eu-central-1.amazonaws.com/mahmoudalwadia-default-og-image.jpg',
      },
    ];
  },
});
