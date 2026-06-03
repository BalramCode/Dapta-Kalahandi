import React from 'react';

const AwardAndCertifications = () => {
  // Master database for organizational achievements, honors, and formal compliance certifications
  const recognitionList = [
    {
      id: 1,
      title: "Excellence in Rural Development Award",
      issuer: "State Welfare Department",
      year: "2025",
      category: "Honorary Award",
      themeColor: "amber",
      image: "https://images.unsplash.com/photo-1496469888073-80de7f9b232a?auto=format&fit=crop&w=600&q=80",
      description: "Recognized for outstanding field deployment of sustainable water retention systems and successful community micro-finance infrastructure across regional blocks."
    },
    {
      id: 2,
      title: "ISO 9001:2015 Quality Management",
      issuer: "International Standards Authority",
      year: "2026",
      category: "Compliance Certification",
      themeColor: "sky",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      description: "Fully certified for maintaining strict transparent governance, standardized skill training frameworks, and high operational integrity metrics."
    },
    {
      id: 3,
      title: "Organic Cultivation Advocacy Citation",
      issuer: "National Agricultural Council",
      year: "2024",
      category: "Special Citation",
      themeColor: "emerald",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
      description: "Awarded for exceptional leadership in transferring System of Rice Intensification (SRI) practices to over 5,000 marginal tribal farm holdings."
    },
    {
      id: 4,
      title: "NGO Transparency and Trust Seal",
      issuer: "Credibility Alliance Network",
      year: "2026",
      category: "Accreditation",
      themeColor: "purple",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      description: "Granted the highest tier rating for institutional financial disclosure, public data reporting, and transparent grassroots resource distribution."
    }
  ];

  // Internal color palette routing based on target categories
  const getCategoryStyles = (color) => {
    const registry = {
      amber: { badge: "bg-amber-50 text-amber-700 border-amber-100", accent: "text-amber-500", border: "hover:border-amber-300" },
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", accent: "text-sky-500", border: "hover:border-sky-300" },
      emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-100", accent: "text-emerald-500", border: "hover:border-emerald-300" },
      purple: { badge: "bg-purple-50 text-purple-700 border-purple-100", accent: "text-purple-500", border: "hover:border-purple-300" }
    };
    return registry[color] || registry.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Track Record
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Awards & Certifications
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Our benchmarks of transparency, operational excellence, and formal validation received from accredited statutory bodies and state boards.
          </p>
        </div>

        {/* 2-Column Clean Grid Matrix */}
        <div className="grid md:grid-cols-2 gap-8">
          {recognitionList.map((item) => {
            const styles = getCategoryStyles(item.themeColor);
            return (
              <div 
                key={item.id}
                className={`bg-white rounded-2xl border border-gray-200/80 shadow-sm ${styles.border} transition-all duration-200 overflow-hidden flex flex-col group`}
              >
                {/* Visual Cover Layer representing Certificate / Verification Moment */}
                <div className="w-full h-48 sm:h-52 bg-gray-100 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border shadow-sm backdrop-blur-sm bg-white/90 ${styles.badge}`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Information Layout Segment */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Issuer and Year Details */}
                    <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                      <div className="flex items-center gap-1.5 truncate max-w-[80%]">
                        <svg className={`w-4 h-4 shrink-0 ${styles.accent}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span className="text-gray-700 truncate">{item.issuer}</span>
                      </div>
                      <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600 shrink-0">{item.year}</span>
                    </div>

                    {/* Recognition Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-sky-600 transition-colors tracking-tight">
                      {item.title}
                    </h3>

                    {/* Summary Description */}
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Audit / Integrity Footnote */}
                  <div className="mt-6 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    <span>Status: Verified Record</span>
                    <span className="font-mono text-gray-300">REF-0{item.id}</span>
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

export default AwardAndCertifications;