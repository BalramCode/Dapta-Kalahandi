import React, { useEffect, useState, useRef } from 'react';

const ReportsAndReflections = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [activeTab, setActiveTab] = useState('case-studies'); // 'case-studies' or 'stories'
  const [animateContent, setAnimateContent] = useState(true);
  const sectionRef = useRef(null);

  // Data map matching the selected tab context
  const tabData = {
    'case-studies': {
      title: "Case Studies",
      description: "In-depth, data-driven assessments of our community infrastructure models, field trials, and long-term economic transformation frameworks.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
      altText: "Community field survey work and data validation tables",
      accentRotation: "rotate-0"
    },
    'stories': {
      title: "Field Stories",
      description: "First-hand personal journals, spoken narratives, and reflections shared by local community leaders, farmers, and youths across the regions.",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
      altText: "Local youth collective talking outdoors in a village setting",
      accentRotation: "rotate-6 scale-105"
    }
  };

  // Intersection observer to animate components cleanly into view when scrolled to
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Soft cross-fade micro-interaction handler for switching active context tabs
  const handleTabChange = (tabKey, e) => {
    e.preventDefault();
    if (activeTab === tabKey) return;
    
    setAnimateContent(false);
    setTimeout(() => {
      setActiveTab(tabKey);
      setAnimateContent(true);
    }, 150);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#FAF6F0] py-16 md:py-24 overflow-hidden font-sans relative select-none"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 px-4 md:px-8">
        
        {/* ================= LEFT SIDE: DYNAMIC IMAGE BLOCK (SLIDES IN FROM LEFT) ================= */}
        <div 
          className={`lg:col-span-6 relative flex items-center justify-center lg:justify-start transition-all浏览 duration-1000 ease-out transform ${
            isIntersecting 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-12 md:-translate-x-16'
          }`}
        >
          {/* Coral Orange Background Block - Reacts dynamically to state shifts */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[85%] md:w-[80%] h-[280px] md:h-[340px] bg-[#FF7D54] rounded-2xl overflow-hidden opacity-95 shadow-md transition-all duration-500 ease-in-out ${tabData[activeTab].accentRotation}`}>
            {/* Pattern Mesh Overlay */}
            <div className="w-full h-full opacity-[0.08] grid grid-cols-4 gap-4 p-4 text-white">
              {[...Array(8)].map((_, i) => (
                <svg key={i} className={`w-12 h-12 transition-transform duration-500 ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'} ${activeTab === 'stories' ? 'scale-110' : 'scale-100'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a3 3 0 0 0-3 3v5.27a.75.75 0 0 1-1.5 0V7.5a1.5 1.5 0 0 0-3 0v7a7.5 7.5 0 0 0 15 0v-4a1.5 1.5 0 0 0-3 0v2.27a.75.75 0 0 1-1.5 0V5a3 3 0 0 0-3-3z"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Picture Framing Container with Soft Cross-fade Animation state */}
          <div className={`relative z-10 ml-[10%] md:ml-[15%] w-[80%] max-w-[450px] bg-white p-3 shadow-2xl border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 transform
            ${animateContent ? 'opacity-100 scale-100 blur-0' : 'opacity-40 scale-98 blur-[1px]'}`}
          >
            <div className="overflow-hidden rounded-lg aspect-[4/3] w-full bg-slate-100">
              <img 
                src={tabData[activeTab].imageUrl}
                alt={tabData[activeTab].altText} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: DYNAMIC WORKSPACE (SLIDES IN FROM RIGHT) ================= */}
        <div 
          className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left px-4 md:px-8 transition-all duration-1000 ease-out delay-100 transform ${
            isIntersecting 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-12 md:translate-x-16'
          }`}
        >
          {/* Actionable Identity Badge Component */}
          <div 
            onClick={() => setActiveTab(activeTab === 'case-studies' ? 'stories' : 'case-studies')}
            className="text-[#E76F51] bg-[#E76F51]/10 p-3 rounded-full mb-4 transition-all duration-300 hover:rotate-90 hover:bg-[#E76F51]/20 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>
            </svg>
          </div>

          {/* Title Area */}
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#222222] tracking-tight leading-tight">
              Reports and <br /> Reflections
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-20 h-1 bg-[#FF7D54] rounded-full" />
          </div>

          {/* Smooth Explanatory Block Paragraph - Updates Content Dynamically based on State selection */}
          <div className="w-full min-h-[72px] mb-8">
            <p className={`text-slate-600 text-sm md:text-base leading-relaxed transition-all duration-300
              ${animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              {tabData[activeTab].description}
            </p>
          </div>

          {/* Interactive Control Deck Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full pt-4 border-t border-slate-200/60">
            
            {/* Navigation Button One: Case Studies Trigger */}
            <button 
              onClick={(e) => handleTabChange('case-studies', e)}
              className="group flex items-center gap-3 w-full sm:w-auto bg-transparent border-0 outline-none cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-sm transition-all duration-300 transform group-hover:scale-105 group-active:scale-95
                ${activeTab === 'case-studies' ? 'bg-[#FF6A00] shadow-md ring-4 ring-[#FF6A00]/20' : 'bg-slate-400'}`}
              >
                <svg className="w-6 h-6 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className={`text-[15px] font-bold tracking-wide transition-colors duration-200 ${activeTab === 'case-studies' ? 'text-[#FF6A00]' : 'text-slate-600 group-hover:text-slate-800'}`}>
                  Case Studies
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Data Library</span>
              </div>
            </button>

            {/* Navigation Button Two: Stories Trigger */}
            <button 
              onClick={(e) => handleTabChange('stories', e)}
              className="group flex items-center gap-3 w-full sm:w-auto bg-transparent border-0 outline-none cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-sm transition-all duration-300 transform group-hover:scale-105 group-active:scale-95
                ${activeTab === 'stories' ? 'bg-[#FF6A00] shadow-md ring-4 ring-[#FF6A00]/20' : 'bg-slate-400'}`}
              >
                <svg className="w-6 h-6 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className={`text-[15px] font-bold tracking-wide transition-colors duration-200 ${activeTab === 'stories' ? 'text-[#FF6A00]' : 'text-slate-600 group-hover:text-slate-800'}`}>
                  Field Stories
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Journals</span>
              </div>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ReportsAndReflections;