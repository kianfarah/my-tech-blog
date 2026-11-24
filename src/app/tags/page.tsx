import Link from "next/link";
import type { Metadata } from "next";
import { getAllTags } from "../../../lib/mdx";

export const metadata: Metadata = { title: "Tags",
  alternates: { canonical: "/tags" } };

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div>
      <header className="page-header">
        <h1>
          Tags
          <span className="count">{tags.length} topics</span>
        </h1>
      </header>
      <div className="section">
        {tags.map(({ tag, count }) => (
          <div key={tag} className="index-row">
            <Link href={`/tags/${tag}`} className="tag">
              #{tag}
            </Link>
            <span className="meta">
              {count} {count === 1 ? "post" : "posts"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
