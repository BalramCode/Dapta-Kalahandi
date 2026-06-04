import React, { useState } from 'react';
import { Smile, Heart, CloudFog, User, Droplet } from 'lucide-react';

const Advertisement = () => {
  // Use state to make the interaction dynamic across the whole grid
  const [activeId, setActiveId] = useState(1);

  const categories = [
    {
      id: 1,
      title: "Child Rights & Education",
      icon: (isActive) => <Smile className={`w-14 h-14 transition-all duration-500 ${isActive ? 'text-sky-600 scale-110' : 'text-[#FF6A00]'}`} strokeWidth={1.5} />,
      bgColor: 'bg-sky-50 border-sky-200 shadow-sky-100',
      activeGlow: 'rgba(14,165,233,0.15)'
    },
    {
      id: 2,
      title: "Livelihood",
      icon: (isActive) => <Heart className={`w-14 h-14 transition-all duration-500 ${isActive ? 'text-rose-600 scale-110' : 'text-[#FF6A00]'}`} strokeWidth={1.5} />,
      bgColor: 'bg-rose-50 border-rose-200 shadow-rose-100',
      activeGlow: 'rgba(244,63,94,0.15)'
    },
    {
      id: 3,
      title: "Climate Change",
      icon: (isActive) => <CloudFog className={`w-14 h-14 transition-all duration-500 ${isActive ? 'text-emerald-600 scale-110' : 'text-[#FF6A00]'}`} strokeWidth={1.5} />,
      bgColor: 'bg-emerald-50 border-emerald-200 shadow-emerald-100',
      activeGlow: 'rgba(16,185,129,0.15)'
    },
    {
      id: 4,
      title: "Women Empowerment",
      icon: (isActive) => <User className={`w-14 h-14 transition-all duration-500 ${isActive ? 'text-purple-600 scale-110' : 'text-[#FF6A00]'}`} strokeWidth={1.5} />,
      bgColor: 'bg-purple-50 border-purple-200 shadow-purple-100',
      activeGlow: 'rgba(168,85,247,0.15)'
    },
    {
      id: 5,
      title: "Health & Sanitation",
      icon: (isActive) => <Droplet className={`w-14 h-14 transition-all duration-500 ${isActive ? 'text-amber-600 fill-amber-500/20 scale-110' : 'text-[#FF6A00]'}`} strokeWidth={1.5} />,
      bgColor: 'bg-amber-50 border-amber-200 shadow-amber-100',
      activeGlow: 'rgba(245,158,11,0.15)'
    },
  ];

  const currentActiveItem = categories.find(item => item.id === activeId) || categories[0];

  return (
    <div 
      className="relative w-full h-[40vh] min-h-[550px] bg-[#FAF9F5] flex flex-col items-center justify-center overflow-hidden font-sans border-b-[6px] border-[#1E293B] transition-all duration-700 ease-in-out"
      style={{
        backgroundColor: activeId ? '#FAF9F5' : '#FAF9F5',
        boxShadow: activeId ? `inset 0 0 100px ${currentActiveItem.activeGlow}` : 'none'
      }}
    >
      {/* Subtle Dynamic Grid/Dotted Background Effect */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none transition-all duration-500"
        style={{
          backgroundImage: `radial-gradient(#000 12%, transparent 12%)`,
          backgroundSize: '24px 24px',
          transform: `scale(${1 + (activeId * 0.01)})`
        }}
      />

      {/* Decorative Upper Framing */}
      <div className="absolute top-12 left-12 hidden md:block">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1E293B]/40">Our Pillars of Change</p>
      </div>

      {/* Main Interactive Grid Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 text-center items-center h-auto py-12">
        {categories.map((item) => {
          const isActive = item.id === activeId;
          
          return (
            <div 
              key={item.id} 
              className={`flex flex-col items-center justify-between group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] h-64 md:h-72 lg:h-80 select-none
                ${isActive 
                  ? `${item.bgColor} scale-105 -translate-y-4 shadow-xl z-20` 
                  : 'bg-white/50 border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg hover:-translate-y-2 z-10'
                }`}
              onMouseEnter={() => setActiveId(item.id)}
            >
              
              {/* Top empty space to help push items nicely in the fixed-height card structure */}
              <div className="h-4" />

              {/* Animated Icon Container */}
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-500 ease-out relative
                  ${isActive 
                    ? 'bg-white shadow-md' 
                    : 'bg-[#F5EFE6] group-hover:bg-[#EFE7D9] group-hover:rotate-6'
                  }`}
              >
                {/* Micro ripple effect layer behind icon */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-current opacity-5 pointer-events-none" />
                )}
                {item.icon(isActive)}
              </div>

              {/* Typography Structure */}
              <div className="mt-auto w-full">
                <p className={`font-bold text-sm md:text-base lg:text-[17px] leading-snug transition-colors duration-300 mx-auto max-w-[150px]
                  ${isActive ? 'text-[#1E293B]' : 'text-[#1E293B]/70 group-hover:text-[#1E293B]'}`}>
                  {item.title}
                </p>
                
                {/* Active Indicator Bar beneath the text */}
                <div className={`h-[3px] mx-auto rounded-full mt-3 transition-all duration-500 bg-[#FF6A00]
                  ${isActive ? 'w-10 opacity-100' : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-50'}`} 
                />
              </div>

            </div>
          );
        })}
      </div>

      {/* Dynamic Smart Indicator Accent - Follows the color theme profile of active card */}
      <div 
        className="absolute bottom-12 right-0 w-6 h-12 rounded-l-full transition-all duration-500 ease-out hidden sm:block" 
        style={{
          backgroundColor: isActiveColor(activeId),
          transform: `translateY(${activeId * -4}px)`
        }}
      />
    </div>
  );
};

// Helper to update context helper elements dynamically 
function isActiveColor(id) {
  switch(id) {
    case 1: return '#0284c7'; // Sky
    case 2: return '#e11d48'; // Rose
    case 3: return '#059669'; // Emerald
    case 4: return '#9333ea'; // Purple
    case 5: return '#d97706'; // Amber
    default: return '#FF6A00';
  }
}

export default Advertisement;