import { useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { SidebarFilters } from '../components/SidebarFilters';
import { SearchBar } from '../components/SearchBar';
import { Footer } from '../components/Footer';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/ui/pagination';
import { mockBlogPosts } from '../data/mockData';

export const BlogListingPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter posts based on selected categories and tags
  const filteredPosts = mockBlogPosts.filter((post) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(post.category);
    const tagMatch =
      selectedTags.length === 0 ||
      post.tags.some((tag) => selectedTags.includes(tag));
    return categoryMatch && tagMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#DDEBFF]/20 to-[#BFEFEA]/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="mb-4">EV Blog & News</h1>
            <p className="text-muted-foreground mb-8">
              Explore our comprehensive collection of articles, reviews, and guides 
              covering everything about electric vehicles.
            </p>
            <SearchBar variant="filter" placeholder="Search articles..." />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block">
            <SidebarFilters
              selectedCategories={selectedCategories}
              selectedTags={selectedTags}
              onCategoryToggle={handleCategoryToggle}
              onTagToggle={handleTagToggle}
            />
          </aside>

          {/* Blog Grid */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, filteredPosts.length)} of {filteredPosts.length} articles
              </p>
              {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedTags([]);
                  }}
                  className="text-primary hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="with-image" />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
