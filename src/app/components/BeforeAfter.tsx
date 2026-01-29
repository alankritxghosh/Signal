import { X, Check, Calendar, Brain, AlertTriangle, Sparkles } from 'lucide-react';

export function BeforeAfter() {
  return (
    <section 
      className="relative py-24 px-6"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            The difference is{' '}
            <span className="gradient-text">night and day</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            See how Signal transforms your calendar chaos into clarity.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* BEFORE Card - Glass Effect */}
          <div 
            className="glass-card rounded-2xl p-8 animate-fade-in-up"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(239, 68, 68, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(239, 68, 68, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              {/* Icon with Glass Effect */}
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ 
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.15)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                }}
              >
                <X className="w-5 h-5 text-red-400" aria-hidden="true" />
              </div>
              <span 
                className="text-lg font-semibold"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(239, 68, 68, 0.9)'
                }}
              >
                Without Signal
              </span>
            </div>

            {/* Problem Items */}
            <div className="space-y-4">
              <ProblemItem 
                icon={<Calendar className="w-4 h-4" />}
                text="Triple-booked again because someone moved a recurring meeting"
              />
              <ProblemItem 
                icon={<AlertTriangle className="w-4 h-4" />}
                text="20 minutes hunting for that one decision from three weeks ago"
              />
              <ProblemItem 
                icon={<Calendar className="w-4 h-4" />}
                text="47 browser tabs, 12 Slack channels, zero organization"
              />
              <ProblemItem 
                icon={<AlertTriangle className="w-4 h-4" />}
                text="Context switching between apps destroys your focus"
              />
            </div>

            {/* Visual Mockup - Chaotic Inbox - Glass Effect */}
            <div 
              className="mt-8 rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px) saturate(180%)',
                WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              }}
            >
              <div 
                className="px-4 py-2 flex items-center gap-2"
                style={{ 
                  background: 'rgba(248, 248, 248, 0.7)',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57', boxShadow: '0 0 4px rgba(255, 95, 87, 0.4)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E', boxShadow: '0 0 4px rgba(254, 188, 46, 0.4)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840', boxShadow: '0 0 4px rgba(40, 200, 64, 0.4)' }} />
              </div>
              <div className="p-4 space-y-2" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                <CalendarBlock color="red" title="Product Review" time="9:00 AM" conflict />
                <CalendarBlock color="red" title="Design Sync" time="9:00 AM" conflict />
                <CalendarBlock color="orange" title="Q4 Planning" time="9:30 AM" />
                <CalendarBlock color="red" title="Team Standup" time="10:00 AM" conflict />
              </div>
            </div>
          </div>

          {/* AFTER Card - Glass Effect */}
          <div 
            className="glass-card rounded-2xl p-8 animate-fade-in-up stagger-2"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(34, 197, 94, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              {/* Icon with Glass Effect */}
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ 
                  background: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.15)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                }}
              >
                <Check className="w-5 h-5 text-green-400" aria-hidden="true" />
              </div>
              <span 
                className="text-lg font-semibold"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(34, 197, 94, 0.9)'
                }}
              >
                With Signal
              </span>
            </div>

            {/* Solution Items */}
            <div className="space-y-4">
              <SolutionItem 
                icon={<Brain className="w-4 h-4" />}
                text="AI detects conflicts before they happen and suggests fixes"
              />
              <SolutionItem 
                icon={<Sparkles className="w-4 h-4" />}
                text="Find any decision or context in seconds with smart search"
              />
              <SolutionItem 
                icon={<Calendar className="w-4 h-4" />}
                text="One calm dashboard shows everything that matters"
              />
              <SolutionItem 
                icon={<Brain className="w-4 h-4" />}
                text="Automatic categorization learns your patterns"
              />
            </div>

            {/* Visual Mockup - Clean Inbox - Glass Effect */}
            <div 
              className="mt-8 rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px) saturate(180%)',
                WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              }}
            >
              <div 
                className="px-4 py-2 flex items-center gap-2"
                style={{ 
                  background: 'rgba(248, 248, 248, 0.7)',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57', boxShadow: '0 0 4px rgba(255, 95, 87, 0.4)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E', boxShadow: '0 0 4px rgba(254, 188, 46, 0.4)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840', boxShadow: '0 0 4px rgba(40, 200, 64, 0.4)' }} />
              </div>
              <div className="p-4 space-y-2" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                <CalendarBlock color="green" title="Product Review" time="9:00 AM" badge="Merged" />
                <CalendarBlock color="blue" title="Focus Time" time="10:00 AM" badge="Protected" />
                <CalendarBlock color="purple" title="Q4 Planning" time="2:00 PM" />
                <div 
                  className="mt-3 p-3 rounded-lg flex items-center gap-2"
                  style={{
                    background: 'rgba(74, 111, 165, 0.08)',
                    border: '1px solid rgba(74, 111, 165, 0.12)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <Sparkles className="w-4 h-4 text-[#4A6FA5]" />
                  <span 
                    className="text-xs"
                    style={{ color: 'var(--color-text-secondary)', fontFamily: "'Inter', sans-serif" }}
                  >
                    47 emails filtered • Inbox clarity restored
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div 
        className="mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
        style={{ 
          background: 'rgba(239, 68, 68, 0.1)',
          color: 'rgba(239, 68, 68, 0.7)'
        }}
      >
        {icon}
      </div>
      <p 
        style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function SolutionItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div 
        className="mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
        style={{ 
          background: 'rgba(34, 197, 94, 0.1)',
          color: 'rgba(34, 197, 94, 0.7)'
        }}
      >
        {icon}
      </div>
      <p 
        style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function CalendarBlock({ 
  color, 
  title, 
  time, 
  conflict,
  badge 
}: { 
  color: 'red' | 'orange' | 'green' | 'blue' | 'purple'; 
  title: string; 
  time: string;
  conflict?: boolean;
  badge?: string;
}) {
  const colors = {
    red: { bg: 'rgba(239, 68, 68, 0.08)', border: '#EF4444', text: '#DC2626' },
    orange: { bg: 'rgba(249, 115, 22, 0.08)', border: '#F97316', text: '#EA580C' },
    green: { bg: 'rgba(34, 197, 94, 0.08)', border: '#22C55E', text: '#16A34A' },
    blue: { bg: 'rgba(59, 130, 246, 0.08)', border: '#3B82F6', text: '#2563EB' },
    purple: { bg: 'rgba(139, 92, 246, 0.08)', border: '#8B5CF6', text: '#7C3AED' },
  };

  const c = colors[color];

  return (
    <div 
      className="px-3 py-2 rounded-lg flex items-center justify-between"
      style={{ background: c.bg, borderLeft: `3px solid ${c.border}` }}
    >
      <div>
        <p 
          className="text-sm font-medium"
          style={{ color: 'var(--color-text-primary)', fontFamily: "'Inter', sans-serif" }}
        >
          {title}
        </p>
        <p 
          className="text-xs"
          style={{ color: 'var(--color-text-tertiary)', fontFamily: "'Inter', sans-serif" }}
        >
          {time}
        </p>
      </div>
      {conflict && (
        <span 
          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{ background: 'rgba(239, 68, 68, 0.15)', color: c.text }}
        >
          Buried
        </span>
      )}
      {badge && (
        <span 
          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}
