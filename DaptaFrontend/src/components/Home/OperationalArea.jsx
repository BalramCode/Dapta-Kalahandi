import React, { useState } from 'react';
import heroImg1 from "../../img/heroimg1.png";
// Explicitly referencing your file parameter for consistency
const mapAsset = "image_2e78dd.jpg"; 

const OperationalAreas = () => {
  // Track which district is currently hovered
  const [activeDistrict, setActiveDistrict] = useState(null);

  const districts = [
    'Kalahandi',
    'Kandhamal',
    'Nuapada',
    'Bolangir',
    'Koraput',
    'Keonjhar'
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden select-none">
      
      {/* Top Banner with Tribal Art Pattern Background */}
      <div 
        className="relative w-full h-[180px] md:h-[220px] flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(54, 38, 32, 0.88), rgba(54, 38, 32, 0.88)), url(${heroImg1})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Banner Heading Text */}
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-wide max-w-2xl leading-snug">
          An interactive <br className="sm:hidden" />
          <span className="font-normal">map highlighting </span>
          <span className="text-[#E76F51] font-normal">operational areas</span>
        </h2>

        {/* Floating White Tab ("Where we Work?") */}
        <div className="absolute bottom-0 left-[10%] md:left-[22%] translate-y-0 bg-white px-8 py-3.5 shadow-sm border-t border-x border-gray-100 rounded-t-sm hidden sm:block">
          <span className="text-[#1A2E40] text-sm font-bold tracking-wider whitespace-nowrap">
            Where we Work?
          </span>
        </div>
      </div>

      {/* Under-Banner Accent Line Structure */}
      <div className="w-full h-1.5 bg-[#8E5A3E] opacity-90"></div>

      {/* Bottom Main Content Block */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[350px]">
        
        {/* Left Side Column: Interactive Text & List */}
        <div className="md:col-span-6 flex flex-col items-center text-center md:items-end md:text-right md:pr-12 lg:pr-20">
          <h3 className="text-xl md:text-2xl font-normal text-[#4A4A4A] mb-5 tracking-wide">
            Operational Areas
          </h3>
          
          <ul className="space-y-3 w-full max-w-[200px] md:max-w-none">
            {districts.map((district, idx) => {
              const isSelected = activeDistrict === idx;
              return (
                <li 
                  key={idx} 
                  onMouseEnter={() => setActiveDistrict(idx)}
                  onMouseLeave={() => setActiveDistrict(null)}
                  className={`text-[15px] md:text-base tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-center md:justify-end gap-2 group`}
                >
                  {/* Subtle left-pointing indicator that fades in on hover */}
                  <span className={`w-1.5 h-1.5 rounded-full bg-[#E76F51] transition-all duration-300 transform ${
                    isSelected ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 translate-x-2'
                  }`} />
                  
                  <span className={`transition-colors duration-200 font-medium ${
                    isSelected ? 'text-[#E76F51] font-semibold scale-105' : 'text-[#888888] font-light'
                  }`}>
                    {district}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Side Column: Interactive Map Graphic Wrapper */}
        <div className="md:col-span-6 flex justify-center md:justify-start md:pl-4">
          <div className="relative max-w-[280px] md:max-w-[320px]">
            
            {/* Dynamic floating badge mimicking a real map popup tooltip */}
            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1A2E40] text-white text-xs px-3 py-1 rounded-md shadow-md transition-all duration-300 z-20 whitespace-nowrap pointer-events-none ${
              activeDistrict !== null ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
            }`}>
              {activeDistrict !== null ? `${districts[activeDistrict]} Region` : ''}
              {/* Tooltip little arrow tip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1A2E40]" />
            </div>

            {/* Interactive Image Frame */}
            <div 
              className={`relative overflow-hidden transition-all duration-500 rounded-lg bg-white ${
                activeDistrict !== null 
                  ? 'drop-shadow-[0_20px_25px_rgba(231,111,81,0.25)] scale-[1.03]' 
                  : 'drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]'
              }`}
            >
              {/* Map Illustration Render Layer using the explicit map asset */}
              <img 
                src={mapAsset}
                alt="Operational Region Map Representation" 
                className={`w-full h-auto object-contain block transition-all duration-500 ${
                  activeDistrict !== null ? 'brightness-[1.02] contrast-[1.05]' : 'brightness-100'
                }`}
              />

              {/* Dynamic Overlay Radial Pulse to fake a highlight coordinate location zone */}
              <div 
                className={`absolute inset-0 bg-gradient-to-tr from-[#E76F51]/10 to-transparent pointer-events-none transition-opacity duration-300 ${
                  activeDistrict !== null ? 'opacity-100' : 'opacity-0'
                }`} 
              />
            </div>

            {/* Subtle sub-caption instructing users */}
            <p className="text-center text-[11px] text-gray-400 mt-3 font-light tracking-wide italic">
              Hover over the list items to scan working zones
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};

export default OperationalAreas;