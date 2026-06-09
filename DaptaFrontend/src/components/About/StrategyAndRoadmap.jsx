// src/components/About/StrategyAndRoadmap.jsx
import React from 'react';

const StrategyAndRoadmap = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Optional Heading Section */}
      <div className="text-center space-y-2 select-none">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight uppercase">
          Our Strategic Core
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-lime-500 mx-auto rounded-full"></div>
      </div>

      {/* Grid Layout: Stacks on mobile, splits into 2 columns on medium/large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* MISSION CARD */}
        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
          {/* Subtle top background highlight on hover */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 transform origin-left transition-transform duration-300"></div>
          
          <div className="space-y-4">
            {/* Header Icon & Title */}
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-amber-50 text-amber-600 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white">
                {/* Dynamic Target/Mission Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 tracking-wide uppercase group-hover:text-amber-600 transition-colors duration-200">
                Mission
              </h3>
            </div>

            {/* Statement Content */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              DAPTA’s Mission is to work with marginalized poor to alleviate poverty by overcoming injustice and inequity that causes it and to lead a meaningful life with sustainable protected environment and bio-diversity.
            </p>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute -bottom-6 -right-6 text-amber-100/40 font-black text-7xl uppercase pointer-events-none select-none tracking-tighter transition-transform duration-500 group-hover:scale-110">
            GOAL
          </div>
        </div>

        {/* VISION CARD */}
        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
          {/* Subtle top background highlight on hover */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-lime-500 to-emerald-500 transform origin-left transition-transform duration-300"></div>
          
          <div className="space-y-4">
            {/* Header Icon & Title */}
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-lime-50 text-lime-600 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-white">
                {/* Dynamic Eye/Vision Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 tracking-wide uppercase group-hover:text-lime-600 transition-colors duration-200">
                Vision
              </h3>
            </div>

            {/* Statement Content */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
              DAPTA’s vision is that marginalized poor in India can live without poverty and access to equal opportunities.
            </p>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute -bottom-6 -right-6 text-lime-100/40 font-black text-7xl uppercase pointer-events-none select-none tracking-tighter transition-transform duration-500 group-hover:scale-110">
            HOPE
          </div>
        </div>

      </div>

      {/* Future Roadmap Placeholder */}
      {/* Kept here cleanly structural just in case you uncomment and deploy your image asset later */}
      {/* 
      <div className="pt-6 border-t border-dashed border-gray-200 flex justify-center">
        <img src={strategy} alt="Strategy and Roadmap Blueprint" className="w-full max-w-3xl rounded-xl shadow-md" />
      </div>
      */}
    </div>
  );
};

export default StrategyAndRoadmap;