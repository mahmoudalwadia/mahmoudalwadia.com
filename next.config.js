module.exports = {
  reactStrictMode: true,
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  images: {
    domains: ['mahmoud-personal-website-assets.s3.eu-central-1.amazonaws.com'],
  },
  rewrites: async () => {
    return [
      {
        source: '/default-og-image.jpg',
        destination:
          'https://mahmoud-personal-website-assets.s3.eu-central-1.amazonaws.com/mahmoudalwadia-default-og-image.jpg',
      },
    ];
  },
};
