import React from 'react';

const Education = () => {
  // Master database mapping institutional tracks, academic profiles, or skill pathways
  const educationTimeline = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Maa Manikeshwari University (MMU)",
      timeline: "2023 - Present",
      stream: "Core Computing & Systems",
      badge: "Undergraduate Degree",
      themeColor: "sky",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
      highlights: "Specializing in full-stack architecture paradigms, smart contract compilation, data structures, and cross-platform UI/UX engineering frameworks."
    },
    {
      id: 2,
      degree: "Advanced Full-Stack Engineering Certification",
      institution: "Tech Stack Academy Pipeline",
      timeline: "2024",
      stream: "MERN Architecture & DevOps",
      badge: "Industry Specialization",
      themeColor: "purple",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      highlights: "Deep dive into production-grade MongoDB databases, Express pipelines, React lifecycles, Node layers, and standard Docker container workflows."
    },
    {
      id: 3,
      degree: "Regional Agricultural & Literacy Modules",
      institution: "Rangapadar Development Hub",
      timeline: "Continuous Program",
      stream: "Rural Field Training",
      badge: "Community Literacy",
      themeColor: "emerald",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
      highlights: "Coordinating open public training systems focusing on System of Rice Intensification (SRI), localized organic farming, and citizen rights awareness."
    }
  ];

  // UI Theme routing configuration
  const getTimelineStyles = (color) => {
    const config = {
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", point: "border-sky-500 bg-sky-500" },
      purple: { badge: "bg-purple-50 text-purple-700 border-purple-100", point: "border-purple-500 bg-purple-500" },
      emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-100", point: "border-emerald-500 bg-emerald-500" }
    };
    return config[color] || config.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header Area */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Knowledge Matrix
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Education & Training Pathway
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            A comprehensive registry of academic timelines, technical specializations, and regional community learning frameworks.
          </p>
        </div>

        {/* Structural Timeline Stack */}
        <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-10 pl-6 md:pl-8">
          {educationTimeline.map((item) => {
            const layout = getTimelineStyles(item.themeColor);
            return (
              <div key={item.id} className="relative group">
                
                {/* Absolute Positioning Axis Point Indicator */}
                <span className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm ring-4 ring-gray-50 transition-transform group-hover:scale-110 duration-200 ${layout.point}`} />

                {/* Main Information Container */}
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden grid sm:grid-cols-12">
                  
                  {/* Left Column: Visual Asset Layer */}
                  <div className="sm:col-span-4 h-40 sm:h-auto min-h-[140px] bg-gray-100 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.institution}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 absolute inset-0"
                      loading="lazy"
                    />
                  </div>

                  {/* Right Column: Text Information Body */}
                  <div className="sm:col-span-8 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      {/* Meta Tags Header Segment */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border ${layout.badge}`}>
                          {item.badge}
                        </span>
                        <span className="font-mono text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {item.timeline}
                        </span>
                      </div>

                      {/* Primary Degree Title */}
                      <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-sky-600 transition-colors tracking-tight leading-snug">
                        {item.degree}
                      </h3>

                      {/* Institution & Stream Sub-Row */}
                      <p className="text-xs font-bold text-gray-700 mt-1 flex flex-wrap items-center gap-1.5">
                        <span>{item.institution}</span>
                        <span className="text-gray-300 hidden sm:inline">|</span>
                        <span className="text-gray-500 font-medium italic">{item.stream}</span>
                      </p>

                      {/* Detailed Description Block */}
                      <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                        {item.highlights}
                      </p>
                    </div>

                    {/* Quality Assurance Status Indicator Footer */}
                    <div className="mt-5 pt-3 border-t border-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-between">
                      <span>Status: Attested Record</span>
                      <span>Track-0{item.id}</span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Education;