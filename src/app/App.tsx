import { useRef } from 'react';
import { NavBar } from '@/app/components/NavBar';
import { HeroBackground } from '@/app/components/HeroBackground';
import { WaitlistForm } from '@/app/components/WaitlistForm';
import { ProductMockup } from '@/app/components/ProductMockup';
import { IntegrationLogos } from '@/app/components/IntegrationLogos';
import { BeforeAfter } from '@/app/components/BeforeAfter';
import { FeatureCard } from '@/app/components/FeatureCard';
import { WhyJoinEarly } from '@/app/components/WhyJoinEarly';
import { Footer } from '@/app/components/Footer';
import { StickyFloatingCTA } from '@/app/components/StickyFloatingCTA';

export default function App() {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div 
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1001] focus:px-6 focus:py-3 focus:rounded-lg"
        style={{
          background: 'var(--color-accent-gradient)',
          color: 'white',
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'none'
        }}
      >
        Skip to content
      </a>
      
      {/* Navigation */}
      <NavBar onWaitlistClick={scrollToWaitlist} />
      
      {/* Sticky Mobile CTA */}
      <StickyFloatingCTA />
      
      {/* Hero Section */}
      <section 
        id="main-content" 
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{ paddingTop: '100px', paddingBottom: '60px' }}
      >
        <HeroBackground />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge - Glass Effect */}
          <div 
            className="glass-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in"
            style={{
              background: 'rgba(255, 255, 255, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(16px) saturate(180%)',
              WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ 
                background: '#22C55E',
                boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)',
              }}
            />
            <span 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-text-on-hero)',
              }}
            >
              Now accepting early access signups
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="mb-6 animate-fade-in-up"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-h1)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-text-on-hero)',
            }}
          >
            Your inbox,{' '}
            <span className="gradient-text">finally peaceful</span>
            <br />
            and productive.
          </h1>
          
          {/* Subheadline */}
          <p 
            className="mb-10 mx-auto animate-fade-in-up stagger-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-body-lg)',
              lineHeight: 1.7,
              color: 'var(--color-text-on-hero-secondary)',
              maxWidth: '600px',
            }}
          >
            Signal surfaces what matters in your inbox and moves the noise out of the way—so you never miss what's important.
          </p>
          
          {/* Waitlist Form */}
          <div ref={waitlistRef} className="animate-fade-in-up stagger-2">
            <WaitlistForm variant="hero" className="max-w-md mx-auto" />
          </div>
          
          {/* Product Mockup */}
          <ProductMockup />
        </div>
      </section>

      {/* Integration Logos */}
      <IntegrationLogos />

      {/* Pain Recognition Section */}
      <section 
        className="py-24 px-6"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 
            className="mb-12 text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-h2)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            You Already Know The Problem.
          </h2>
          
          <div className="space-y-6">
            <PainPoint>
              Your inbox is full, but most of it doesn't matter.
            </PainPoint>
            
            <PainPoint>
              Real emails get buried under promotions you never opened, newsletters 
              you meant to read, and automated updates you didn't ask for.
            </PainPoint>
            
            <PainPoint>
              Someone follows up twice. You miss it.
            </PainPoint>
            
            <PainPoint>
              A genuine outreach lands in the same place as a discount code.
            </PainPoint>
            
            <PainPoint>
              You scan subject lines, not because it's useful, but because you're 
              afraid of missing something important.
            </PainPoint>
            
            <PainPoint highlight>
              Every email tool promises productivity. Most just give you more labels to manage.
            </PainPoint>
          </div>

          {/* Signal's Purpose - Glass Effect */}
          <div 
            className="glass-panel mt-16 p-8 rounded-2xl text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            <p 
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'var(--text-body-lg)',
                fontWeight: 500,
                color: 'var(--color-text-primary)',
                lineHeight: 1.6,
              }}
            >
              Signal exists for one reason:<br />
              <span className="gradient-text">to separate what matters from what doesn't.</span>
            </p>
            
            <div className="space-y-3 mb-6">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                It surfaces real outreach and follow-ups.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                It moves noise out of the way.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                It leaves your inbox quieter than you found it.
              </p>
            </div>
            
            <div 
              className="pt-6"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: 'var(--color-text-tertiary)',
                  lineHeight: 1.7,
                }}
              >
                No dashboards. No rewriting how you work.<br />
                Just an inbox that finally makes sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <BeforeAfter />

      {/* Philosophy/Reframe Section */}
      <section 
        className="relative py-24 px-6"
        style={{ background: 'var(--color-bg-secondary)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-h2)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            We assume you want{' '}
            <span className="gradient-text">less</span>
          </h2>
          
          <p 
            className="mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-body-lg)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
            }}
          >
            Less friction. Less noise. Less cognitive overhead. Signal learns your patterns, 
            anticipates your needs, and surfaces exactly what matters—when it matters.
          </p>
          
          <p 
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-body-lg)',
              lineHeight: 1.8,
              color: 'var(--color-text-tertiary)',
            }}
          >
            No manual tagging. No complex setups. No performative productivity theater. 
            Just signal over noise.
          </p>
        </div>
      </section>

      {/* Feature Cards Bento Grid */}
      <section 
        className="py-24 px-6"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'var(--text-h2)',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              What we're building
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
              Intelligence that stays out of your way.
            </p>
          </div>
          
          {/* Bento Grid Layout */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ gridAutoRows: 'minmax(180px, auto)' }}
          >
            {/* Large Card - Primary Feature (spans 2 cols, 2 rows) */}
            <FeatureCard
              icon="brain"
              title="Learns your patterns automatically"
              description="Signal observes how you work—what emails you prioritize, who you respond to first, what gets archived unread. No manual rules. No complex setup. Just intelligent pattern recognition that gets smarter every day."
              size="large"
            />
            
            {/* Regular Card - Top Right */}
            <FeatureCard
              icon="zap"
              title="Instant recall"
              description="Find any decision or context in seconds. Signal remembers so you don't have to."
              size="regular"
            />
            
            {/* Regular Card - Middle Right */}
            <FeatureCard
              icon="shield"
              title="Quiet by design"
              description="No aggressive notifications. No badge anxiety. Just calm."
              size="regular"
            />
            
            {/* Wide Card - Bottom (spans 2 cols) */}
            <FeatureCard
              icon="sparkles"
              title="Surfaces what matters"
              description="Get intelligent prioritization that puts real conversations at the top and moves noise out of the way—automatically."
              size="wide"
            />
            
            {/* Tall Card - Visual Stats (spans 2 rows) */}
            <FeatureCard
              icon="search"
              title="Smart filtering"
              description="Newsletters, promotions, and automated emails sorted before you see them."
              size="tall"
            />
          </div>
        </div>
      </section>

      {/* Why Join Early */}
      <WhyJoinEarly />

      {/* FAQ Section */}
      <section 
        className="py-24 px-6"
        style={{ background: 'var(--color-bg-primary)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-center mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-h2)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            Frequently asked questions
          </h2>
          
          <div className="space-y-8">
            <FAQItem 
              question="Is my data private?"
              answer="Absolutely. Your calendar data never leaves your workspace. All pattern recognition happens locally, and we never train models on your information."
            />
            
            <FAQItem 
              question="How long does setup take?"
              answer="About 2 minutes. Connect your calendar, and Signal starts learning immediately. No configuration, no training period, no complexity."
            />
            
            <FAQItem 
              question="What if I don't want AI making decisions?"
              answer="Good. We don't make decisions for you. Signal suggests, you decide. Every action requires your explicit approval—no autopilot, no surprises."
            />

            <FAQItem 
              question="When will Signal launch?"
              answer="We're targeting Q2 2026 for our public launch. Join the waitlist to get early access and help shape the product."
            />
          </div>
        </div>
      </section>

      {/* Footer with Final CTA */}
      <Footer />
    </div>
  );
}

function PainPoint({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <p 
      className="text-center"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 'var(--text-body-lg)',
        lineHeight: 1.8,
        color: highlight ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        fontWeight: highlight ? 500 : 400,
      }}
    >
      {children}
    </p>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div 
      className="glass-card p-6 rounded-2xl transition-all hover:translate-y-[-2px]"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      <h3 
        className="mb-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.01em'
        }}
      >
        {question}
      </h3>
      <p 
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          lineHeight: 1.7,
          color: 'var(--color-text-secondary)',
          margin: 0,
        }}
      >
        {answer}
      </p>
    </div>
  );
}
