import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/dateUtils';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500"
        />
      </Link>
      <div className="p-6">
        <div className="flex gap-2 mb-2">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          {formatDate(post.date)}
        </div>
        <h2 className="text-xl font-semibold mb-2">
          <Link 
            to={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </span>
          <Link 
            to={`/blog/${post.slug}`}
            className="flex items-center text-primary font-semibold hover:text-accent transition-colors group"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}