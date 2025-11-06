import { Search, X, SlidersHorizontal } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

interface SearchBarProps {
  variant?: 'default' | 'expanded' | 'filter';
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ 
  variant = 'default', 
  onSearch,
  placeholder = 'Search articles...'
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  if (variant === 'expanded') {
    return (
      <div className="w-full max-w-3xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder={placeholder}
            className="pl-12 pr-12 py-6 border-2 rounded-xl"
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'filter') {
    return (
      <div className="w-full">
        <div className="relative flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder={placeholder}
              className="pl-12 rounded-xl"
            />
          </div>
          <Button
            variant={showFilters ? 'default' : 'secondary'}
            onClick={() => setShowFilters(!showFilters)}
            className="rounded-xl px-4"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </Button>
        </div>
        {showFilters && (
          <div className="mt-4 p-4 bg-secondary/50 rounded-xl border border-border">
            <p className="text-muted-foreground">Filter options would go here</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder={placeholder}
        className="pl-10 pr-10 rounded-lg"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
