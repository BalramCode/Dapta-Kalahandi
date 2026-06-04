import React, { useState } from 'react';

const MissionVisionObjective = () => {
  // Track active card state to orchestrate dynamic ambient background colors and text transitions
  const [activeCard, setActiveCard] = useState('vision');

  const cards = [
    {
      id: 'mission',
      title: 'Mission',
      accentColor: '#2A9D8F', // Emerald Teal
      glowClass: 'rgba(42,157,143,0.06)',
      summary: 'Eradication of poverty through a People-Centered action framework.',
      fullText: 'Eradication of poverty through a People Centered action strongly emphasizing sustainable resource management, democratic institution building, and localized grassroot leadership programs.',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2" : "1.5"} className={`w-14 h-14 transition-transform duration-500 ${isActive ? 'text-[#2A9D8F] scale-110' : 'text-slate-600'}`}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      id: 'vision',
      title: 'Vision',
      accentColor: '#F4A261', // Soft Coral/Orange
      glowClass: 'rgba(244,162,97,0.06)',
      summary: 'Establishing a just, participatory, and highly sustainable society.',
      fullText: 'Establishing a just, participatory and sustainable society, where each individual lives with complete dignity, deep self-respect, and uncompromised socioeconomic equality.',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2" : "1.5"} className={`w-14 h-14 transition-transform duration-500 ${isActive ? 'text-[#F4A261] scale-110' : 'text-slate-600'}`}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'objective',
      title: 'Objective',
      accentColor: '#E76F51', // Burnt Sienna
      glowClass: 'rgba(231,111,81,0.06)',
      summary: 'Enabling the last person of the society to thrive with dignity.',
      fullText: 'Enabling the last person of the society to live with dignity. Improving the quality of life by mobilizing natural resources, community capacities, and modern sanitation infrastructures.',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2" : "1.5"} className={`w-14 h-14 transition-transform duration-500 ${isActive ? 'text-[#E76F51] scale-110' : 'text-slate-600'}`}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17h6" />
          <path d="M9 12h6" />
          <path d="M9 7h6" />
        </svg>
      ),
    },
  ];

  const currentActiveCard = cards.find(c => c.id === activeCard) || cards[1];

  return (
    <div 
      className="relative w-full h-[100vh] min-h-[700px] bg-[#EBF1F5] flex flex-col items-center justify-center overflow-hidden font-sans border-b-[6px] border-slate-900 transition-all duration-700 ease-in-out"
      style={{
        boxShadow: activeCard ? `inset 0 0 120px ${currentActiveCard.glowClass}` : 'none'
      }}
    >
      
      {/* Background Decorative Abstract Leaf Elements (Enhanced styling & state reaction) */}
      <div className="absolute left-6 bottom-16 w-32 h-48 opacity-30 pointer-events-none hidden lg:block transition-transform duration-500" style={{ transform: `rotate(${activeCard === 'mission' ? '-5deg' : '0deg'})` }}>
        <div className="w-full h-full relative">
          <div className="absolute bottom-0 left-2 w-7 h-24 bg-[#6C8E9B] rounded-full rotate-[-25deg] origin-bottom transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-7 w-8 h-28 bg-[#4A6D7C] rounded-full rotate-[-10deg] origin-bottom"></div>
          <div className="absolute bottom-2 left-12 w-7 h-24 bg-[#5A7D8C] rounded-full rotate-[15deg] origin-bottom"></div>
          <div className="absolute bottom-6 left-0 w-2.5 h-14 bg-[#D4AF37] rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="absolute right-10 top-10 w-40 h-40 opacity-10 pointer-events-none hidden lg:block">
        <div className="w-full h-full rounded-full border-4 border-dashed border-slate-700 animate-[spin_40s_linear_infinite]" />
      </div>

      {/* Main Structural Layout Wrapper */}
      <div className="max-w-6xl w-full mx-auto px-6 z-10 flex flex-col justify-center h-full space-y-10 md:space-y-14">
        
        {/* Synchronized Header Content */}
        <div className="text-center space-y-3 animate-fade-in-down">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500">Organizational Blueprint</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
            What Drives Our Purpose
          </h2>
          <div className="w-16 h-[3px] mx-auto rounded-full transition-colors duration-500" style={{ backgroundColor: currentActiveCard.accentColor }} />
        </div>

        {/* Dynamic Grid Matrix for the 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {cards.map((card) => {
            const isActive = card.id === activeCard;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onClick={() => setActiveCard(card.id)}
                className={`bg-white px-6 py-10 lg:py-12 flex flex-col items-center text-center rounded-2xl shadow-md border-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] select-none cursor-pointer h-[340px] lg:h-[380px] relative
                  ${isActive 
                    ? 'scale-105 shadow-xl -translate-y-3 z-20' 
                    : 'border-transparent bg-white/75 opacity-75 hover:opacity-95 hover:bg-white hover:-translate-y-1 z-10'
                  }`}
                style={{
                  borderColor: isActive ? card.accentColor : 'transparent'
                }}
              >
                {/* Dynamic Colored Border Cap */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl transition-all duration-500" 
                  style={{ 
                    backgroundColor: card.accentColor,
                    opacity: isActive ? 1 : 0.4
                  }} 
                />

                {/* Vector Line Icon Wrapper */}
                <div 
                  className={`mb-6 p-4 rounded-2xl transition-all duration-500 ${isActive ? 'bg-slate-50' : 'bg-transparent'}`}
                >
                  {card.icon(isActive)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4 tracking-wide transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Smooth Morphing Interactive Description Container */}
                <div className="relative w-full overflow-hidden flex-grow px-2">
                  <p className={`text-slate-600 text-sm md:text-[14px] leading-relaxed transition-all duration-500 ease-in-out
                    ${isActive ? 'opacity-100 scale-100 font-normal' : 'opacity-80 scale-95 font-light'}`}
                  >
                    {isActive ? card.fullText : card.summary}
                  </p>
                </div>

                {/* Custom Action Link UI element with color injection */}
                <div className="mt-6 pt-2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1 group-hover:gap-2"
                    style={{ color: isActive ? card.accentColor : '#64748B' }}
                  >
                    <span>{isActive ? 'Active Focus' : 'Learn More'}</span>
                    <span className={`transition-transform duration-300 ${isActive ? 'rotate-90 translate-y-0.5' : ''}`}>➔</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MissionVisionObjective;