import { Sparkles, Brain, Shield, Zap, Search } from 'lucide-react';

interface FeatureCardProps {
  icon: 'sparkles' | 'brain' | 'shield' | 'zap' | 'search';
  title: string;
  description: string;
  comingSoon?: boolean;
  size?: 'regular' | 'large' | 'tall' | 'wide';
}

const icons = {
  sparkles: Sparkles,
  brain: Brain,
  shield: Shield,
  zap: Zap,
  search: Search
};

export function FeatureCard({ icon, title, description, comingSoon = true, size = 'regular' }: FeatureCardProps) {
  const Icon = icons[icon];
  
  const isLarge = size === 'large';
  const isTall = size === 'tall';
  const isWide = size === 'wide';
  
  // Grid span classes based on size
  const sizeClasses = {
    regular: '',
    large: 'md:col-span-2 md:row-span-2',
    tall: 'md:row-span-2',
    wide: 'md:col-span-2',
  };
  
  return (
    <div 
      className={`feature-card relative group ${sizeClasses[size]}`}
      style={{
        padding: isLarge ? '32px' : '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isTall ? 'space-between' : 'flex-start',
      }}
    >
      {/* Gradient overlay for large card */}
      {isLarge && (
        <div 
          className="absolute inset-0 rounded-[20px] opacity-[0.03]"
          style={{
            background: 'var(--color-accent-gradient)',
            pointerEvents: 'none',
          }}
        />
      )}
      
      {/* Coming Soon Badge - Glass Effect */}
      {comingSoon && (
        <span 
          className="glass-badge absolute top-4 right-4 px-2.5 py-1 text-[10px] font-medium"
          style={{
            background: 'rgba(74, 111, 165, 0.12)',
            color: 'var(--color-accent-primary)',
            border: '1px solid rgba(74, 111, 165, 0.15)',
            fontFamily: "'Inter', sans-serif",
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          }}
        >
          Coming Soon
        </span>
      )}
      
      <div className="relative z-10">
        {/* Icon with Glass Effect */}
        <div 
          className={`glass-icon-accent rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${isLarge ? 'w-16 h-16 mb-6' : 'w-12 h-12 mb-5'}`}
          style={{
            background: `linear-gradient(135deg, rgba(74, 111, 165, 0.9) 0%, rgba(91, 125, 181, 0.85) 50%, rgba(107, 141, 197, 0.9) 100%)`,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: isLarge 
              ? '0 8px 30px rgba(74, 111, 165, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
              : '0 4px 20px rgba(74, 111, 165, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
        >
          <Icon 
            size={isLarge ? 28 : 22} 
            strokeWidth={2}
            className="text-white"
            aria-hidden="true"
          />
        </div>
        <h3 
          className={isLarge ? 'mb-4' : 'mb-3'}
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: isLarge ? '24px' : '18px',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            lineHeight: 1.3,
            letterSpacing: '-0.01em'
          }}
        >
          {title}
        </h3>
        <p 
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isLarge ? '16px' : '14px',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
            margin: 0
          }}
        >
          {description}
        </p>
      </div>
      
      {/* Visual element for tall card - Glass Effect */}
      {isTall && (
        <div 
          className="mt-6 rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            padding: '16px',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.7)',
          }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: '0 0 8px rgba(34, 197, 94, 0.4)' }} />
              <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontFamily: "'Inter', sans-serif" }}>
                3 important emails surfaced
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)' }} />
              <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontFamily: "'Inter', sans-serif" }}>
                47 newsletters archived
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" style={{ boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)' }} />
              <span style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontFamily: "'Inter', sans-serif" }}>
                2 follow-ups flagged
              </span>
            </div>
          </div>
        </div>
      )}
      
      {/* Visual decoration for large card - Glass Effect */}
      {isLarge && (
        <div 
          className="mt-8 rounded-xl p-4"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.7)',
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ 
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <Brain className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)', fontFamily: "'Inter', sans-serif" }}>
                Pattern detected
              </p>
              <p style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: "'Inter', sans-serif" }}>
                You always read emails from Sarah first
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ 
                background: 'rgba(59, 130, 246, 0.12)',
                border: '1px solid rgba(59, 130, 246, 0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)', fontFamily: "'Inter', sans-serif" }}>
                Learning in progress
              </p>
              <p style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontFamily: "'Inter', sans-serif" }}>
                Analyzing your response patterns...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}