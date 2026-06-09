import React from 'react';

const SustainableManagement = () => {
  // Livelihood & Natural Resource Management Initiatives Data
  const initiatives = [
    {
      title: "Land & Water Management Activities",
      location: "Kanarla village",
      metric: "35 Households Benefited",
      metricSub: "Kutia Kondh Tribal Community",
      description: "Executing contextual, site-specific soil restoration, erosion control, and localized water conservation structures.",
      impactDetails: "Directly transformed the resource security and farming outcomes for 35 ancestral households belonging to the vulnerable Kutia Kondh Community within Kanarla.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      accentColor: "from-teal-500 to-emerald-600",
      bgLight: "bg-teal-50/40",
      borderHover: "hover:border-teal-200",
      badgeColor: "bg-teal-100 text-teal-800"
    },
    {
      title: "Watershed Activities",
      location: "14 Tribal Villages",
      metric: "1,200 Hectares of Land",
      metricSub: "Spanning 14 target villages",
      description: "Implementing comprehensive watershed production systems to restore groundwater reserves, capture seasonal rainfall, and fix barren soils.",
      impactDetails: "Deployed structural land and water management infrastructure across 14 tribal villages, rehabilitating over 1,200 hectares of critical agricultural catchment area.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      accentColor: "from-blue-500 to-cyan-600",
      bgLight: "bg-blue-50/40",
      borderHover: "hover:border-blue-200",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Vegetable Promotion",
      location: "10 Villages (Market Linkages)",
      metric: "400 Women Farmers",
      metricSub: "Across 2 Active Co-operatives",
      description: "Promoting institutional visual selling and active farming through autonomous, highly organized women's agricultural collectives.",
      impactDetails: "Strengthening co-operative business development plans with hands-on technical support, while actively facilitating vital, high-yield market linkages across 10 rural villages.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      accentColor: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/40",
      borderHover: "hover:border-amber-200",
      badgeColor: "bg-amber-100 text-amber-900"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto my-12 md:my-20 px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gradient-to-b from-white via-gray-50/30 to-white rounded-3xl border border-gray-100/80 shadow-xs">
      
      {/* SECTION HEADER BLOCK */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 select-none">
        <div className="flex items-center justify-center space-x-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Ecology & Economy
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
          Livelihood Promotion & Natural Resource Management
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          DAPTA combines resource conservation with economic security, transforming degraded ecosystems into resilient hubs of micro-enterprise.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      {/* STRATEGIC THREE-COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-2xl border border-gray-100 shadow-xs ${item.borderHover} hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
          >
            {/* Top Linear Highlight Border */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.accentColor}`}></div>

            {/* Card Body Element Container */}
            <div className="p-6 sm:p-8 space-y-5">
              
              {/* Header Title Block */}
              <div className="flex items-start justify-between">
                <div className="space-y-1 max-w-[80%]">
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight leading-snug group-hover:text-gray-800 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center space-x-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <span>📍</span>
                    <span>{item.location}</span>
                  </div>
                </div>
                
                {/* Floating Round Modern Icon Wrapper */}
                <div className={`p-3 rounded-xl bg-gray-50 text-gray-500 group-hover:bg-gradient-to-br ${item.accentColor} group-hover:text-white transition-all duration-300 shadow-2xs`}>
                  {item.icon}
                </div>
              </div>

              {/* Information Paragraph Hierarchy */}
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed text-justify">
                <p className="font-medium text-gray-800">
                  {item.description}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {item.impactDetails}
                </p>
              </div>
            </div>

            {/* Program Impact Dashboard Footer Widget */}
            <div className={`p-5 ${item.bgLight} border-t border-gray-100/80 mt-auto flex flex-col space-y-1.5`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Resource & Livelihood Metrics
              </span>
              <div className="flex items-center justify-between gap-2">
                <div className={`px-3 py-1.5 rounded-lg ${item.badgeColor} font-extrabold text-xs sm:text-sm tracking-wide shadow-2xs whitespace-nowrap`}>
                  {item.metric}
                </div>
                <span className="text-xs font-semibold text-gray-500 tracking-tight text-right leading-tight">
                  {item.metricSub}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default SustainableManagement;