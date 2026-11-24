import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getAllPostsMetadata, groupByYear } from "../../../lib/mdx";

export const metadata: Metadata = { title: "Archive",
  alternates: { canonical: "/archive" } };

export default function ArchivePage() {
  const posts = getAllPostsMetadata();
  const years = groupByYear(posts);

  return (
    <div>
      <header className="page-header">
        <h1>
          Archive
          <span className="count">
            {posts.length} {posts.length === 1 ? "entry" : "entries"}
          </span>
        </h1>
      </header>

      {years.map(([year, list]) => (
        <section key={year} id={year} className="section">
          <h2>
            {year} <span className="count label">{list.length}</span>
          </h2>
          {list.map((post) => (
            <div key={post.slug} className="index-row">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <time dateTime={post.date} className="meta">
                {formatDate(post.date, "short")}
              </time>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
