import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ReadTimeResults } from 'reading-time';

export type BlogPostMetadata = {
  title: string;
  description: string;
  date: Date;
  readingTime: ReadTimeResults;
  ogImage: string;
};
export type SerializedBlogPost = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  metadata: BlogPostMetadata;
  slug: string;
};
export type BlogPost = {
  content: string;
  metadata: BlogPostMetadata;
  slug: string;
};
