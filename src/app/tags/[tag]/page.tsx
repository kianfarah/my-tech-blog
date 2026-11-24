import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostsMetadata, getAllTags } from "../../../../lib/mdx";
import { PostList } from "../../components/post-list";
import { Sidebar } from "../../components/sidebar";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  return { title: `#${tag} | Unoptimized` };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getAllPostsMetadata().filter((p) => p.tags.includes(tag));
  if (posts.length === 0) notFound();

  return (
    <div className="cols">
      <div className="main">
        <header className="page-header">
          <Link href="/tags" className="back">
            ← all tags
          </Link>
          <h1>
            <span>
              <span className="hash">#</span>
              {tag}
            </span>
            <span className="count">
              {posts.length} {posts.length === 1 ? "entry" : "entries"}
            </span>
          </h1>
        </header>
        <PostList posts={posts} />
      </div>
      <Sidebar />
    </div>
  );
}
