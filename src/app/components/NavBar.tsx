import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
  onWaitlistClick: () => void;
}

export function NavBar({ onWaitlistClick }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={isScrolled ? {
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), inset 0 -1px 0 rgba(255, 255, 255, 0.5)',
      } : {
        background: 'transparent',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group"
          aria-label="Signal - Home"
        >
          <svg 
            width="32" 
            height="24" 
            viewBox="0 0 64 48" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="transition-transform group-hover:scale-105"
          >
            <defs>
              <linearGradient id="nav-wave-blue" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#4A6FA5"/>
                <stop offset="100%" stopColor="#6B8DC5"/>
              </linearGradient>
              <linearGradient id="nav-wave-warm" x1="50%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4B896" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#E8D4BC" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            {/* Blue wave (front) */}
            <path 
              d="M2 44 Q12 44 20 28 Q28 12 32 12 Q36 12 40 24 Q44 36 54 42 L54 44 L2 44 Z" 
              fill="url(#nav-wave-blue)"
            />
            {/* Warm wave (back) */}
            <path 
              d="M20 44 Q28 44 34 30 Q40 16 44 16 Q48 16 52 26 Q56 36 62 40 L62 44 L20 44 Z" 
              fill="url(#nav-wave-warm)"
            />
            {/* Peak dot */}
            <circle cx="32" cy="6" r="4" fill="#4A6FA5"/>
          </svg>
          <span 
            className={`text-xl font-semibold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}
          >
            Signal
          </span>
        </Link>

        {/* Nav Links + CTA */}
        <div className="flex items-center gap-6">
          <Link
            to="/blog"
            className="hidden sm:inline-block transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
          >
            Blog
          </Link>

          {/* CTA Button */}
          <button
            type="button"
            onClick={onWaitlistClick}
            className="glow-button px-5 py-2.5 text-white font-medium text-sm rounded-xl transition-all hover:scale-105"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: 'var(--color-accent-gradient)',
            }}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
