// src/components/About/FounderNote.jsx
import React, { useState } from 'react';

const FounderNote = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 px-2 sm:px-4">
      
      {/* Section Heading matching image_347407.png layout */}
      <div className="flex items-center justify-center space-x-3 pb-2 select-none">
        <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-lime-500 inline-block animate-pulse"></span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-amber-500 text-white px-4 sm:px-6 py-1.5 tracking-wider uppercase shadow-sm transform hover:scale-105 transition-transform duration-300">
          Secretary's Voice
        </h2>
        <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-lime-500 inline-block animate-pulse"></span>
      </div>

      {/* Main Content Area Container */}
      <div className="relative text-gray-700 text-sm md:text-base leading-relaxed text-justify font-normal px-4 sm:px-8 md:px-12 py-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
        
        {/* Decorative Quote Marks from image_347407.png */}
        <span className="absolute left-1 sm:left-3 top-0 text-4xl md:text-6xl font-serif text-amber-500/20 select-none">“</span>
        <span className="absolute right-1 sm:right-3 bottom-16 sm:bottom-20 text-4xl md:text-6xl font-serif text-amber-500/20 select-none">”</span>

        {/* Responsive Portrait Layout Section */}
        {/* Floats right on desktops/tablets, centers cleanly at the top on small mobile viewports */}
        <div className="w-full sm:w-auto sm:float-right flex justify-center sm:block sm:ml-6 mb-6 sm:mb-4 md:mb-6 shape-outside-circle group">
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-amber-400 via-orange-400 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] group-hover:rotate-1">
            
            {/* Soft inner ambient glow effect */}
            <div className="absolute inset-0 rounded-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
            
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
              alt="Raju Sharma" 
              className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300/e0f2fe/0369a1?text=Secretary";
              }}
            />
          </div>
        </div>

        {/* Letter Body Segment extracted exactly from image_347407.png */}
        <div className="space-y-4">
          <p className="pt-2">
            I am happy to describe 25th eventful journey of DAPTA in Sustainable Development World. Born as a Development support Organization, it has diversified its role in order to develop & empower deprived community and poor people.
          </p>
          
          <p>
            Since its inception, the organization has given priority to Women Empowerment and development of tribal people in the Dist. of Kalahandi & in other Tribal District of Odisha. As Kalahandi has several problems which is affecting poor and tribal of Kalahandi, DAPTA as a development organization has given more focus to work on these issues with the involvement of community.
          </p>

          {/* Collapsible Section for Mobile Optimization */}
          {/* Smooth opacity & max-height transition behavior */}
          <div className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[1000px] opacity-100 visible' : 'max-h-0 sm:max-h-[1000px] opacity-0 sm:opacity-100 invisible sm:visible'
          }`}>
            <p>
              Witnessing the field reality DAPTA is working with some network partners for the empowerment of women in Kalahandi as well as at Kandhamal & Deogarh district of Odisha. Also this year DAPTA has studied the socio economic status of one block of Deogarh and one block of Nabarangpur district of Odisha for future intervention if needed.
            </p>
            
            <p>
              DAPTA believes on work & Sky is not the limit. We feel pain of poor & neglected people in heart & believe to work accordingly.
            </p>
          </div>
        </div>

        {/* Interactive "Read More" Button - Visible only on mobile screens (< 640px) */}
        <div className="sm:hidden flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-semibold uppercase tracking-wider text-amber-600 hover:text-amber-700 focus:outline-none bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 transition-colors duration-200"
          >
            {isExpanded ? 'Read Less ▲' : 'Read Full Message ▼'}
          </button>
        </div>

        {/* Sign-off Valediction Block from image_347407.png */}
        <div className="mt-8 pt-6 text-center clear-both border-t border-dashed border-gray-100">
          <h4 className="text-gray-900 font-bold text-lg tracking-wide transform hover:text-amber-600 transition-colors duration-200 inline-block cursor-default">
            Raju Sharma
          </h4>
          <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wider mt-1 uppercase">
            -- Secretary --
          </p>
        </div>

      </div>
    </div>
  );
};

export default FounderNote; 