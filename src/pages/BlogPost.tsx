import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogPost, getRelatedPosts } from '../services/blogService';
import { BlogPost as BlogPostType } from '../types/blog';
import RelatedPosts from '../components/blog/RelatedPosts';
import { formatDate } from '../utils/dateUtils';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        const postData = await getBlogPost(slug);
        if (!postData) {
          navigate('/blog', { replace: true });
          return;
        }
        
        setPost(postData);
        const related = await getRelatedPosts(postData);
        setRelatedPosts(related);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="text-primary hover:text-accent mb-8 inline-block">
          ← Back to Blog
        </Link>
        <article>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <div className="prose max-w-none">
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 mb-8">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
        
        <RelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
}