import { X } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchOverlay = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    const overlay = document.getElementById('search-overlay');
    if (overlay) overlay.classList.add('hidden');
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery)}`);
      handleClose();
    }
  };

  return (
    <div
      id="search-overlay"
      className="hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
      onClick={handleClose}
    >
      <div className="min-h-screen flex flex-col items-center pt-32 px-4">
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-white mb-8 text-center">Search Articles</h2>
          <SearchBar
            variant="expanded"
            onSearch={handleSearch}
            placeholder="Type to search articles, reviews, and guides..."
          />

          {/* Quick Links */}
          <div className="mt-12">
            <p className="text-white/70 mb-4">Popular Topics</p>
            <div className="flex flex-wrap gap-3">
              {['Tesla', 'Battery Technology', 'Charging Infrastructure', 'EV Reviews', 'Sustainability'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleSearch(topic)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm border border-white/20"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
