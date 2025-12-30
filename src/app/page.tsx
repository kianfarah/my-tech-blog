import { getAllPostsMetadata } from "../../lib/mdx";
import { BlogList } from "./components/blog-list";


export default function Home() {
  // Detta körs nu på servern vid build-time eller request-time
  const allPosts = getAllPostsMetadata();

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100">
          Unoptimized
        </h1>
        <p className="text-slate-400 max-w-6xl text-lg">
          Notes on backend systems, infrastructure, and endurance — written with
          a bias towards resilience, context, and long-term thinking.
        </p>
      </header>

      {/* Vi skickar datan från Servern till Klienten här */}
      <BlogList allPosts={allPosts} />
    </div>
  );
}
