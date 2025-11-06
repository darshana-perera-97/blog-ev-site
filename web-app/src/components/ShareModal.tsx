import { X, Facebook, Twitter, Linkedin, Link as LinkIcon, Mail } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ShareModalProps {
  title: string;
  url: string;
}

export const ShareModal = ({ title, url }: ShareModalProps) => {
  const handleClose = () => {
    const modal = document.getElementById('share-modal');
    if (modal) modal.classList.add('hidden');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard!');
  };

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:bg-blue-50 dark:hover:bg-blue-950',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'hover:bg-sky-50 dark:hover:bg-sky-950',
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank'),
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'hover:bg-blue-50 dark:hover:bg-blue-950',
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'hover:bg-gray-50 dark:hover:bg-gray-800',
      action: () => window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div
      id="share-modal"
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

        <h3 className="mb-6">Share this article</h3>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={option.action}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-border transition-colors ${option.color}`}
            >
              <option.icon className="w-6 h-6" />
              <span className="text-muted-foreground">{option.name}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            type="text"
            value={url}
            readOnly
            className="flex-1 bg-secondary rounded-lg"
          />
          <Button
            onClick={copyToClipboard}
            variant="secondary"
            className="rounded-lg px-4"
          >
            <LinkIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`px-3 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-ring ${className}`}
    {...props}
  />
);

const Button = ({ 
  children, 
  variant = 'default', 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'secondary' }) => (
  <button
    className={`px-4 py-2 transition-colors ${
      variant === 'secondary' 
        ? 'bg-secondary hover:bg-accent' 
        : 'bg-primary text-primary-foreground hover:opacity-90'
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);
