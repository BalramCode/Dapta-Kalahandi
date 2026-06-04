import React, { useState } from 'react';

const DaptaMarch = () => {
  // Active index state drives text updates and background overlay alterations dynamically
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const links = [
    { 
      label: 'Who are With Us', 
      href: '#who-are-with-us',
      desc: 'Discover our global networks, institutional partners, and grassroot volunteers standing side-by-side.',
      colorOverlay: 'linear-gradient(rgba(42, 110, 107, 0.88), rgba(24, 61, 59, 0.95))' // Emerald tint
    },
    { 
      label: 'Case Studies', 
      href: '#case-studies',
      desc: 'In-depth analysis of our structural resource projects and localized socio-economic frameworks.',
      colorOverlay: 'linear-gradient(rgba(58, 96, 102, 0.88), rgba(28, 48, 51, 0.95))' // Original deep teal
    },
    { 
      label: 'Stories', 
      href: '#stories',
      desc: 'Real, raw accounts of personal empowerment, female leadership, and dignity reclaimed in Kalahandi.',
      colorOverlay: 'linear-gradient(rgba(184, 107, 74, 0.88), rgba(89, 49, 32, 0.95))' // Warm amber clay tint
    },
  ];

  const fallbackBgImage = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop";
  const activeProfile = links[hoveredIndex] || links[0];

  return (
    <section 
      className="relative w-full h-[100vh] min-h-[650px] flex items-center bg-[#3A6066] overflow-hidden px-6 md:px-16 lg:px-24 font-sans select-none border-b-[6px] border-slate-900 transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `${activeProfile.colorOverlay}, url(${fallbackBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background Animated Floating Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
        <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl -top-12 -left-12 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl bottom-0 right-1/4 animate-bounce-slow" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Side: Dynamic Frame Header & Changing Descriptions */}
        <div className="lg:col-span-7 text-white space-y-6 text-center lg:text-left flex flex-col justify-center">
          <div className="space-y-3">
            <span className="text-xs md:text-sm tracking-[0.3em] font-bold text-amber-400 uppercase block drop-shadow-sm">
              Seba Jagat
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-2xl mx-auto lg:mx-0 tracking-tight drop-shadow-md">
              March towards a <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-amber-200">Non-Violent</span> & Peaceful World
            </h2>
          </div>

          {/* Interactive contextual descriptive card block */}
          <div className="h-28 md:h-24 w-full max-w-xl mx-auto lg:mx-0 pt-4 border-t border-white/10 relative overflow-hidden">
            {links.map((link, idx) => (
              <p
                key={idx}
                className={`text-slate-200/90 text-sm md:text-base leading-relaxed font-light absolute inset-0 transition-all duration-500 ease-out transform
                  ${idx === hoveredIndex 
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
              >
                {link.desc}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side: Re-architected Navigation Stack */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto flex flex-col gap-4">
          {links.map((link, index) => {
            const isSelected = index === hoveredIndex;

            return (
              <a
                key={index}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group flex items-stretch w-full shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform border
                  ${isSelected 
                    ? 'scale-105 -translate-y-1 border-white/30 ring-4 ring-white/5' 
                    : 'border-white/5 hover:border-white/10 opacity-80 hover:opacity-100'}`}
              >
                {/* Left side Indicator Box containing Orange Checkmark */}
                <div 
                  className={`px-5 flex items-center justify-center min-h-[68px] transition-colors duration-500
                    ${isSelected ? 'bg-amber-400' : 'bg-white'}`}
                >
                  <svg 
                    className={`w-5 h-5 stroke-[3.5] transition-all duration-500
                      ${isSelected ? 'text-slate-900 scale-110 rotate-[360deg]' : 'text-[#E76F51]'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Main Row Option Body */}
                <div 
                  className={`transition-all duration-500 flex-1 flex items-center justify-between px-6 text-white font-bold text-sm md:text-base tracking-wide
                    ${isSelected ? 'bg-slate-900/90' : 'bg-[#2E2E2E]/80 backdrop-blur-sm group-hover:bg-[#363636]'}`}
                >
                  <span>{link.label}</span>
                  <span className={`text-xl transition-all duration-500 transform opacity-0 -translate-x-2
                    ${isSelected ? 'opacity-100 translate-x-0 text-amber-400' : 'group-hover:opacity-50'}`}>
                    ➔
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Repeating Decorative Base Geometric Trim */}
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#70360f] border-t border-amber-600/20 flex items-center justify-around overflow-hidden pointer-events-none">
        {[...Array(32)].map((_, idx) => (
          <div key={idx} className="w-4 h-4 rounded-md border border-amber-300/10 transform rotate-45 scale-75 flex-shrink-0 bg-amber-500/5 animate-pulse" style={{ animationDelay: `${idx * 150}ms` }} />
        ))}
      </div>

      {/* Simple component animation definitions */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        .animate-bounce-slow { animation: bounceSlow 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default DaptaMarch;