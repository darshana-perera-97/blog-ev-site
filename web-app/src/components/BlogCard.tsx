import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  image?: string;
  publishedDate: string;
  readTime: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'with-image' | 'featured';
}

export const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  if (variant === 'featured') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {post.image && (
            <div className="relative h-64 md:h-full overflow-hidden bg-secondary">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-accent text-accent-foreground">Featured</Badge>
              </div>
            </div>
          )}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h2 className="mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-foreground">{post.author.name}</p>
                  <p className="text-muted-foreground">{post.publishedDate}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'with-image') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
      >
        {post.image && (
          <div className="relative h-48 overflow-hidden bg-secondary">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-foreground">{post.author.name}</p>
              <p className="text-muted-foreground">{post.publishedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="secondary">{post.category}</Badge>
        <span className="text-muted-foreground flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {post.readTime}
        </span>
      </div>
      <h3 className="mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-foreground">{post.author.name}</p>
            <p className="text-muted-foreground">{post.publishedDate}</p>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
