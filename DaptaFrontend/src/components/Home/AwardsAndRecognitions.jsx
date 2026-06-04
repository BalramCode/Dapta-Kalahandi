import React, { useEffect, useState, useRef } from 'react';

const AwardsAndRecognitions = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const sectionRef = useRef(null);

  const awards = [
    { id: 1, src: 'https://images.unsplash.com/photo-1496469888073-80de7e9527c6?q=80&w=600&auto=format&fit=crop', title: 'National Leadership Honor', year: '2025' },
    { id: 2, src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop', title: 'Rural Sanitation Medal', year: '2025' },
    { id: 3, src: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=600&auto=format&fit=crop', title: 'Community Impact Trophy', year: '2024' },
    { id: 4, src: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop', title: 'Women Empowerment Shield', year: '2024' },
    { id: 5, src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop', title: 'NGO Transparency Certificate', year: '2023' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop', title: 'Tribal Agriculture Award', year: '2023' },
    { id: 7, src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop', title: 'Best Healthcare Initiative', year: '2022' },
    { id: 8, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop', title: 'Social Integration Award', year: '2022' },
    { id: 9, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop', title: 'Regional Development Crest', year: '2021' },
  ];

  // Set up Viewport Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#E65C19] py-20 px-4 md:px-8 text-white font-sans overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Heading */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out transform ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Awards & Recognition
          </h2>
          <p className="text-orange-100 text-sm md:text-base font-medium max-w-md mx-auto">
            Honors and milestones achieved alongside our rural and tribal community stakeholders.
          </p>
        </div>

        {/* Smooth Scrolling / Horizontal Flex Row Container */}
        <div className="w-full overflow-x-auto pb-8 flex gap-6 px-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-orange-800/30 [&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full">
          {awards.map((award, index) => (
            <div 
              key={award.id} 
              onClick={() => setSelectedAward(award)}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`flex-shrink-0 snap-center group cursor-pointer flex flex-col items-center space-y-4 transition-all duration-700 transform
                ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              {/* Dynamic Shape Shifting Container Frame */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 overflow-hidden border-4 border-white/20 group-hover:border-white rounded-2xl group-hover:rounded-full transition-all duration-500 ease-in-out shadow-xl bg-white/10 backdrop-blur-sm relative">
                <img
                  src={award.src}
                  alt={award.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                {/* Micro Hover Screen Shade overlay */}
                <div className="absolute inset-0 bg-[#1A2E40]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-slate-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-md">
                    View Close-up
                  </span>
                </div>
              </div>

              {/* Minimal Text Indicators underneath */}
              <div className="text-center max-w-[180px]">
                <h3 className="font-bold text-sm md:text-base tracking-tight line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {award.title}
                </h3>
                <span className="text-xs text-orange-200 font-medium">{award.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= INTERACTIVE LIGHTBOX MODAL CONTAINER ================= */}
      {selectedAward && (
        <div 
          className="fixed inset-0 z-50 bg-[#1A2E40]/80 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedAward(null)}
        >
          <div 
            className="bg-white rounded-3xl p-4 md:p-6 max-w-xl w-full text-slate-800 shadow-2xl relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Halts accidental bubble closes
          >
            {/* Modal Exit Button */}
            <button 
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all border-0 outline-none"
            >
              ✕
            </button>

            {/* Modal Image Display */}
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
              <img 
                src={selectedAward.src} 
                alt={selectedAward.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Description Details */}
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E65C19]">
                Award Recognition ({selectedAward.year})
              </span>
              <h4 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
                {selectedAward.title}
              </h4>
              <p className="text-slate-500 text-xs md:text-sm pt-2">
                This verification certificate represents official structural recognition from community boards and regulatory auditing committees.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsAndRecognitions;