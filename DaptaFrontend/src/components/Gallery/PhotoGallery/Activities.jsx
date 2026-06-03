import React from 'react';

const Activities = () => {
  // Master array housing specific operational field interventions with active asset endpoints
  const activePrograms = [
    {
      id: "01",
      track: "Sustainable Agriculture",
      name: "System of Rice Intensification (SRI) Training",
      details: "Deploying high-efficiency SRI cultivation techniques to rural tribal clusters. Our field workshops guide farmers through optimized soil bedding, seed selection, and organic growth solutions.",
      marker: "Active Field Phase",
      markerColor: "emerald",
      coverImage: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "02",
      track: "Livelihood Security",
      name: "Women's Self-Help Group (SHG) Networks",
      details: "Supporting independent financial networks, micro-credit allocations, and market pipeline visibility platforms for female-led rural artisan and trade cooperatives.",
      marker: "Ongoing Operation",
      markerColor: "sky",
      coverImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "03",
      track: "Capacity Building",
      name: "Vocational Skills & Civic Training",
      details: "Hosting structured community development courses and resource planning assemblies at our dedicated Rangapadar Regional Hub to increase tribal self-advocacy.",
      marker: "Weekly Schedule",
      markerColor: "purple",
      coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "04",
      track: "Natural Resource Management",
      name: "Watershed & Rainwater Retention Systems",
      details: "Constructing community earthen dams, contours, and groundwater recharge structures to counter heavy dry-season water stress across high-altitude fields.",
      marker: "Seasonal Target",
      markerColor: "amber",
      coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Internal visual system style routing logic
  const parseBadgeTheme = (color) => {
    const registry = {
      emerald: { accent: "bg-emerald-50 text-emerald-700 border-emerald-100", bullet: "bg-emerald-500" },
      sky: { accent: "bg-sky-50 text-sky-700 border-sky-100", bullet: "bg-sky-500" },
      purple: { accent: "bg-purple-50 text-purple-700 border-purple-100", bullet: "bg-purple-500" },
      amber: { accent: "bg-amber-50 text-amber-700 border-amber-100", bullet: "bg-amber-500" }
    };
    return registry[color] || registry.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header Segment */}
        <div className="text-center md:text-left border-b border-gray-200 pb-6 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Operations Focus
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Our Core Activities
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            A comprehensive overview of our active ground-level programs, sustainable agricultural upgrades, 
            and socio-economic capacity building infrastructure.
          </p>
        </div>

        {/* Dynamic Split Row List Layout Stack */}
        <div className="space-y-6">
          {activePrograms.map((prog) => {
            const themes = parseBadgeTheme(prog.markerColor);
            return (
              <div 
                key={prog.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden grid md:grid-cols-12 gap-0 hover:shadow-md hover:border-gray-300 transition-all duration-200 group"
              >
                
                {/* Left Side: Scaled Media Thumbnail Box */}
                <div className="md:col-span-4 relative min-h-[180px] md:min-h-full bg-gray-100 overflow-hidden">
                  <img 
                    src={prog.coverImage} 
                    alt={prog.name} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out absolute inset-0"
                    loading="lazy"
                  />
                  {/* Absolute Index Pill Overlay */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-mono px-2 py-0.5 rounded-md font-bold">
                    {prog.id}
                  </div>
                </div>

                {/* Right Side: Informational Context Block */}
                <div className="md:col-span-8 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border ${themes.accent}`}>
                        {prog.track}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-sky-600 transition-colors tracking-tight">
                      {prog.name}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {prog.details}
                    </p>
                  </div>

                  {/* Operational Status Subsystem Bar */}
                  <div className="mt-5 pt-3.5 border-t border-gray-50 flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${themes.bullet}`} />
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      {prog.marker}
                    </span>
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

export default Activities;