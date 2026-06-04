import React, { useState } from 'react';
import heroImg1 from "../../img/heroimg1.png";

const mapAsset = "image_2e78dd.jpg"; 

const OperationalAreas = () => {
  // We keep tracking simple: clicking a district pulls its data into view immediately.
  // We default to the first district so the screen is never blank or confusing.
  const [selectedIndex, setSelectedIndex] = useState(0);

  const districtsData = [
    { name: 'Kalahandi', projects: '14 Units', families: '4,200 Families', focus: 'Water Harvesting & Rights' },
    { name: 'Kandhamal', projects: '9 Units', families: '2,800 Families', focus: 'Tribal Agro-forestry' },
    { name: 'Nuapada', projects: '11 Units', families: '3,100 Families', focus: 'Migrant Labor Support' },
    { name: 'Bolangir', projects: '16 Units', families: '5,400 Families', focus: 'Socio-economic Lift' },
    { name: 'Koraput', projects: '12 Units', families: '3,900 Families', focus: 'Maternal Nutrition' },
    { name: 'Keonjhar', projects: '8 Units', families: '2,100 Families', focus: 'Child Rights & Schooling' }
  ];

  const currentData = districtsData[selectedIndex];

  return (
    <div className="w-full min-h-screen bg-[#F9F6F0] font-sans flex flex-col justify-between text-slate-900">
      
      {/* 1. Header Banner - Plain, Bold, High Contrast */}
      <div 
        className="w-full h-60 py-8 md:py-12 text-center px-4 border-b-4 border-[#8E5A3E]"
        style={{
          backgroundImage: `linear-gradient(rgba(54, 38, 32, 0.90), rgba(54, 38, 32, 0.90)), url(${heroImg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold tracking-wide">
          Where We Work (Our Operational Areas)
        </h2>
        <p className="text-amber-200 text-sm md:text-base mt-2 max-w-xl mx-auto font-medium">
          Click on any district button below to see our work and details.
        </p>
      </div>

      {/* 2. Main Work Layout - Responsive & Accessible Grid */}
      <div className="max-w-6xl mx-auto w-full px-4 py-6 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
        
        {/* Left Hand: District Choice Buttons */}
        <div className="lg:col-span-5 space-y-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Select Your District:
          </label>
          
          {/* Big buttons that are easy to press with a thumb or finger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {districtsData.map((district, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-150 flex items-center justify-between border-2 outline-none
                    ${isSelected 
                      ? 'bg-[#1A2E40] border-[#1A2E40] text-white shadow-md' 
                      : 'bg-white border-slate-300 text-slate-800 hover:border-slate-400 active:bg-slate-100'}`}
                >
                  <span>{district.name}</span>
                  
                  {/* Big clear radio-dot indicator */}
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                    ${isSelected ? 'border-amber-400 bg-amber-400' : 'border-slate-400 bg-white'}`}>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#1A2E40]" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Hand: Clear Information Display Card & Map Reference */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Information Display Panel */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm">
            <span className="text-xs font-bold text-[#E76F51] tracking-widest uppercase block mb-1">
              District Information Box
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 border-b pb-3 border-slate-100">
              {currentData.name} Region
            </h3>
            
            {/* Clean Data Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#F9F6F0] p-4 rounded-xl">
                <span className="text-xs font-semibold text-slate-500 uppercase block">Main Project Focus</span>
                <span className="text-base md:text-lg font-bold text-slate-800 block mt-0.5">{currentData.focus}</span>
              </div>

              <div className="bg-[#F9F6F0] p-4 rounded-xl">
                <span className="text-xs font-semibold text-slate-500 uppercase block">Total Impact Scope</span>
                <span className="text-base md:text-lg font-bold text-slate-800 block mt-0.5">{currentData.families}</span>
              </div>

              <div className="bg-[#F9F6F0] p-4 rounded-xl sm:col-span-2">
                <span className="text-xs font-semibold text-slate-500 uppercase block">Active Working Centres</span>
                <span className="text-base md:text-lg font-bold text-slate-800 block mt-0.5">{currentData.projects} active across villages</span>
              </div>
            </div>
          </div>

          {/* Static Map Graphic Display for Reference */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-center">
            <span className="text-xs font-medium text-slate-400 block mb-2">Regional Map View</span>
            <img 
              src={mapAsset}
              alt="Operational Region Map Representation" 
              className="max-h-[260px] mx-auto object-contain block opacity-90"
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default OperationalAreas;