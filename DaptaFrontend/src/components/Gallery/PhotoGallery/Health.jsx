import React from 'react';

const Health = () => {
  // Master database for regional healthcare outreach operations, camps, and clinic deployments
  const healthPrograms = [
    {
      id: 1,
      initiative: "Maternal Health & Screening Camp",
      block: "Lanjigarh Block Clinics",
      schedule: "Bi-Weekly Outreach",
      focus: "Antenatal Care & Nutrition",
      badge: "Active Field Operations",
      themeColor: "rose",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
      overview: "Deploying critical healthcare tracking networks, basic diagnostic services, and comprehensive preventative maternal checkups for vulnerable tribal sectors."
    },
    {
      id: 2,
      initiative: "Child Nutrition & Micro-Nutrient Drive",
      block: "M. Rampur Anganwadi Units",
      schedule: "Monthly Distribution",
      focus: "Combating Malnutrition",
      badge: "Scheduled Rollout",
      themeColor: "amber",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
      overview: "Distributing balanced nutritional baseline kits, fortified dietary components, and tracking local child growth indicators across regional forest clusters."
    },
    {
      id: 3,
      initiative: "Clean Water & Sanitation Advocacy",
      block: "District-Wide Panchayats",
      schedule: "Continuous Program",
      focus: "Waterborne Disease Prevention",
      badge: "Community Literacy",
      themeColor: "sky",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      overview: "Conducting field chlorination workshops, setting up bio-sand filtration checkpoints, and hosting localized hygiene awareness campaigns in remote villages."
    }
  ];

  // System styling registry for the healthcare module
  const getHealthStyles = (color) => {
    const config = {
      rose: { badge: "bg-rose-50 text-rose-700 border-rose-100", accent: "text-rose-500", indicator: "bg-rose-500" },
      amber: { badge: "bg-amber-50 text-amber-700 border-amber-100", accent: "text-amber-500", indicator: "bg-amber-500" },
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", accent: "text-sky-500", indicator: "bg-sky-500" }
    };
    return config[color] || config.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header Block */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
            Welfare Layer
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Health & Nutrition Interventions
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Tracking our continuous healthcare clinics, baseline medical camps, and grassroots nutritional distribution networks deployed across remote block areas.
          </p>
        </div>

        {/* 3-Column Health Cards Responsive Matrix */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthPrograms.map((item) => {
            const styles = getHealthStyles(item.themeColor);
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Cover Visual Layout */}
                  <div className="w-full h-44 overflow-hidden bg-gray-100 relative">
                    <img 
                      src={item.image} 
                      alt={item.initiative}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                    {/* Status Pill Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-md bg-white/90 ${styles.badge}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Core Context Content Space */}
                  <div className="p-6">
                    {/* Metric Target Category Sub-head */}
                    <span className="text-[11px] font-extrabold uppercase text-gray-400 tracking-wider block mb-1">
                      Focus: {item.focus}
                    </span>

                    {/* Initiative Main Title */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors tracking-tight leading-snug">
                      {item.initiative}
                    </h3>

                    {/* Meta Detail Tags List */}
                    <div className="mt-3 space-y-1.5 border-l-2 border-gray-100 pl-2.5 py-0.5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold">
                        <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className="truncate">{item.block}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{item.schedule}</span>
                      </div>
                    </div>

                    {/* Overview Text Summary */}
                    <p className="text-gray-600 text-xs sm:text-sm mt-3.5 leading-relaxed">
                      {item.overview}
                    </p>
                  </div>
                </div>

                {/* Card Live Pipeline Verification Footer */}
                <div className="mx-6 mb-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${styles.indicator} animate-pulse`} />
                    <span>Live Tracking</span>
                  </div>
                  <span className="font-mono text-gray-300">H-0{item.id}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Health;