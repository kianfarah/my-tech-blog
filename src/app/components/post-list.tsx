import Link from "next/link";
import { formatDate, type PostMetadata } from "../../../lib/mdx";

/** kirahowe.com-style feed: posts grouped under a mono day heading. */
export function PostList({ posts }: { posts: PostMetadata[] }) {
  if (posts.length === 0) {
    return <p className="section text-muted">No posts yet.</p>;
  }

  const days = new Map<string, PostMetadata[]>();
  for (const post of posts) {
    days.set(post.date, [...(days.get(post.date) ?? []), post]);
  }

  return (
    <div>
      {[...days.entries()].map(([date, list]) => (
        <section key={date} className="day-group">
          <h2 className="label day-heading">
            <time dateTime={date}>{formatDate(date)}</time>
          </h2>
          {list.map((post) => (
            <article key={post.slug} className="entry">
              <h3 className="entry-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.description && (
                <p className="entry-excerpt">{post.description}</p>
              )}
              <div className="entry-foot">
                <Link href={`/blog/${post.slug}`}>
                  {post.readingTime} min read →
                </Link>
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`} className="tag">
                    #{tag}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
}
