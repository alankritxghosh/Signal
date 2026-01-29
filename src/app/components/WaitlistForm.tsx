import { useState, FormEvent } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { addToWaitlist } from '@/lib/supabase';

interface WaitlistFormProps {
  variant?: 'hero' | 'inline' | 'footer';
  className?: string;
}

export function WaitlistForm({ variant = 'hero', className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      const result = await addToWaitlist({
        email,
        source: 'website',
      });

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`animate-scale-in ${className}`}>
        <div 
          className="flex items-center gap-3 px-6 py-4 rounded-2xl"
          style={{
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
          }}
        >
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(34, 197, 94, 0.2)' }}
          >
            <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
          </div>
          <div>
            <p 
              className="font-medium"
              style={{ fontFamily: "'Inter', sans-serif", color: 'var(--color-text-primary)' }}
            >
              You're on the list!
            </p>
            <p 
              className="text-sm"
              style={{ color: 'var(--color-text-secondary)', fontFamily: "'Inter', sans-serif" }}
            >
              We'll email you when Signal is ready.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const isHero = variant === 'hero';
  const isInline = variant === 'inline';

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`${className}`}
      aria-label="Join waitlist form"
    >
      <div 
        className={`flex ${isHero ? 'flex-col sm:flex-row' : 'flex-row'} gap-3`}
      >
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="you@company.com"
            aria-label="Email address"
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? 'email-error' : undefined}
            className={`${isHero ? 'input-hero' : 'input-light'} w-full ${isHero ? 'px-5 py-4 text-base' : 'px-4 py-3 text-sm'}`}
            style={{
              fontFamily: "'Inter', sans-serif",
              borderColor: status === 'error' ? 'rgba(239, 68, 68, 0.5)' : undefined,
            }}
            disabled={status === 'loading'}
          />
          {status === 'error' && (
            <p 
              id="email-error"
              className="absolute -bottom-6 left-0 text-xs text-red-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
              role="alert"
            >
              {errorMessage}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`glow-button flex items-center justify-center gap-2 font-medium text-white rounded-xl transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 ${
            isHero ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
          }`}
          style={{
            fontFamily: "'Inter', sans-serif",
            background: 'var(--color-accent-gradient)',
            minWidth: isInline ? '140px' : '180px',
          }}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>Join Waitlist</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      
      {isHero && (
        <p 
          className="mt-4 text-center sm:text-left"
          style={{ 
            color: 'var(--color-text-on-hero-secondary)', 
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px'
          }}
        >
          Join 2,500+ others waiting. No spam, ever.
        </p>
      )}
    </form>
  );
}
