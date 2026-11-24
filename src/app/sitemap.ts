import type { MetadataRoute } from "next";
import { getAllPostsMetadata, getAllTags } from "../../lib/mdx";

const siteUrl = "https://isakfarah.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMetadata();
  const latest = posts[0]?.date;

  return [
    { url: siteUrl, lastModified: latest },
    { url: `${siteUrl}/about` },
    { url: `${siteUrl}/archive`, lastModified: latest },
    { url: `${siteUrl}/tags`, lastModified: latest },
    ...getAllTags(posts).map(({ tag }) => ({ url: `${siteUrl}/tags/${tag}` })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
