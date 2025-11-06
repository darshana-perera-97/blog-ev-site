import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'accent';
}

export const InfoCard = ({ icon: Icon, title, description, variant = 'default' }: InfoCardProps) => {
  return (
    <div
      className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
        variant === 'accent'
          ? 'bg-gradient-to-br from-[#DDEBFF]/30 to-[#BFEFEA]/30 border-[#DDEBFF]'
          : 'bg-card border-border'
      }`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        variant === 'accent'
          ? 'bg-gradient-to-br from-[#DDEBFF] to-[#BFEFEA]'
          : 'bg-secondary'
      }`}>
        <Icon className="w-6 h-6 text-foreground" />
      </div>
      <h4 className="mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
