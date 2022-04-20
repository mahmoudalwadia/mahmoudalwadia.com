import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { GetStaticPropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import type { BlogPostMetadata } from 'types/blogPost';

// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path.join(process.cwd(), 'data/posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

const sortByNewest = (a: Date, b: Date) => new Date(b).getTime() - new Date(a).getTime();

/**
 * Get blog posts lists from data/posts/[...].mdx
 * @returns {content,data}
 */
export const getBlogPostList = () =>
  postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        metadata: {
          ...data,
          readingTime: readingTime(content),
        } as BlogPostMetadata,
        slug: filePath.replace(/\.mdx?$/, ''),
      };
    })
    .sort((a, b) => sortByNewest(a.metadata.date, b.metadata.date));

//

/**
 * Get blog post from data/posts/[slug].mdx
 * @param ctx
 * @returns {source,data}
 */
export const getBlogPost = async (ctx: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  const { serialize } = await import('next-mdx-remote/serialize');
  const slug = ctx?.params?.slug;

  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    source: mdxSource,
    metadata: {
      ...data,
      readingTime: readingTime(content),
    },
    slug,
  };
};
