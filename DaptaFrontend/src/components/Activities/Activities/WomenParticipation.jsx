import React from 'react';

function WomenParticipation() {
  // Strategic Women Empowerment Initiatives Data
  const initiatives = [
    {
      title: "Family Counselling Activities",
      subtitle: "Crisis Intervention & Legal Relief",
      metric: "285 Cases Settled",
      metricSub: "Restoring family security",
      description: "Providing vital emotional, community, and structural support to distressed and tortured women through our dedicated Family Counseling Center (FCC).",
      impactDetails: "The FCC has successfully resolved and settled 285 complex family disputes where women were previously facing severe social and physical insecurity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      accentColor: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50/40",
      borderHover: "hover:border-rose-200",
      badgeColor: "bg-rose-100 text-rose-800"
    },
    {
      title: "Socio-Economic Empowerment",
      subtitle: "Financial Independence & Livelihoods",
      metric: "3,700 SHG Members",
      metricSub: "Across 260 Strengthened SHGs",
      description: "Building resilient micro-economies by organizing, training, and scaling grassroots Self-Help Groups (SHGs) across regional communities.",
      impactDetails: "Strengthened 260 SHGs and successfully established secure credit links for 3,700 individual SHG members, creating sustainable livelihood options and long-term income generation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accentColor: "from-purple-500 to-indigo-600",
      bgLight: "bg-purple-50/40",
      borderHover: "hover:border-purple-200",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Socio-Political Empowerment",
      subtitle: "Grassroots Governance & Leadership",
      metric: "195 Gram Panchayats",
      metricSub: "Spanning 9 Blocks of Kalahandi",
      description: "Partnering through a comprehensive NGO Network to break systemic barriers and foster active political participation for elected women leaders.",
      impactDetails: "Providing rigorous capacity building on self-governance, NREGS, RTI, addressing Violence Against Women, Right to Food, and unlocking accessibility to local Panchayat development funds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      accentColor: "from-fuchsia-500 to-violet-600",
      bgLight: "bg-fuchsia-50/40",
      borderHover: "hover:border-fuchsia-200",
      badgeColor: "bg-fuchsia-100 text-fuchsia-800"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto my-12 md:my-20 px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gradient-to-b from-white via-gray-50/30 to-white rounded-3xl border border-gray-100/80 shadow-xs">
      
      {/* SECTION HEADER CONTAINER */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 select-none">
        <div className="flex items-center justify-center space-x-2">
          <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
            Rights & Agency
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
          Women Empowerment
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          DAPTA is strictly dedicated to fostering self-reliance, physical safety, and political leadership for women across marginalized communities.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      {/* THREE-COLUMN STRATEGIC GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-2xl border border-gray-100 shadow-xs ${item.borderHover} hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
          >
            {/* Top Linear Gradient Stripe */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.accentColor}`}></div>

            {/* Card Body content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Card Title & Icon Layout */}
              <div className="flex items-start justify-between">
                <div className="space-y-1 max-w-[80%]">
                  <h3 className="text-xl font-extrabold text-gray-900 tracking-tight group-hover:text-gray-800 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-400 tracking-wide block uppercase">
                    {item.subtitle}
                  </span>
                </div>
                
                {/* Floating Modern Icon Circle */}
                <div className={`p-3 rounded-xl bg-gray-50 text-gray-500 group-hover:bg-gradient-to-br ${item.accentColor} group-hover:text-white transition-all duration-300 shadow-2xs`}>
                  {item.icon}
                </div>
              </div>

              {/* Descriptions block */}
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed text-justify">
                <p className="font-medium text-gray-800">
                  {item.description}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {item.impactDetails}
                </p>
              </div>
            </div>

            {/* Dashboard Statistics Widget Footer */}
            <div className={`p-5 ${item.bgLight} border-t border-gray-100/80 mt-auto flex flex-col space-y-1`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Verified Program Impact
              </span>
              <div className="flex items-center justify-between">
                <div className={`px-3 py-1.5 rounded-lg ${item.badgeColor} font-bold text-sm tracking-wide shadow-2xs`}>
                  {item.metric}
                </div>
                <span className="text-xs font-semibold text-gray-500 tracking-tight text-right">
                  {item.metricSub}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default WomenParticipation;