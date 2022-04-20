import prettier from 'prettier';
import fs from 'fs';
import getBlogPostList from '../utils/blogPost.mjs';

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettier.config.js');
  const blogPostsList = getBlogPostList();

  const blogPostsRoutes = blogPostsList.map((post) => `/blog/${post.slug}`);

  const routes = ['/', ...blogPostsRoutes];
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${routes
              .map(
                (route) => `
                        <url>
                            <loc>${`https://mahmoudalwadia.com${route}`}</loc>
                        </url>`
              )
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
