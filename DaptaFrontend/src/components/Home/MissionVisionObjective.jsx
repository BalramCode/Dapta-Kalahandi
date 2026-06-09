import React, { useState } from 'react';

const MissionVisionObjective = () => {
  // Track active state between the main tabs
  const [activeTab, setActiveTab] = useState('objectives');

  const tabs = [
    {
      id: 'mission',
      title: 'Mission',
      accentColor: '#2A9D8F', // Emerald Teal
      glowClass: 'rgba(42,157,143,0.06)',
      text: 'Eradication of poverty through a People Centered action strongly emphasizing sustainable resource management, democratic institution building, and localized grassroot leadership programs.'
    },
    {
      id: 'vision',
      title: 'Vision',
      accentColor: '#F4A261', // Soft Coral/Orange
      glowClass: 'rgba(244,162,97,0.06)',
      text: 'Establishing a just, participatory and sustainable society, where each individual lives with complete dignity, deep self-respect, and uncompromised socioeconomic equality.'
    },
    {
      id: 'objectives',
      title: 'Aims & Objectives',
      accentColor: '#E76F51', // Burnt Sienna
      glowClass: 'rgba(231,111,81,0.06)',
      text: 'DAPTA is a poor, Rural & Tribal development organization. It is a non-political, secular, social service organization based on love of humanity and universal brotherhood. It’s activities are the upliftment of the poor, rural, tribal, scheduled castes, and other weaker sections. The association aims towards the self-reliance of the people rather than charity. It is a non-profit oriented organization leading people towards self-reliance, self-confidence, and self-dignity.'
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[2];

  // Action Areas data matched with three illustrative placeholder images
  const actionAreas = [
    {
      title: "Relief & Welfare Foundations",
      desc: "DAPTA emerged and developed during human crises with a strong relief and welfare approach.",
      img: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781018409/obj1_zgsxyd.jpg?auto=format&fit=crop&q=80&w=400",
      alt: "Community support and welfare distribution"
    },
    {
      title: "Education & Healthcare",
      desc: "We started our deep-rooted grassroot approach focusing extensively on local healthcare initiatives and rural education systems.",
      img: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781018409/obj2_e9jif9.jpg?auto=format&fit=crop&q=80&w=400",
      alt: "Children studying in a rural community school"
    },
    {
      title: "Empowerment & Sustainability",
      desc: "Gradually expanded into modern women empowerment frameworks, food security programs, and long-term sustainable ecosystem developments.",
      img: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781018408/obj3_kzbw0z.jpg?auto=format&fit=crop&q=80&w=400",
      alt: "Sustainable local farming and community empowerment"
    }
  ];

  return (
    <div 
      className="relative w-full bg-[#EBF1F5] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden font-sans border-b-[6px] border-slate-900 transition-all duration-700 ease-in-out"
      style={{
        boxShadow: activeTab ? `inset 0 0 120px ${currentTab.glowClass}` : 'none'
      }}
    >
      {/* Background Decorative Element */}
      <div className="absolute right-10 top-10 w-40 h-40 opacity-10 pointer-events-none hidden lg:block">
        <div className="w-full h-full rounded-full border-4 border-dashed border-slate-700 animate-[spin_40s_linear_infinite]" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 z-10 space-y-16 md:space-y-24">
        
        {/* SECTION 1: CORE FOUNDATIONS (TAB SYSTEM) */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500">Organizational Blueprint</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">
              What Drives Our Purpose
            </h2>
            <div className="w-16 h-[3px] mx-auto rounded-full transition-colors duration-500" style={{ backgroundColor: currentTab.accentColor }} />
          </div>

          {/* Interactive Navigation Triggers */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {tabs.map((tab) => {
              const isSelected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide shadow-sm transition-all duration-300 border ${
                    isSelected 
                      ? 'text-white border-transparent' 
                      : 'bg-white/80 text-slate-600 border-slate-200 hover:bg-white hover:text-slate-800'
                  }`}
                  style={{
                    backgroundColor: isSelected ? tab.accentColor : ''
                  }}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Core Text Terminal Showcase */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border-t-8 transition-all duration-500 relative overflow-hidden"
               style={{ borderTopColor: currentTab.accentColor }}>
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: currentTab.accentColor }} />
            <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-colors duration-300">
              {currentTab.title}
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light transition-all duration-300">
              {currentTab.text}
            </p>
          </div>
        </div>

        {/* SECTION 2: ACTION AREAS WITH RESPONSIVE IMAGES */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500">On-The-Ground Strategy</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800">
              Our Action Areas
            </h2>
            <div className="w-16 h-[3px] mx-auto bg-slate-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {actionAreas.map((area, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                
                {/* Visual Media Block */}
                <div className="h-44 w-full overflow-hidden relative bg-slate-200">
                  <img 
                    src={area.img} 
                    alt={area.alt}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center bg-slate-100 text-slate-700 text-xs font-bold w-6 h-6 rounded-full shrink-0">
                      {index + 1}
                    </span>
                    <h4 className="font-bold text-slate-800 text-lg tracking-tight">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light flex-grow">
                    {area.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionVisionObjective;