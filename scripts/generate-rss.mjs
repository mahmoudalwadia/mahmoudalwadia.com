import { writeFileSync } from 'fs';
import RSS from 'rss';
import getBlogPostList from '../utils/blogPost.mjs';

async function generate() {
  const blogPostsList = getBlogPostList();
  const feed = new RSS({
    title: 'Mahmoud Alwadia',
    site_url: 'https://mahmoudalwadia.com',
    feed_url: 'https://mahmoudalwadia.com/feed.xml',
  });

  blogPostsList.forEach(({ metadata, slug }) => {
    feed.item({
      title: metadata.title,
      url: `https://mahmoudalwadia.com/blog/${slug}`,
      date: metadata.date,
      description: metadata.description,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
