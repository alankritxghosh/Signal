import { useEffect, useState, useCallback, useRef } from 'react';
import { WaitlistForm } from '@/app/components/WaitlistForm';

interface StickyFloatingCTAProps {
  onWaitlistClick?: () => void;
}

export function StickyFloatingCTA({ onWaitlistClick }: StickyFloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        // SSR safety check
        if (typeof window === 'undefined') return;
        
        const heroHeight = window.innerHeight;
        const scrolled = window.scrollY;
        
        // Show when hero section is 80% scrolled out of view
        setIsVisible(scrolled > heroHeight * 0.8);
        
        lastScrollY.current = scrolled;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    // SSR safety check
    if (typeof window === 'undefined') return;

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile: Bottom bar - Glass Effect */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-[1000] p-4 animate-fade-in"
        style={{
          background: 'rgba(255, 255, 255, 0.75)',
          borderTop: '1px solid rgba(255, 255, 255, 0.5)',
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        }}
        role="complementary"
        aria-label="Join waitlist"
      >
        <WaitlistForm variant="inline" />
      </div>
    </>
  );
}
