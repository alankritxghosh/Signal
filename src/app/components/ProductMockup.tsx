import { Mail, Star, Clock, AlertCircle, Sparkles, Check } from 'lucide-react';

export function ProductMockup() {
  return (
    <div className="relative max-w-4xl mx-auto mt-16 animate-scale-in" style={{ animationDelay: '0.3s' }}>
      {/* macOS Window Chrome - Light Theme */}
      <div 
        className="rounded-t-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #F6F6F6, #E8E8E8)',
          padding: '14px 20px',
          boxShadow: '0 -1px 0 rgba(255,255,255,0.5) inset',
        }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <div 
            className="ml-4 flex-1 h-6 rounded-md flex items-center justify-center"
            style={{ background: 'rgba(0, 0, 0, 0.04)' }}
          >
            <span 
              className="text-xs"
              style={{ color: 'rgba(0, 0, 0, 0.4)', fontFamily: "'Inter', sans-serif" }}
            >
              mail.google.com
            </span>
          </div>
        </div>
      </div>
      
      {/* Gmail-style Inbox - Light Theme */}
      <div 
        className="relative rounded-b-2xl overflow-hidden"
        style={{
          background: 'white',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderTop: 'none',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Gmail Header */}
        <div 
          className="flex items-center gap-4 px-6 py-4"
          style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}
        >
          <Mail className="w-5 h-5" style={{ color: '#5F6368' }} />
          <span 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '14px',
              color: '#202124',
              fontWeight: 500 
            }}
          >
            Inbox
          </span>
          <span 
            className="px-2 py-0.5 rounded text-xs"
            style={{ 
              background: 'rgba(234, 67, 53, 0.1)', 
              color: '#EA4335',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
            }}
          >
            3 need attention
          </span>
        </div>

        {/* Email List */}
        <div className="divide-y divide-black/5">
          <EmailRow 
            sender="John from Product"
            subject="Rescheduled: Q4 Planning"
            preview="Moved to Thursday 2pm. Let me know if this works..."
            time="9:30 AM"
            hasConflict
            isUnread
          />
          <EmailRow 
            sender="Design Team"
            subject="Design Review — Urgent"
            preview="Need your input on the new dashboard mockups before..."
            time="9:15 AM"
            hasConflict
            isUnread
          />
          <EmailRow 
            sender="Calendar"
            subject="3 meetings today need attention"
            preview="You have overlapping meetings at 10:00 AM..."
            time="8:00 AM"
            isCalendar
          />
          <EmailRow 
            sender="Sarah Chen"
            subject="Re: Investor Update"
            preview="Thanks for the deck! I'll share feedback by EOD..."
            time="Yesterday"
            isStarred
          />
        </div>

        {/* Signal AI Overlay Card - Top Right */}
        <div 
          className="absolute top-20 right-4 animate-float-in max-w-[280px]"
          style={{ animationDelay: '0.6s' }}
        >
          <div 
            className="rounded-xl p-4"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(74, 111, 165, 0.2)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12), 0 0 40px rgba(74, 111, 165, 0.08)',
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ background: 'var(--color-accent-gradient)' }}
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span 
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-primary)', fontFamily: "'Inter', sans-serif" }}
              >
                Signal detected
              </span>
            </div>
            <p 
              className="text-xs mb-3"
              style={{ 
                color: 'var(--color-text-secondary)', 
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.5 
              }}
            >
              <strong style={{ color: 'var(--color-text-primary)' }}>Important follow-up</strong> from 
              Sarah — she's waiting for your response.
            </p>
            <button 
              type="button"
              className="w-full py-2 rounded-lg text-xs font-medium"
              style={{
                background: 'var(--color-accent-gradient)',
                color: 'white',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Surface to top
            </button>
          </div>
        </div>

        {/* Signal AI Overlay Card - Bottom Left */}
        <div 
          className="absolute bottom-4 left-4 animate-float-in max-w-[260px]"
          style={{ animationDelay: '0.9s' }}
        >
          <div 
            className="rounded-xl p-4"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ background: 'rgba(34, 197, 94, 0.15)' }}
              >
                <Check className="w-3.5 h-3.5 text-green-600" />
              </div>
              <span 
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-primary)', fontFamily: "'Inter', sans-serif" }}
              >
                Today
              </span>
            </div>
            <p 
              className="text-xs"
              style={{ 
                color: 'var(--color-text-secondary)', 
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.5 
              }}
            >
              <strong className="text-green-600">47 emails filtered</strong> — your inbox 
              now shows only what matters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailRow({ 
  sender, 
  subject, 
  preview, 
  time, 
  hasConflict,
  isUnread,
  isStarred,
  isCalendar 
}: { 
  sender: string;
  subject: string;
  preview: string;
  time: string;
  hasConflict?: boolean;
  isUnread?: boolean;
  isStarred?: boolean;
  isCalendar?: boolean;
}) {
  return (
    <div 
      className="flex items-center gap-4 px-6 py-3 hover:bg-black/[0.02] transition-colors cursor-pointer"
      style={{ 
        background: isUnread ? 'rgba(66, 133, 244, 0.04)' : 'transparent',
      }}
    >
      {/* Checkbox + Star */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div 
          className="w-4 h-4 rounded border"
          style={{ borderColor: 'rgba(0, 0, 0, 0.2)' }}
        />
        <Star 
          className="w-4 h-4" 
          style={{ 
            color: isStarred ? '#F4B400' : 'rgba(0, 0, 0, 0.2)',
            fill: isStarred ? '#F4B400' : 'none'
          }} 
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span 
            className="text-sm truncate"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: isUnread ? 600 : 400,
              color: isUnread ? '#202124' : '#5F6368',
            }}
          >
            {sender}
          </span>
          {hasConflict && (
            <AlertCircle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
          )}
          {isCalendar && (
            <Clock className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span 
            className="text-sm truncate"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: isUnread ? 500 : 400,
              color: isUnread ? '#202124' : '#5F6368',
            }}
          >
            {subject}
          </span>
          <span 
            className="text-xs truncate hidden sm:inline"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#5F6368',
            }}
          >
            — {preview}
          </span>
        </div>
      </div>

      {/* Time */}
      <span 
        className="text-xs flex-shrink-0"
        style={{ 
          fontFamily: "'Inter', sans-serif",
          color: hasConflict ? '#EA4335' : '#5F6368',
          fontWeight: hasConflict ? 500 : 400,
        }}
      >
        {time}
      </span>
    </div>
  );
}