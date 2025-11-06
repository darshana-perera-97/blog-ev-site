import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Share2, ChevronLeft } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { AuthorBox } from '../components/AuthorBox';
import { BlogCard } from '../components/BlogCard';
import { Footer } from '../components/Footer';
import { ShareModal } from '../components/ShareModal';
import { mockBlogPosts } from '../data/mockData';

export const SingleBlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = mockBlogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Article not found</h2>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = mockBlogPosts
    .filter((p) => p.id !== id && p.category === post.category)
    .slice(0, 3);

  const handleShare = () => {
    const modal = document.getElementById('share-modal');
    if (modal) modal.classList.remove('hidden');
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.publishedDate}
            </span>
            <span className="text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mb-6">{post.title}</h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-foreground">{post.author.name}</p>
                <p className="text-muted-foreground">Author</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="px-4 py-2 bg-secondary hover:bg-accent rounded-lg transition-colors flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground">{post.excerpt}</p>

          <h2>Introduction</h2>
          <p>
            The electric vehicle landscape is evolving at an unprecedented pace. With 
            advancements in battery technology, charging infrastructure, and vehicle design, 
            the future of transportation is becoming clearer every day. This comprehensive 
            analysis explores the key developments shaping the EV industry.
          </p>

          <h2>Key Developments</h2>
          <p>
            Recent innovations have addressed many of the early concerns about electric 
            vehicles. From extended range capabilities to faster charging times, manufacturers 
            are pushing the boundaries of what's possible. The introduction of solid-state 
            batteries promises even greater improvements in the near future.
          </p>

          <h3>Battery Technology</h3>
          <p>
            Modern lithium-ion batteries have become more efficient and affordable. New 
            chemistries and manufacturing processes are reducing costs while improving 
            performance. The transition to solid-state batteries could revolutionize the 
            industry, offering higher energy density and improved safety.
          </p>

          <h3>Charging Infrastructure</h3>
          <p>
            The expansion of charging networks has been crucial to EV adoption. Fast-charging 
            stations are becoming more prevalent, and new ultra-fast charging technology can 
            add hundreds of miles of range in minutes. Home charging solutions continue to 
            improve, making overnight charging more convenient than ever.
          </p>

          <h2>Market Impact</h2>
          <p>
            The automotive market is experiencing a fundamental shift. Traditional manufacturers 
            are investing billions in EV development, while new entrants are challenging 
            established norms. Consumer acceptance is growing rapidly as vehicles become more 
            practical and affordable.
          </p>

          <h2>Conclusion</h2>
          <p>
            As we look ahead, the electric vehicle revolution shows no signs of slowing down. 
            Continued innovation, supportive policies, and growing environmental awareness are 
            driving the transition to sustainable transportation. The future is electric, and 
            it's arriving faster than many predicted.
          </p>
        </div>

        {/* Tags */}
        <div className="mb-12 pb-12 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Box */}
        <AuthorBox
          author={{
            name: post.author.name,
            avatar: post.author.avatar,
            bio: 'Passionate about electric vehicles and sustainable transportation. Covering the latest developments in EV technology and market trends.',
            email: 'author@ev.info',
            social: {
              linkedin: 'https://linkedin.com',
              twitter: 'https://twitter.com',
            },
          }}
        />
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-secondary/30 border-y border-border py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} variant="with-image" />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <ShareModal title={post.title} url={window.location.href} />
    </div>
  );
};
