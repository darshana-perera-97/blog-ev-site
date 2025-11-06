import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern">
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-8">
          <div className="inline-flex w-24 h-24 bg-gradient-to-br from-[#DDEBFF] to-[#BFEFEA] rounded-full items-center justify-center mb-6">
            <span className="text-foreground">⚡</span>
          </div>
          <h1 className="mb-4">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! It seems like you've taken a wrong turn. The page you're looking for 
            doesn't exist or has been moved to a new location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="rounded-lg">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </Link>
          <Link to="/blog">
            <Button variant="secondary" className="rounded-lg">
              <Search className="w-4 h-4 mr-2" />
              Browse Articles
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <button
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back to previous page
          </button>
        </div>

        {/* Popular Links */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">You might be interested in:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/" className="text-primary hover:underline">
              Home
            </Link>
            <Link to="/blog" className="text-primary hover:underline">
              Blog
            </Link>
            <Link to="/about" className="text-primary hover:underline">
              About
            </Link>
            <Link to="/contact" className="text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
