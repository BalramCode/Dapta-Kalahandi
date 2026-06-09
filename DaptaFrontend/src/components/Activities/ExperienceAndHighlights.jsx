import React from 'react';

const ExperienceAndHighlights = () => {
  // Timeline/Experience Blocks built from your specific operational data
  const experiences = [
    {
      period: "Core Mandate & Ongoing Advocacy",
      title: "Issue-Based Advocacy & Rights Restoration",
      category: "Human Rights & Governance",
      accentClass: "from-indigo-600 to-blue-600",
      bgLightClass: "bg-indigo-50/30",
      textColorClass: "text-indigo-600",
      description: "Driving systemic change, political empowerment, and legislative relief for historically excluded and vulnerable communities.",
      highlights: [
        { label: "Rights Restoration", text: "Active enforcement frameworks for baseline human rights, with specialized focus on the restoration of Tribal rights, alongside protection of women and Dalits." },
        { label: "Political & Legal Empowerment", text: "Fostering structural empowerment pathways for excluded communities to participate directly in democratic governance." },
        { label: "Multi-Level Lobbying", text: "Sustained policy advocacy and institutional lobbying across local, regional, and national administrative levels to protect vulnerable demographics." }
      ],
      sponsorship: "Supported by: Our Own Initiative"
    },
    {
      period: "Child Welfare & Integration Pipeline",
      title: "Education & Child Labour Mainstreaming",
      category: "Child Rights",
      accentClass: "from-sky-600 to-cyan-600",
      bgLightClass: "bg-sky-50/30",
      textColorClass: "text-sky-600",
      description: "Systemic identification, rehabilitation, and educational enrollment models targeted at eliminating hazardous child labor structures.",
      highlights: [
        { label: "Identification & Rescue", text: "Field-level diagnostic networks to pinpoint child labor operations within high-risk pockets." },
        { label: "NCLP School Alternative Frameworks", text: "Directly admitting rescued children into specialized NCLP school systems for transitional rehabilitation." },
        { label: "Academic Mainstreaming", text: "Ensuring secure, fluid transitions and enrollment into public formal schools after completing Class V." },
        { label: "Advocacy Enforcement", text: "Running public enrollment campaigns, primary education tracking, and comprehensive child rights protections." }
      ],
      sponsorship: "Supported by: NCLP, Govt. of India & Own Initiative"
    },
    {
      period: "Ecosystem & Agrarian Development",
      title: "Sustainable Livelihoods & Natural Resource Management",
      category: "Eco-Economics",
      accentClass: "from-emerald-600 to-teal-600",
      bgLightClass: "bg-emerald-50/30",
      textColorClass: "text-emerald-600",
      description: "Blending environmental protection with sustainable economic development models to reverse land degradation and build local cooperative wealth.",
      highlights: [
        { label: "Land & Water Management", text: "Deployed target restoration layouts within Kanarla village, directly benefiting 35 ancestral households of the Kutia Kondh Community." },
        { label: "Watershed Production Networks", text: "Implemented extensive watershed projects across 14 tribal villages, transforming and restoring over 1,200 hectares of critical agricultural catchment area." },
        { label: "Women's Vegetable Co-operatives", text: "Promoted 2 distinct women's co-operatives powering 400 active women vegetable farmers. Strengthened business development blueprints and locked in market linkages across 10 villages." }
      ],
      sponsorship: "Supported by: Regional Ecosystem Grants & Internal Cooperative Structuring"
    },
    {
      period: "15/04/2020 – 10/05/2020",
      title: "COVID-19 Phase 1 Emergency Relief Operations",
      category: "Crisis Management",
      accentClass: "from-rose-600 to-red-600",
      bgLightClass: "bg-rose-50/30",
      textColorClass: "text-rose-600",
      description: "Rapid, massive systemic response to reduce lockdown hardships, ensure absolute food availability, and deploy health sensitization blueprints across remote pockets.",
      highlights: [
        { label: "Massive Geographic Outreach", text: "Reached 3,500 highly vulnerable families—3,408 across 124 remote tribal villages of Lanjigarh Block and 92 families within Bhawanipatna (including 19 transgender individuals, domestic maid servants, and rickshaw pullers)." },
        { label: "Funder-Backed Survival Kits", text: "Designed and distributed 3,000 specific dry-ration/hygiene kits funded by Azim Premji Philanthropic Initiative (APPI) and 500 comprehensive resource kits backed by Smile Foundation India." },
        { label: "Livelihood & Protective Output", text: "Mobilized 2 local women's SHGs to manufacture cotton masks at scale under a 100% procurement guarantee. Distributed 17,335 double-layered cotton masks and 17,000 bars of protective soap paired with hand-hygiene demonstrations." },
        { label: "Panchayat Governance Integration", text: "Built 5 block-wise WhatsApp groups for women PRI members across Kalahandi (Bhawanipatna, Junagarh, Karlamunda, Koksara, Lanjigarh)—delivering safe health guidelines directly to 43 Sarpanch, 45 Naib Sarpanch, and 471 ward members." },
        { label: "High-Risk Child Tracking", text: "Deployed resources through DAPTA run CHILDLINE Kalahandi to support 106 vulnerable children and families from rag-picking and brick-kiln environments." }
      ],
      sponsorship: "Deepest Gratitude to: District & Block Administrations (BDO Sri Jeetendra Mishra), APPI, and SMILE Foundation India"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EXECUTIVE SUMMARY HEADER */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20 select-none">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800">
              Organizational Track Record
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-none">
            Impact Milestones & Experience
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
            A comprehensive overview of field operations, emergency crisis responses, ecological transformations, and human rights advocacy frameworks executed to build lasting institutional resilience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* COMPREHENSIVE EXPERIENTIAL TIMELINE */}
        <div className="relative border-l border-gray-200 ml-2 sm:ml-6 md:ml-32 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group pl-6 sm:pl-8">
              
              {/* Floating Chronological Date Box Side-Anchored */}
              <div className="absolute -left-6 sm:-left-8 md:-left-[152px] top-1.5 md:w-28 text-left md:text-right hidden md:block">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                  {exp.period.split(" ")[0]}
                </span>
                <span className="text-[10px] font-medium text-gray-400 block truncate">
                  {exp.period.split(" ").slice(1).join(" ")}
                </span>
              </div>

              {/* Timeline Interlocking Connecting Node */}
              <div className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-gray-300 group-hover:border-transparent group-hover:bg-gradient-to-br ${exp.accentClass} transition-all duration-300 shadow-2xs group-hover:scale-125`}></div>

              {/* MAIN CONTENT BLOCK EXPANSION CARD */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xs group-hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                
                {/* Horizontal Gradient Top Border Stripe */}
                <div className={`w-full h-1 bg-gradient-to-r ${exp.accentClass}`}></div>

                {/* Internal Card Body */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="space-y-1">
                      {/* Mobile-Only Date Tag */}
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest block md:hidden">
                        ⏳ {exp.period}
                      </span>
                      <h3 className="text-xl font-black text-gray-950 tracking-tight leading-snug group-hover:text-gray-900 transition-colors duration-150">
                        {exp.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${exp.bgLightClass} ${exp.textColorClass}`}>
                      {exp.category}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-gray-700 leading-relaxed text-justify">
                    {exp.description}
                  </p>

                  {/* Quantitative Data/Bullet Mappings */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Focus & Quantifiable Metrics:</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {exp.highlights.map((high, hIdx) => (
                        <li key={hIdx} className="flex items-start space-x-3 text-sm text-gray-600 bg-gray-50/60 border border-gray-100/50 p-3 rounded-xl hover:bg-white hover:border-gray-100 hover:shadow-2xs transition-all duration-200">
                          <span className={`${exp.textColorClass} font-bold text-base mt-0.5 select-none flex-shrink-0`}>✓</span>
                          <div className="space-y-0.5">
                            <strong className="text-gray-900 block font-semibold tracking-wide text-xs sm:text-sm">
                              {high.label}
                            </strong>
                            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-justify">
                              {high.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Institutional Ownership Footer Frame */}
                <div className={`px-6 sm:px-8 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4 text-[11px] font-semibold text-gray-500`}>
                  <div className="flex items-center space-x-1.5 truncate max-w-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 flex-shrink-0"></span>
                    <span className="italic truncate">{exp.sponsorship}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExperienceAndHighlights;