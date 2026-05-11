import postsData from '@/data/posts.json';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  image2?: string;
  affiliateUrl: string;       // Works with any affiliate program
  ctaLabel?: string;          // e.g. "Shop on Etsy", "Check Price", "View on ASOS"
  intro: string;
  benefits: string[];
  whyThis?: string;
  ctaHeadline?: string;
  contentHtml?: string; 
}

export async function getAllPosts(): Promise<Post[]> {
  return postsData as Post[];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = postsData as Post[];
  return posts.find((p) => p.slug === slug) || null;
}
