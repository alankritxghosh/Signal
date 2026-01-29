export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sky Gradient Background - Cluely style warm sunrise */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #4A6FA5 0%, #7BA3D0 25%, #A8C5E5 45%, #D4B896 65%, #F5DCC3 80%, #FCEBD4 100%)'
        }}
      />
      
      {/* Warm glow from horizon */}
      <div 
        className="absolute"
        style={{
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '60%',
          background: 'radial-gradient(ellipse at center bottom, rgba(252, 235, 212, 0.8) 0%, rgba(245, 220, 195, 0.4) 30%, transparent 70%)',
        }}
      />
      
      {/* Subtle sun glow */}
      <div 
        className="absolute animate-pulse-glow"
        style={{
          bottom: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '150px',
          background: 'radial-gradient(ellipse at center, rgba(255, 235, 205, 0.6) 0%, rgba(255, 220, 180, 0.3) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Mountain layers SVG */}
      <svg 
        className="absolute bottom-0 left-0 w-full"
        style={{ height: '55%' }}
        viewBox="0 0 1440 500" 
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back mountain ridge - lightest/most faded */}
        <path 
          d="M-100,350 L100,180 L250,220 L400,140 L550,200 L700,120 L850,180 L1000,100 L1150,160 L1300,120 L1450,180 L1540,150 L1540,500 L-100,500 Z" 
          fill="#8FABC8"
          opacity="0.5"
        />
        
        {/* Middle-back ridge */}
        <path 
          d="M-100,380 L80,240 L200,280 L350,200 L500,260 L650,180 L800,240 L950,160 L1100,220 L1250,180 L1400,240 L1540,200 L1540,500 L-100,500 Z" 
          fill="#7A9CBD"
          opacity="0.6"
        />
        
        {/* Middle ridge */}
        <path 
          d="M-100,420 L100,300 L250,350 L420,270 L580,330 L740,260 L900,320 L1060,250 L1220,310 L1380,270 L1540,320 L1540,500 L-100,500 Z" 
          fill="#6B8DAD"
          opacity="0.7"
        />
        
        {/* Front-middle ridge */}
        <path 
          d="M-100,450 L80,360 L220,400 L380,330 L540,390 L700,320 L860,380 L1020,310 L1180,370 L1340,330 L1540,380 L1540,500 L-100,500 Z" 
          fill="#5A7D9D"
          opacity="0.8"
        />
        
        {/* Front ridge - darkest */}
        <path 
          d="M-100,480 L60,420 L180,450 L320,390 L480,440 L640,380 L800,430 L960,370 L1120,420 L1280,380 L1440,430 L1540,410 L1540,500 L-100,500 Z" 
          fill="#4A6D8D"
          opacity="0.9"
        />
      </svg>
      
      {/* Subtle noise texture */}
      <div className="noise-overlay" />
      
      {/* Bottom fade to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(to top, var(--color-bg-primary), transparent)'
        }}
      />
    </div>
  );
}
