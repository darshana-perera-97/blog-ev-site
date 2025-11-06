import { Mail, Linkedin, Twitter } from 'lucide-react';

interface AuthorBoxProps {
  author: {
    name: string;
    avatar: string;
    bio: string;
    email?: string;
    social?: {
      linkedin?: string;
      twitter?: string;
    };
  };
}

export const AuthorBox = ({ author }: AuthorBoxProps) => {
  return (
    <div className="bg-secondary/30 rounded-xl p-6 border border-border">
      <div className="flex items-start gap-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <h4 className="mb-2">About {author.name}</h4>
          <p className="text-muted-foreground mb-4">{author.bio}</p>
          <div className="flex items-center gap-3">
            {author.email && (
              <a
                href={`mailto:${author.email}`}
                className="w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {author.social?.linkedin && (
              <a
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {author.social?.twitter && (
              <a
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
