import React from 'react';
import bgImage from "../../img/heroimg1.png";

const DaptaMarch = () => {
  const links = [
    { label: 'Who are With Us', href: '#who-are-with-us' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Stories', href: '#stories' },
  ];

  return (
    <section 
      className="relative w-full min-h-[450px] flex items-center bg-[#3A6066] overflow-hidden py-12 px-6 md:px-12 lg:px-24 font-sans select-none"
      style={{
        // Use the imported variable inside the template literal 👇
        backgroundImage: `linear-gradient(rgba(58, 96, 102, 0.85), rgba(58, 96, 102, 0.85)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Side: Dynamic Text Header */}
        <div className="lg:col-span-7 text-white space-y-3 text-center lg:text-left">
          <span className="text-xs md:text-sm tracking-[0.25em] font-semibold text-gray-200 uppercase block">
            Seba Jagat
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
            March towards a Non-Violent & PeacefulWorld
          </h2>
        </div>

        {/* Right Side: Navigation Menu Stack */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:ml-auto flex flex-col gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-stretch w-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {/* White Left-side Square with Orange Checkmark */}
              <div className="bg-white px-5 flex items-center justify-center min-h-[64px]">
                <svg 
                  className="w-4 h-4 text-[#E76F51] stroke-[3.5] transition-transform duration-200 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>

              {/* Dark Charcoal Menu Item Body */}
              <div className="bg-[#464646] hover:bg-[#4d4d4d] transition-colors duration-200 flex-1 flex items-center justify-center px-6 text-white font-medium text-sm md:text-base tracking-wide">
                {link.label}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Pattern Trim Border Simulation */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#8B4513] opacity-80 border-t border-yellow-700/30 flex items-center justify-around overflow-hidden pointer-events-none">
        {/* Subtle geometric repeating pattern structure */}
        {[...Array(30)].map((_, idx) => (
          <div key={idx} className="w-4 h-4 rounded-full border border-orange-300/20 transform rotate-45 scale-75 flex-shrink-0" />
        ))}
      </div>
    </section>
  );
};

export default DaptaMarch;