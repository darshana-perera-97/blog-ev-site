import { X } from 'lucide-react';

interface TagChipProps {
  label: string;
  selected?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
}

export const TagChip = ({ label, selected = false, onRemove, onClick }: TagChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 ${
        selected
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      <span>{label}</span>
      {onRemove && (
        <X
          className="w-3 h-3 hover:opacity-70"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}
    </button>
  );
};
