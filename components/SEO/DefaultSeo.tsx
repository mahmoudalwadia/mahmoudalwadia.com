import { DefaultSeo } from 'next-seo';

const config = {
  title: 'Mahmoud Alwaida - Software Engineer',
  description: 'I’m a software engineer who likes to create great products.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mahmoudalwadia.com/',
    site_name: 'Mahmoud Alwadia',
    images: [
      {
        url: 'https://mahmoudalwadia.com/default-og-image.jpg',
        alt: 'Mahmoud Alwadia',
      },
    ],
  },
  twitter: {
    handle: '@mah_alwadia',
    site: '@mah_alwadia',
    cardType: 'summary_large_image',
  },
};

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />;
};

export default SEO;
