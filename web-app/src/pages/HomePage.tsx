import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Zap, TrendingUp, BookOpen } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { InfoCard } from '../components/InfoCard';
import { Footer } from '../components/Footer';
import { mockBlogPosts } from '../data/mockData';

export const HomePage = () => {
  const featuredPost = mockBlogPosts[0];
  const latestPosts = mockBlogPosts.slice(1, 7);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DDEBFF]/20 via-background to-[#BFEFEA]/20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Your Source for EV Excellence</span>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Discover the Future of Electric Mobility
            </h1>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Expert reviews, industry insights, and comprehensive guides to help you navigate 
              the world of electric vehicles. Stay informed, stay charged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Explore Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => {
                  const modal = document.getElementById('newsletter-modal');
                  if (modal) modal.classList.remove('hidden');
                }}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-accent transition-colors inline-flex items-center justify-center gap-2"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center justify-between mb-8">
          <h2>Featured Article</h2>
          <Link
            to="/blog"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <BlogCard post={featuredPost} variant="featured" />
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={Battery}
            title="Expert Reviews"
            description="In-depth analysis of the latest electric vehicles"
            variant="accent"
          />
          <InfoCard
            icon={Zap}
            title="Tech Insights"
            description="Stay updated on EV technology and innovations"
          />
          <InfoCard
            icon={TrendingUp}
            title="Market Trends"
            description="Track the growth and evolution of the EV industry"
          />
          <InfoCard
            icon={BookOpen}
            title="Buying Guides"
            description="Make informed decisions with our comprehensive guides"
          />
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center justify-between mb-8">
          <h2>Latest Articles</h2>
          <Link
            to="/blog"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} variant="with-image" />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#DDEBFF]/30 to-[#BFEFEA]/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Stay Updated with EV Trends</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of EV enthusiasts and professionals who rely on ev.info 
              for the latest news, reviews, and insights.
            </p>
            <button
              onClick={() => {
                const modal = document.getElementById('newsletter-modal');
                if (modal) modal.classList.remove('hidden');
              }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Subscribe Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
