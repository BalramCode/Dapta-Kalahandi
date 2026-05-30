import React, { useEffect, useState, useRef } from 'react';

const ReportsAndReflections = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  // Set up intersection observer to trigger scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Optional: disconnect if you only want the animation to play once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#FAF6F0] py-16 md:py-24 overflow-hidden font-sans relative select-none"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        
        {/* ================= LEFT SIDE: SLIDES IN FROM LEFT ================= */}
        <div 
          className={`lg:col-span-6 relative flex items-center transition-all duration-1000 ease-out transform ${
            isIntersecting 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-16'
          }`}
        >
          {/* Coral Orange Textured Block Background with hand icon silhouettes */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[80%] h-[320px] bg-[#FF7D54] rounded-r-sm overflow-hidden opacity-95 shadow-md">
            {/* Embedded decorative background layout mimicking handprints */}
            <div className="w-full h-full opacity-10 grid grid-cols-4 gap-4 p-4 text-white">
              {[...Array(8)].map((_, i) => (
                <svg key={i} className={`w-12 h-12 ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a3 3 0 0 0-3 3v5.27a.75.75 0 0 1-1.5 0V7.5a1.5 1.5 0 0 0-3 0v7a7.5 7.5 0 0 0 15 0v-4a1.5 1.5 0 0 0-3 0v2.27a.75.75 0 0 1-1.5 0V5a3 3 0 0 0-3-3z"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Foreground Group Picture Card Frame */}
          <div className="relative z-10 ml-[15%] md:ml-[20%] w-[75%] max-w-[460px] bg-white p-2 shadow-xl border border-gray-100 rounded-sm group overflow-hidden">
            <img 
              src="image_2e6218.png" // Targets your local file assets stack explicitly
              alt="Solar Water Pump Youth Workshop Collective Group" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* ================= RIGHT SIDE: SLIDES IN FROM RIGHT ================= */}
        <div 
          className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left px-6 md:px-12 transition-all duration-1000 ease-out delay-100 transform ${
            isIntersecting 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-16'
          }`}
        >
          {/* Logo Floral Icon Indicator */}
          <div className="text-[#E76F51] mb-3 transition-transform duration-500 hover:rotate-45 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>
            </svg>
          </div>

          {/* Headline Heading Text Stack */}
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl font-medium text-[#222222] tracking-normal leading-tight">
              Reports and <br /> Reflections
            </h2>
            {/* The absolute styled brush highlight/underline bar asset */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 w-24 h-1 bg-[#FF7D54] rounded-full" />
          </div>

          {/* Interactive Navigation Action Buttons Group */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-4 w-full">
            
            {/* Action Item One: Case Studies */}
            <a 
              href="#case-studies" 
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF6A00] text-white flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#e05e00] group-hover:shadow-lg">
                {/* Smiley Face Svg Vector */}
                <svg className="w-7 h-7 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 text-[15px] font-medium tracking-wide border-b border-transparent group-hover:text-[#FF6A00] group-hover:border-[#FF6A00] transition-all duration-200">
                Case Studies
              </span>
            </a>

            {/* Action Item Two: Stories */}
            <a 
              href="#stories" 
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF6A00] text-white flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#e05e00] group-hover:shadow-lg">
                {/* Heart atop Open Book Svg Vector */}
                <svg className="w-7 h-7 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-gray-700 text-[15px] font-medium tracking-wide border-b border-transparent group-hover:text-[#FF6A00] group-hover:border-[#FF6A00] transition-all duration-200">
                Stories
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ReportsAndReflections;