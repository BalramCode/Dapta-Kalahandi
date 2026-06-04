import React, { useEffect, useState, useRef } from 'react';

const LatestUpdates = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  const updates = [
    {
      id: 1,
      title: "Equipment Distribution for People with Disabilities",
      description: "Hosting community training workshops and distributing specialized mobility aids, assistive devices, and supportive equipment across remote rural clusters.",
      imageSrc: "https://images.unsplash.com/photo-1598252579339-c67b702e1b77?q=80&w=800&auto=format&fit=crop", 
      date: "May 28, 2026",
      tag: "Inclusion"
    },
    {
      id: 2,
      title: "Official Declaration of Three New ODF Villages",
      description: "Celebrating structural milestones as three local blocks achieve verified Open Defecation Free (ODF) status through community-led sanitation and water infrastructure.",
      imageSrc: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop", 
      date: "May 15, 2026",
      tag: "Sanitation"
    },
    {
      id: 3,
      title: "Swasthya Mela: Comprehensive Rural Health Fair",
      description: "Observation of our yearly Swasthya Mela at Baksandhi village, providing free pediatric checkups, maternal health resources, and preventative medicine camps.",
      imageSrc: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
      date: "April 30, 2026",
      tag: "Healthcare"
    }
  ];

  // Set up viewport tracking for scroll-triggered entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Triggers early when 10% of the section breaks the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#FAF6F0]/50 py-20 px-4 md:px-8 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Section Header */}
        <div 
          className={`text-center mb-14 transition-all duration-700 ease-out transform ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#E76F51] block mb-2">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A2E40] tracking-tight">
            News, Events & Blogs
          </h2>
          <div className="w-16 h-1 bg-[#E76F51] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3-Card Columns Layout Grid with staggered entry effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {updates.map((item, index) => (
            <div 
              key={item.id} 
              style={{ transitionDelay: `${index * 150}ms` }} // Staggers card arrival times
              className={`bg-white border border-slate-200/60 shadow-sm rounded-2xl flex flex-col justify-between overflow-hidden group transition-all duration-500 transform
                ${isIntersecting 
                  ? 'opacity-100 translate-y-0 shadow-sm' 
                  : 'opacity-0 translate-y-12'
                } 
                hover:shadow-xl hover:-translate-y-2 hover:border-slate-300`}
            >
              
              {/* Media Container with Zoom Micro-interaction */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating Category Tag */}
                <span className="absolute top-4 left-4 bg-[#1A2E40] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Text Context Body Frame */}
              <div className="p-6 flex flex-col items-start justify-between flex-1 min-h-[250px]">
                <div className="w-full space-y-3">
                  
                  {/* Card Metadata Date */}
                  <span className="text-xs font-semibold text-slate-400 block">
                    {item.date}
                  </span>

                  {/* Clean Headline Title */}
                  <h3 className="text-[#1A2E40] text-lg md:text-xl font-black leading-snug tracking-tight group-hover:text-[#3197D6] transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Body Snippet Excerpt */}
                  <p className="text-slate-600 text-sm font-medium leading-relaxed line-clamp-3 pr-1">
                    {item.description}
                  </p>
                </div>

                {/* Custom Action Interactive Button */}
                <div className="w-full pt-4 mt-4 border-t border-slate-100 flex justify-between items-center">
                  <button className="bg-[#3197D6] hover:bg-[#2786C2] active:scale-95 text-white text-[11px] font-bold py-2.5 px-5 rounded-lg shadow-sm transition-all uppercase tracking-wider outline-none">
                    Read More
                  </button>
                  
                  {/* Animated Arrow Accent */}
                  <span className="text-[#3197D6] font-bold transition-all duration-300 transform translate-x-0 group-hover:translate-x-1.5 opacity-0 group-hover:opacity-100 hidden sm:inline-block">
                    ➔
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;