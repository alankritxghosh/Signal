import { Link } from 'react-router-dom';
import { WaitlistForm } from '@/app/components/WaitlistForm';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        background: 'var(--color-bg-tertiary)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Final CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-h2)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Ready for{' '}
            <span className="gradient-text">peace of mind</span>?
          </h2>
          <p 
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Join the waitlist today. No spam, just one email when we launch.
          </p>
          <WaitlistForm variant="footer" className="max-w-md mx-auto" />
        </div>
      </div>

      {/* Footer Links */}
      <div 
        className="py-8 px-6"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <svg 
                width="28" 
                height="21" 
                viewBox="0 0 64 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="footer-wave-blue" x1="0%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#4A6FA5"/>
                    <stop offset="100%" stopColor="#6B8DC5"/>
                  </linearGradient>
                  <linearGradient id="footer-wave-warm" x1="50%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4B896" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#E8D4BC" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
                {/* Blue wave (front) */}
                <path 
                  d="M2 44 Q12 44 20 28 Q28 12 32 12 Q36 12 40 24 Q44 36 54 42 L54 44 L2 44 Z" 
                  fill="url(#footer-wave-blue)"
                />
                {/* Warm wave (back) */}
                <path 
                  d="M20 44 Q28 44 34 30 Q40 16 44 16 Q48 16 52 26 Q56 36 62 40 L62 44 L20 44 Z" 
                  fill="url(#footer-wave-warm)"
                />
                {/* Peak dot */}
                <circle cx="32" cy="6" r="4" fill="#4A6FA5"/>
              </svg>
              <span 
                className="text-lg font-semibold"
                style={{ 
                  color: 'var(--color-text-primary)',
                  fontFamily: "'Inter', sans-serif", 
                  letterSpacing: '-0.02em' 
                }}
              >
                Signal
              </span>
            </div>
            
            {/* Links */}
            <nav className="flex items-center gap-8" aria-label="Footer navigation">
              <Link
                to="/blog"
                className="transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: 'var(--color-text-tertiary)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
              >
                Blog
              </Link>
              <FooterLink href="/privacy">Privacy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
              <FooterLink href="mailto:hello@signal.app">Contact</FooterLink>
              <FooterLink href="https://twitter.com/signalapp" external>Twitter</FooterLink>
            </nav>
            
            {/* Copyright */}
            <p 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: 'var(--color-text-muted)',
              }}
            >
              © {currentYear} Signal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ 
  href, 
  children, 
  external 
}: { 
  href: string; 
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a 
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="transition-colors"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        color: 'var(--color-text-tertiary)',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-tertiary)'}
    >
      {children}
    </a>
  );
}
