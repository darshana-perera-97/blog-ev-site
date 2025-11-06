import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  variant?: 'full' | 'minimal';
}

export const Footer = ({ variant = 'full' }: FooterProps) => {
  if (variant === 'minimal') {
    return (
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2025 ev.info. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#DDEBFF] to-[#BFEFEA] rounded-lg flex items-center justify-center">
                <span className="text-[#1E1E1E]">⚡</span>
              </div>
              <span className="tracking-tight">ev.info</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Your trusted source for electric vehicle news, reviews, and insights. 
              Join us in the journey towards sustainable transportation.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog?category=reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog?category=news" className="text-muted-foreground hover:text-foreground transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/blog?category=technology" className="text-muted-foreground hover:text-foreground transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/blog?category=guides" className="text-muted-foreground hover:text-foreground transition-colors">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get the latest EV news and updates.
            </p>
            <button
              onClick={() => {
                const modal = document.getElementById('newsletter-modal');
                if (modal) modal.classList.remove('hidden');
              }}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2025 ev.info. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
