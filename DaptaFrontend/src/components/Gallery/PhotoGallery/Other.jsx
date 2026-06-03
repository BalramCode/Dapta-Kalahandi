import React from 'react';

const Other = () => {
  // Central routing array for miscellaneous organizational assets, publications, and portals
  const resourceCatalog = [
    {
      id: 1,
      title: "Annual Impact & Financial Reports",
      type: "Document Download",
      format: "PDF (14.2 MB)",
      actionLabel: "Download Report",
      themeColor: "sky",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
      summary: "Access audited balance sheets, comprehensive block expenditure histories, data tables, and project achievement indexes for the current fiscal cycle."
    },
    {
      id: 2,
      title: "Research Papers & Policy Briefs",
      type: "Institutional Library",
      format: "Digital Archive",
      actionLabel: "Access Portal",
      themeColor: "purple",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
      summary: "Review white papers tracking local socio-economic developments, land moisture mapping data, and long-term tribal literacy study papers."
    },
    {
      id: 3,
      title: "Public Grievance & Feedback Desk",
      type: "Citizen Helpline",
      format: "Online Registry",
      actionLabel: "File Ticket",
      themeColor: "amber",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      summary: "A secure communication interface allowing local villagers and stakeholders to directly upload operational feedback, site discrepancies, or service queries."
    }
  ];

  // System dynamic theme generator mapping 
  const getResourceStyles = (color) => {
    const registry = {
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", action: "bg-sky-50 text-sky-700 hover:bg-sky-100" },
      purple: { badge: "bg-purple-50 text-purple-700 border-purple-100", action: "bg-purple-50 text-purple-700 hover:bg-purple-100" },
      amber: { badge: "bg-amber-50 text-amber-700 border-amber-100", action: "bg-amber-50 text-amber-700 hover:bg-amber-100" }
    };
    return registry[color] || registry.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header Area */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Utilities & Transparency
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Resources & Miscellaneous Portals
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Access statutory documents, download audited regional white papers, or communicate directly with our feedback desks.
          </p>
        </div>

        {/* 3-Column Utility Matrix Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCatalog.map((resource) => {
            const themes = getResourceStyles(resource.themeColor);
            return (
              <div 
                key={resource.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Graphic Content Card Container */}
                  <div className="w-full h-40 bg-gray-100 relative overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                    {/* Media Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-md bg-white/90 ${themes.badge}`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>

                  {/* Core Context Content Blocks */}
                  <div className="p-6">
                    {/* File extension or data type marker */}
                    <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span>{resource.format}</span>
                    </div>

                    <h3 className="text-base sm:text-grid font-bold text-gray-900 group-hover:text-sky-600 transition-colors tracking-tight leading-snug">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {resource.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Link Submission Area */}
                <div className="p-6 pt-0">
                  <button 
                    type="button"
                    className={`w-full text-center py-2.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 border border-transparent ${themes.action}`}
                  >
                    <span>{resource.actionLabel}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </button>
                  
                  {/* System Nonce Tracking Reference Label */}
                  <div className="text-center text-[10px] font-semibold tracking-widest uppercase text-gray-300 mt-3">
                    System Asset Ref: R-0{resource.id}
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

export default Other;