import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export function GlassCard({ children, className = '', variant = 'dark' }: GlassCardProps) {
  const isDark = variant === 'dark';
  
  return (
    <div 
      className={`glass-card ${className}`}
      style={{
        background: isDark 
          ? 'rgba(17, 17, 24, 0.85)' 
          : 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: isDark 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: isDark 
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(99, 102, 241, 0.05)' 
          : '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        transition: 'all var(--transition-base)'
      }}
    >
      {children}
    </div>
  );
}