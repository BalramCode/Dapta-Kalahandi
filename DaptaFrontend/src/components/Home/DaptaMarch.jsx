import React from 'react';

const DaptaMarch = () => {
  const concerns = [
    {
      title: "RIGHT TO FOOD",
      desc: "protecting the right for people to feed themselves in dignity.",
      icon: (
        <svg className="w-12 h-12 text-slate-800 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-8.03c2.09-.13 3.75-1.85 3.75-3.97V2h-2v7zm5-3c0-2.21-1.79-4-4-4v10c2.21 0 4-1.79 4-4V6z"/>
        </svg>
      )
    },
    {
      title: "RIGHT TO LAND",
      desc: "Rights of indigenous peoples to land, individually or collectively.",
      icon: (
        <svg className="w-12 h-12 text-[#00b4d8] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "RIGHT TO HEALTH",
      desc: "Right to standard physical and mental health.",
      icon: (
        <svg className="w-12 h-12 text-[#00b4d8] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: "WOMEN RIGHTS",
      desc: "Rights and entitlements claimed for women and girls worldwide.",
      icon: (
        <svg className="w-12 h-12 text-[#00b4d8] group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </svg>
      )
    },
    {
      title: "CHILD RIGHTS",
      desc: "Rights of special protection and care afforded to minors.",
      icon: (
        <svg className="w-12 h-12 text-[#00b4d8] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "FOREST RIGHTS",
      desc: "The Scheduled Tribes and Other Traditional Forest Dwellers.",
      icon: (
        <svg className="w-12 h-12 text-[#00b4d8] group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V7a4 4 0 00-8 0v4c0 2.476.66 4.761 1.796 6.74M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className="relative w-full py-20 md:py-28 bg-cover bg-center overflow-hidden flex flex-col items-center justify-center font-sans"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop')`
      }}
    >
      <div className="max-w-6xl w-full mx-auto px-6 text-center z-10 space-y-12">
        
        {/* Section Header with crisp pixel spacing */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider text-[#00b4d8] uppercase drop-shadow-md">
          Our Concern
        </h2>

        {/* 3-Column Responsive Grid Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {concerns.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white px-6 py-12 rounded-none flex flex-col items-center text-center justify-start min-h-[280px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Top Central Icon Placement Container with Micro-Interactivity */}
              <div className="mb-6 flex items-center justify-center h-16 w-16 bg-slate-50 rounded-full group-hover:bg-sky-50 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Exact Green Subsection Heading */}
              <h3 className="text-lg font-extrabold text-[#7cb524] tracking-wide mb-3 uppercase transition-colors duration-300 group-hover:text-[#6aa21e]">
                {item.title}
              </h3>

              {/* Lowercase Descriptive Sub-text */}
              <p className="text-gray-600 text-[14px] md:text-[14.5px] leading-relaxed max-w-xs font-normal transition-colors duration-300 group-hover:text-gray-900">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DaptaMarch;