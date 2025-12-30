
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "./highlight-theme.css";
import { getPostBySlug } from "../../../../lib/mdx";
import { Pre } from "@/app/components/mdx/code-block";

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

  return (
    <article className="prose prose-invert prose-slate max-w-none prose-pre:bg-transparent">
      <header className="mb-8 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-100">
          {metadata.title}
        </h1>
        <p className="text-slate-400">{metadata.date}</p>
      </header>

      <div className="mt-8">
        {mdxContent}
      </div>
    </article>
  );
}
