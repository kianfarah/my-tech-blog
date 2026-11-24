import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export type Category = "tech" | "running" | "world";

export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
  category: Category;
  /** Optional `tags: [...]` in frontmatter; falls back to the category. */
  tags: string[];
  readingTime: number;
}

const WORDS_PER_MINUTE = 220;

function readingTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toMetadata(
  slug: string,
  data: Record<string, unknown>,
  content: string
): PostMetadata {
  const category = ((data.category as Category) || "tech") as Category;
  const tags = Array.isArray(data.tags)
    ? (data.tags as unknown[]).map((t) => String(t).toLowerCase())
    : [category];

  return {
    slug,
    title: (data.title as string) || "Untitled Post",
    date: (data.date as string) || "2024-01-01",
    description: (data.description as string) || "",
    category,
    tags,
    readingTime: readingTime(content),
  };
}

/** All posts in /content, newest first. */
export function getAllPostsMetadata(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const { data, content } = matter(raw);
      return toMetadata(slug, data, content);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug "${slug}" not found at ${fullPath}`);
  }

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return { metadata: toMetadata(slug, data, content), content };
}

/** Tag → number of posts, sorted by count then name. */
export function getAllTags(posts = getAllPostsMetadata()) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Posts grouped by year, newest year first. */
export function groupByYear(posts: PostMetadata[]) {
  const groups = new Map<string, PostMetadata[]>();
  for (const post of posts) {
    const year = post.date.slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups.entries()];
}

/** Dates are stored as YYYY-MM-DD; format in UTC so they don't shift a day. */
export function formatDate(date: string, style: "long" | "short" = "long") {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: style === "long" ? "numeric" : undefined,
    month: style === "long" ? "long" : "short",
    day: "numeric",
  });
}
