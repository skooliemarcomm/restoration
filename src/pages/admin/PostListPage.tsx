import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { getBlogPosts } from '../../services/blogService';
import { formatDate } from '../../utils/dateUtils';

export default function PostListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Blog Posts</h1>
          <Link
            to="/admin/posts/new"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
          >
            New Post
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {post.title}
                      </h3>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate">By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Link
                        to={`/admin/posts/${post.id}/edit`}
                        className="text-primary hover:text-primary-dark"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this post?')) {
                            // Handle delete
                          }
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}