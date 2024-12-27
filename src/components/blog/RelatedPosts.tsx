import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/dateUtils';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/blog/${post.slug}`}>
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-40 object-cover"
              />
            </Link>
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</div>
              <h3 className="font-semibold mb-2">
                <Link 
                  to={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}