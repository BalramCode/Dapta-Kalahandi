import React from 'react';

function EducationAndChildDevelopment() {
  const categories = [
    {
      title: "Issue-Based Advocacy & Rights",
      tagline: "Systemic Empowerment & Legal Relief",
      supportedBy: "Our Own Initiative",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      accentClass: "from-indigo-600 to-blue-600",
      bgLightClass: "bg-indigo-50/40",
      borderHoverClass: "hover:border-indigo-200",
      iconColorClass: "text-indigo-600",
      points: [
        { label: "Human Rights Restoration", detail: "Active restoration of baseline human rights for vulnerable populations." },
        { label: "Informed Group Protection", detail: "Restoration of core Tribal rights, along with targeted protections for women & Dalits." },
        { label: "Community Empowerment", detail: "Fostering strategic political and legal empowerment for structurally excluded communities." },
        { label: "Multi-Level Advocacy", detail: "Sustained lobby and advocacy frameworks for the development of vulnerable groups across different administrative levels." }
      ]
    },
    {
      title: "Education for Children",
      tagline: "Rehabilitation, Mainstreaming & Advocacy",
      supportedBy: "NCLP, Govt. of India & Own Initiative",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      accentClass: "from-emerald-600 to-teal-600",
      bgLightClass: "bg-emerald-50/40",
      borderHoverClass: "hover:border-emerald-200",
      iconColorClass: "text-emerald-600",
      points: [
        { label: "Child Labour Identification", detail: "Rigorous fieldwork to identify and rescue children trapped in hazardous labor environments." },
        { label: "NCLP School Admission", detail: "Enrolling rescued children into our specialized NCLP alternative school frameworks." },
        { label: "Academic Mainstreaming", detail: "Ensuring smooth integration into standard formal public schools upon completing Class V." },
        { label: "Rights Awareness", detail: "Driving public enrollment campaigns, primary education access, and comprehensive child rights advocacy." }
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto my-12 md:my-20 px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gradient-to-b from-white via-gray-50/30 to-white rounded-3xl border border-gray-100/80 shadow-xs">
      
      {/* HEADER SECTION */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 select-none">
        <div className="flex items-center justify-center space-x-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Advocacy & Outreach
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
          Rights, Justice & Education
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          DAPTA actively champions human rights, political inclusion, and protective childhood education to safeguard communities from systemic inequities.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* TWO-COLUMN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className={`group relative bg-white rounded-2xl border border-gray-100 shadow-xs ${item.borderHoverClass} hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
          >
            {/* Top Linear Gradient Stripe Accent */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.accentClass}`}></div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Card Header Top Row */}
              <div className="flex items-start justify-between">
                <div className="space-y-1 max-w-[80%]">
                  <h3 className="text-xl font-extrabold text-gray-900 tracking-tight group-hover:text-gray-800 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-400 tracking-wide block uppercase">
                    {item.tagline}
                  </span>
                </div>
                
                {/* Micro-interaction Rounded Icon Circle */}
                <div className={`p-3 rounded-xl bg-gray-50 ${item.iconColorClass} group-hover:bg-gradient-to-br ${item.accentClass} group-hover:text-white transition-all duration-300 shadow-2xs`}>
                  {item.icon}
                </div>
              </div>

              {/* Mapped Structured Bullet Points */}
              <ul className="space-y-4">
                {item.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start space-x-3 text-sm">
                    {/* Tiny Custom Bullet Check/Dot */}
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:bg-lime-500 transition-colors duration-300"></span>
                    <div className="space-y-0.5">
                      <strong className="text-gray-800 block font-semibold tracking-wide">
                        {point.label}
                      </strong>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-justify">
                        {point.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Supporter Footer Tag */}
            <div className={`p-4 sm:px-8 ${item.bgLightClass} border-t border-gray-100/80 mt-auto flex flex-col space-y-1`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Program Alignment & Sponsorship
              </span>
              <div className="text-xs font-bold text-gray-700 bg-white/80 border border-gray-100 rounded-lg py-1.5 px-3 inline-flex items-center space-x-2 w-max max-w-full shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span>
                <span className="truncate">{item.supportedBy}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default EducationAndChildDevelopment;