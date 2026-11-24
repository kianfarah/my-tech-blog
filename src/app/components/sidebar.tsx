import Link from "next/link";
import {
  getAllPostsMetadata,
  getAllTags,
  groupByYear,
} from "../../../lib/mdx";

export function Sidebar() {
  const posts = getAllPostsMetadata();
  const years = groupByYear(posts);
  const tags = getAllTags(posts);

  return (
    <aside className="sidebar">
      <section className="side">
        <h2 className="label">About</h2>
        <p>
          Notes on backend systems, infrastructure, and endurance — written
          with a bias towards resilience, context, and long-term thinking.
        </p>
        <p>
          <Link href="/about">More about me →</Link>
        </p>
      </section>

      <section className="side">
        <h2 className="label">Years</h2>
        <ul className="tag-list">
          {years.map(([year, list]) => (
            <li key={year}>
              <Link href={`/archive#${year}`}>{year}</Link> {list.length}
            </li>
          ))}
        </ul>
      </section>

      <section className="side">
        <h2 className="label">Tags</h2>
        <ul className="tag-list">
          {tags.map(({ tag, count }) => (
            <li key={tag}>
              <Link href={`/tags/${tag}`}>#{tag}</Link> {count}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
