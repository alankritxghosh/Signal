import { Zap, Gift, MessageSquare, Trophy } from 'lucide-react';

export function WhyJoinEarly() {
  return (
    <section 
      className="py-24 px-6"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="glass-badge inline-block px-4 py-1.5 rounded-full mb-6"
            style={{
              background: 'rgba(74, 111, 165, 0.1)',
              border: '1px solid rgba(74, 111, 165, 0.15)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--color-accent-primary)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            }}
          >
            Early Access Benefits
          </span>
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
            Why join the waitlist?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Get exclusive perks by signing up early.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard 
            icon={<Zap className="w-5 h-5" />}
            title="First Access"
            description="Be among the first to try Signal when we launch"
            delay={0}
          />
          <BenefitCard 
            icon={<Gift className="w-5 h-5" />}
            title="Founder Pricing"
            description="Lock in 50% off for life—exclusive to early adopters"
            delay={1}
          />
          <BenefitCard 
            icon={<MessageSquare className="w-5 h-5" />}
            title="Shape the Product"
            description="Direct line to our team. Your feedback builds Signal"
            delay={2}
          />
          <BenefitCard 
            icon={<Trophy className="w-5 h-5" />}
            title="Skip the Line"
            description="Jump ahead when we open access to everyone"
            delay={3}
          />
        </div>

        {/* Launch Timeline - Glass Effect */}
        <div 
          className="glass-panel mt-16 text-center p-8 rounded-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          <p 
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              marginBottom: '8px',
            }}
          >
            Expected Launch
          </p>
          <p 
            className="gradient-text"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-h3)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Q2 2026
          </p>
          <p 
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginTop: '8px',
            }}
          >
            We're putting the finishing touches on something special.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ 
  icon, 
  title, 
  description,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
}) {
  return (
    <div 
      className={`glass-card p-6 animate-fade-in-up stagger-${delay + 1} transition-all hover:translate-y-[-4px]`}
      style={{ 
        background: 'rgba(255, 255, 255, 0.65)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '16px',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      {/* Icon with Glass Effect */}
      <div 
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: 'linear-gradient(135deg, rgba(74, 111, 165, 0.9) 0%, rgba(91, 125, 181, 0.85) 50%, rgba(107, 141, 197, 0.9) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 15px rgba(74, 111, 165, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        <span className="text-white">{icon}</span>
      </div>
      <h3 
        className="mb-2"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </h3>
      <p 
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}
