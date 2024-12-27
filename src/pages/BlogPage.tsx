import React, { useEffect, useState } from 'react';
import BlogList from '../components/blog/BlogList';
import { getBlogPosts } from '../services/blogService';
import { BlogPost } from '../types/blog';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Restoration Tips & Insights
        </h1>
        <BlogList posts={posts} />
      </div>
    </div>
  );
}