import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Sökvägen till din content-mapp
const postsDirectory = path.join(process.cwd(), "content");

// Definiera en strikt typ för dina inlägg
export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
  category: "tech" | "running" | 'world'; // Lägg till fler kategorier här vid behov
}

/**
 * Hämtar metadata för alla MDX-filer i /content-mappen.
 * Sorterar dem efter datum (senaste först).
 */
export function getAllPostsMetadata(): PostMetadata[] {
  // Kontrollera om mappen finns för att undvika krasch vid build
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Content directory not found, creating an empty one...");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx")) // Säkerställ att vi bara läser MDX
    .map((fileName) => {
      // Skapa slug genom att ta bort filändelsen
      const slug = fileName.replace(/\.mdx$/, "");

      // Läs filens innehåll
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Använd gray-matter för att extrahera frontmatter
      const { data } = matter(fileContents);

      // Mappa data till vårt interface med fallback-värden
      return {
        slug,
        title: data.title || "Untitled Post",
        date: data.date || "2024-01-01",
        description: data.description || "",
        category: (data.category as "tech" | "running") || "tech",
      } as PostMetadata;
    });

  // Sortera inläggen efter datum (descending)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Hämtar specifikt innehåll för ett inlägg baserat på dess slug.
 */
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug "${slug}" not found at ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...data,
      slug,
    } as PostMetadata,
    content,
  };
}
