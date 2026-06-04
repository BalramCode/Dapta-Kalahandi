import React, { useState } from 'react';

const OurActivity = () => {
  const allActivities = [
    { 
      id: 1, 
      title: "Women Resource Centre: Empowering Women for Social and Economic Transformation", 
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", 
      category: "Women Empowerment" 
    },
    { 
      id: 2, 
      title: "Inclusive Governance: Landscape-Based Planning and Participatory Tools", 
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop", 
      category: "Local Governance" 
    },
    { 
      id: 3, 
      title: "Leadership and Participation of Women in Local Governance", 
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop", 
      category: "Women Leadership" 
    },
    { 
      id: 4, 
      title: "Sustainable Agriculture: Improving Livelihood Security for Tribal Farmers", 
      imageUrl: "https://images.unsplash.com/photo-1592997571659-0b21ff64313b?q=80&w=1000&auto=format&fit=crop", 
      category: "Tribal Farming" 
    },
    { 
      id: 5, 
      title: "Community-Led Health Initiative: Maternal and Child Care across Villages", 
      imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop", 
      category: "Rural Health" 
    },
    { 
      id: 6, 
      title: "Youth Skill Empowerment: Vocational Training and Capacity Building", 
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop", 
      category: "Youth Skills" 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // This temporary trigger handles smooth CSS entry animations during item switching
  const [animateTrigger, setAnimateTrigger] = useState(true);

  const handleTopicSelection = (index) => {
    if (index === activeIndex) return;
    setAnimateTrigger(false);
    
    // Tiny delay ensures the elements re-render into a smooth entry-fade transition state
    setTimeout(() => {
      setActiveIndex(index);
      setAnimateTrigger(true);
    }, 120);
  };

  return (
    <section className="w-full min-h-screen bg-[#F9F6F0] py-8 px-4 md:px-12 font-sans select-none flex flex-col justify-between text-slate-900">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto w-full text-center border-b-2 border-slate-200 pb-6 mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E76F51] block mb-1">
          Our Main Work
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
          What We Do For Our Communities
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Tap on any topic below to see what we are doing together in our villages.
        </p>
      </div>

      {/* 2. Main Work Layout Area */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
        
        {/* LEFT / TOP MENU: Large Selection Grid */}
        <div className="lg:col-span-5 space-y-3">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 lg:text-left text-center">
            Choose a Programme Topic:
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {allActivities.map((activity, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={activity.id}
                  onClick={() => handleTopicSelection(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-between border-2 outline-none transform
                    ${isSelected 
                      ? 'bg-[#1A2E40] border-[#1A2E40] text-white shadow-md -translate-y-0.5 lg:translate-x-1' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 active:bg-slate-100'}`}
                >
                  <div className="flex flex-col">
                    <span className={`text-[11px] uppercase tracking-wider font-bold mb-0.5 ${isSelected ? 'text-amber-400' : 'text-[#E76F51]'}`}>
                      {activity.category}
                    </span>
                    <span className="line-clamp-1 font-bold">{activity.title}</span>
                  </div>
                  
                  {/* Radio Indicator */}
                  <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 transition-colors duration-300
                    ${isSelected ? 'border-amber-400 bg-amber-400' : 'border-slate-300 bg-white'}`}>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#1A2E40]" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT / BOTTOM FRAME: Large Smooth Animation Spotlight Card */}
        <div className="lg:col-span-7 h-full">
          <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between h-full min-h-[500px]">
            
            {/* Dynamic Interactive Image Container Wrapper */}
            <div className="relative w-full aspect-[16/9] bg-slate-100 border-b border-slate-100 overflow-hidden">
              <img 
                src={allActivities[activeIndex].imageUrl} 
                alt={allActivities[activeIndex].title} 
                className={`w-full h-full object-cover block transition-all duration-500 ease-out transform
                  ${animateTrigger ? 'opacity-100 scale-100 blur-0' : 'opacity-40 scale-105 blur-[2px]'}`}
              />
              <span className="absolute top-4 left-4 bg-[#E76F51] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                {allActivities[activeIndex].category}
              </span>
            </div>

            {/* Dynamic Content Details Box */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between items-start space-y-6">
              <div className={`space-y-3 transition-all duration-500 ease-out transform w-full
                ${animateTrigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block">
                  Programme Details
                </span>
                <h3 className="text-xl md:text-3xl font-black text-slate-800 leading-snug">
                  {allActivities[activeIndex].title}
                </h3>
              </div>

              {/* Action Footer */}
              <div className="w-full pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 italic text-center sm:text-left">
                  * Community leaders can request training resource packs for this topic.
                </p>
                <button className="w-full sm:w-auto bg-[#3197D6] hover:bg-[#2786C2] active:scale-[0.97] text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-md">
                  Read Full Story ➔
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default OurActivity;