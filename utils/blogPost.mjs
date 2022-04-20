/**
 * We Need this fill for sitemap/rss generation
 *
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path.join(process.cwd(), 'data/posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

const sortByNewest = (a, b) => new Date(b).getTime() - new Date(a).getTime();

/**
 * Get blog posts lists from data/posts/[...].mdx
 * @returns {content,data}
 */
const getBlogPostList = () =>
  postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        metadata: data,
        slug: filePath.replace(/\.mdx?$/, ''),
      };
    })
    .sort((a, b) => sortByNewest(a.metadata.date, b.metadata.date));

export default getBlogPostList;
