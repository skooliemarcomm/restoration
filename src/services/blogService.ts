import { BlogPost } from '../types/blog';
import { blogPosts } from '../data/blogPosts';

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return blogPosts;
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return blogPosts.find(post => post.slug === slug) || null;
};

export const getRelatedPosts = async (currentPost: BlogPost): Promise<BlogPost[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return blogPosts
    .filter(post => 
      post.slug !== currentPost.slug && 
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, 3);
};