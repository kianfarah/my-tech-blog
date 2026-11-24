import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "./highlight-theme.css";
import {
  formatDate,
  getAllPostsMetadata,
  getPostBySlug,
} from "../../../../lib/mdx";
import { Pre } from "@/app/components/mdx/code-block";

export function generateStaticParams() {
  return getAllPostsMetadata().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await getPostBySlug(slug);
  return {
    title: `${metadata.title} | Unoptimized`,
    description: metadata.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, content } = await getPostBySlug(slug);

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: { pre: Pre },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
  });

  // Posts are sorted newest first: "newer" is the one before, "older" after.
  const posts = getAllPostsMetadata();
  const index = posts.findIndex((p) => p.slug === slug);
  const newer = index > 0 ? posts[index - 1] : undefined;
  const older = index >= 0 ? posts[index + 1] : undefined;

  return (
    <article className="article">
      <header className="article-header">
        <h1>{metadata.title}</h1>
        <div className="article-meta">
          <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
          <span>{metadata.readingTime} min read</span>
          {metadata.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} className="tag">
              #{tag}
            </Link>
          ))}
        </div>
      </header>

      <div className="prose">{mdxContent}</div>

      {(newer || older) && (
        <nav className="post-footer">
          {older ? (
            <Link href={`/blog/${older.slug}`}>
              <span className="label">← Older</span>
              <span className="t">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/blog/${newer.slug}`} className="text-right">
              <span className="label">Newer →</span>
              <span className="t">{newer.title}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
