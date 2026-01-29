interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  'aria-label'?: string;
}

export function CTAButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  size = 'default',
  'aria-label': ariaLabel,
}: CTAButtonProps) {
  const isPrimary = variant === 'primary';
  const isLarge = size === 'large';
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={`glow-button ${className}`}
      aria-label={ariaLabel}
      style={{
        background: isPrimary 
          ? 'var(--color-accent-gradient)' 
          : 'rgba(255, 255, 255, 0.05)',
        padding: isLarge ? '18px 48px' : '14px 32px',
        borderRadius: '12px',
        fontSize: isLarge ? '17px' : '15px',
        fontWeight: 500,
        fontFamily: "'Inter', sans-serif",
        color: 'white',
        border: isPrimary ? 'none' : '1px solid var(--color-border)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        boxShadow: isPrimary 
          ? '0 0 30px rgba(99, 102, 241, 0.3)' 
          : 'none',
        minWidth: '44px',
        minHeight: '44px',
        letterSpacing: '-0.01em'
      }}
    >
      {children}
    </button>
  );
}