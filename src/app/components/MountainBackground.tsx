export function MountainBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #6B9BD4 0%, #F5F0EB 100%)'
        }}
      />
      
      {/* Sunshine - radial gradient sun */}
      <div 
        className="absolute"
        style={{
          top: '15%',
          right: '20%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255, 223, 128, 0.9) 0%, rgba(255, 200, 100, 0.6) 30%, rgba(255, 180, 80, 0.3) 50%, transparent 70%)',
          filter: 'blur(2px)',
          animation: 'gentle-glow 8s ease-in-out infinite'
        }}
      />
      
      {/* Sun rays */}
      <div 
        className="absolute"
        style={{
          top: '15%',
          right: '20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, transparent 0%, rgba(255, 230, 150, 0.15) 40%, transparent 70%)',
          transform: 'translate(-50px, -50px)',
          animation: 'gentle-glow 8s ease-in-out infinite'
        }}
      />
      
      {/* Mist layers - subtle horizontal drift */}
      <div 
        className="absolute inset-0 opacity-30 animate-mist-drift-1"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
          transform: 'translateY(30%)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-20 animate-mist-drift-2"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
          transform: 'translateY(50%)'
        }}
      />
      
      {/* Mountain layers - atmospheric perspective */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[60vh]" 
        viewBox="0 0 1440 600" 
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back mountain ridge - lightest */}
        <path 
          d="M0,400 L200,250 L400,300 L600,200 L800,280 L1000,220 L1200,300 L1440,250 L1440,600 L0,600 Z" 
          fill="#D8E4F2"
          opacity="0.6"
        />
        
        {/* Middle-back ridge */}
        <path 
          d="M0,450 L150,320 L350,380 L550,280 L750,350 L950,300 L1150,360 L1350,320 L1440,380 L1440,600 L0,600 Z" 
          fill="#C2D1E8"
          opacity="0.7"
        />
        
        {/* Middle-front ridge */}
        <path 
          d="M0,480 L180,360 L380,420 L580,340 L780,400 L980,360 L1180,420 L1380,380 L1440,430 L1440,600 L0,600 Z" 
          fill="#A8B8D4"
          opacity="0.8"
        />
        
        {/* Front ridge - darkest */}
        <path 
          d="M0,520 L120,420 L320,480 L520,400 L720,460 L920,420 L1120,480 L1320,440 L1440,490 L1440,600 L0,600 Z" 
          fill="#8FA5C5"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}