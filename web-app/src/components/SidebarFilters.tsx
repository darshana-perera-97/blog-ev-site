import { TagChip } from './TagChip';
import { Separator } from './ui/separator';

interface SidebarFiltersProps {
  selectedCategories: string[];
  selectedTags: string[];
  onCategoryToggle: (category: string) => void;
  onTagToggle: (tag: string) => void;
}

const categories = [
  'Reviews',
  'News',
  'Technology',
  'Guides',
  'Charging',
  'Policy',
];

const tags = [
  'Tesla',
  'Rivian',
  'Ford',
  'GM',
  'Battery Tech',
  'Charging Infrastructure',
  'Sustainability',
  'Autonomous Driving',
];

const postTypes = [
  'Articles',
  'Video Reviews',
  'Comparisons',
  'Buying Guides',
];

export const SidebarFilters = ({
  selectedCategories,
  selectedTags,
  onCategoryToggle,
  onTagToggle,
}: SidebarFiltersProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="mb-4">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryToggle(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Tags */}
        <div>
          <h4 className="mb-4">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagChip
                key={tag}
                label={tag}
                selected={selectedTags.includes(tag)}
                onClick={() => onTagToggle(tag)}
              />
            ))}
          </div>
        </div>

        <Separator />

        {/* Post Types */}
        <div>
          <h4 className="mb-4">Content Type</h4>
          <div className="space-y-2">
            {postTypes.map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
