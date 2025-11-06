import { X, Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export const NewsletterModal = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    const modal = document.getElementById('newsletter-modal');
    if (modal) modal.classList.add('hidden');
  };

  const handleClose = () => {
    const modal = document.getElementById('newsletter-modal');
    if (modal) modal.classList.add('hidden');
  };

  return (
    <div
      id="newsletter-modal"
      className="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-card rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#DDEBFF] to-[#BFEFEA] rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-[#1E1E1E]" />
          </div>
          <h2 className="mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground">
            Get the latest EV news, reviews, and insights delivered to your inbox weekly.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              className="rounded-lg"
            />
          </div>
          <Button
            onClick={handleSubscribe}
            className="w-full rounded-lg"
          >
            Subscribe Now
          </Button>
          <p className="text-muted-foreground text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};
