import { getAllPostsMetadata } from "../../lib/mdx";
import { PostList } from "./components/post-list";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  const posts = getAllPostsMetadata();

  return (
    <div className="cols">
      <div className="main">
        <header className="page-header">
          <h1>
            Posts
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
