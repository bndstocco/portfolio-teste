export default function Background() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;

  return (
    <div className="bg-container" aria-hidden="true">
      {!isMobile && (
        <svg className="bg-blob-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="bgBlob">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise">
                <animate attributeName="baseFrequency" values="0.015;0.025;0.015" dur="12s" repeatCount="indefinite"/>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <filter id="bgBlob2">
              <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise">
                <animate attributeName="baseFrequency" values="0.02;0.03;0.02" dur="10s" repeatCount="indefinite"/>
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <ellipse cx="200" cy="150" rx="250" ry="200" fill="rgba(0,102,255,0.04)" filter="url(#bgBlob)">
            <animate attributeName="cx" values="200;250;180;200" dur="20s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="150;100;180;150" dur="18s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="600" cy="500" rx="300" ry="180" fill="rgba(0,212,255,0.03)" filter="url(#bgBlob2)">
            <animate attributeName="cx" values="600;550;650;600" dur="22s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="500;450;550;500" dur="16s" repeatCount="indefinite"/>
          </ellipse>
        </svg>
      )}

      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />
      <div className="bg-glow bg-glow-4" />

      <div className="bg-grid" />

      <div className="bg-lines">
        <div className="bg-line bg-line-1" />
        <div className="bg-line bg-line-2" />
        <div className="bg-line bg-line-3" />
      </div>

      <div className="bg-dots">
        {Array.from({ length: isMobile ? 6 : 20 }).map((_, i) => (
          <div key={i} className="bg-dot" style={{
            left: `${5 + (i * 15) % 90}%`,
            top: `${10 + (i * 20) % 80}%`,
            width: `${2}px`,
            height: `${2}px`,
            animationDelay: `${i * 1.3}s`,
            animationDuration: `${4 + (i % 5) * 2}s`,
          }} />
        ))}
      </div>
    </div>
  );
}
