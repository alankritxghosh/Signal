export function IntegrationLogos() {
  const logos = [
    { name: 'Gmail', icon: <GmailIcon /> },
    { name: 'Outlook', icon: <OutlookIcon /> },
    { name: 'Slack', icon: <SlackIcon /> },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section 
      className="py-16 overflow-hidden"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      <div className="text-center mb-10">
        <p 
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Works with the tools you already use
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to right, var(--color-bg-secondary), transparent)' 
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ 
            background: 'linear-gradient(to left, var(--color-bg-secondary), transparent)' 
          }}
        />
        
        {/* Scrolling logos */}
        <div className="flex animate-marquee">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 mx-12 flex-shrink-0"
            >
              <div className="w-10 h-10">
                {logo.icon}
              </div>
              <span 
                className="text-lg font-medium whitespace-nowrap"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: 'var(--color-text-secondary)',
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SVG Icons
function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" fill="#F5F5F5"/>
      <path d="M22 6L12 13L2 6" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 6L2 18C2 19.1 2.9 20 4 20H5V8L12 13L19 8V20H20C21.1 20 22 19.1 22 18V6" fill="#EA4335"/>
      <path d="M5 20V8L12 13L19 8V20" fill="#FBBC05"/>
      <path d="M2 6L12 13" stroke="#34A853" strokeWidth="2"/>
      <path d="M22 6L12 13" stroke="#4285F4" strokeWidth="2"/>
      <path d="M5 8V20H19V8L12 13L5 8Z" fill="white"/>
      <path d="M2 6C2 4.9 2.9 4 4 4H5L12 9.5L19 4H20C21.1 4 22 4.9 22 6L12 13L2 6Z" fill="#EA4335"/>
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7.5L14 12L22 16.5V7.5Z" fill="#0078D4"/>
      <path d="M22 5H14V12L22 7.5V5Z" fill="#28A8EA"/>
      <path d="M22 16.5L14 12V19H22V16.5Z" fill="#0078D4"/>
      <path d="M14 5H8V19H14V5Z" fill="#0078D4"/>
      <path d="M14 5L2 7V17L14 19V5Z" fill="#0078D4"/>
      <ellipse cx="7.5" cy="12" rx="3" ry="4" fill="white"/>
      <ellipse cx="7.5" cy="12" rx="1.5" ry="2.5" fill="#0078D4"/>
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
    </svg>
  );
}
