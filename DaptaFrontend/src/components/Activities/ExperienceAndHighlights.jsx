import React from 'react';

const ExperienceAndHighlights = () => {
  // Key statistical achievements from operations
  const stats = [
    { value: "30+", label: "Years of Grassroots Service" },
    { value: "20K+", label: "Annual OPD Patients Treated" },
    { value: "355+", label: "Women's SHG Federations" },
    { value: "1,400+", label: "FRC Members Trained Annually" },
  ];

  // Core thematic milestones and program highlights
  const highlights = [
    {
      year: "Since 1992",
      title: "Decades of Marginalized Community Empowerment",
      description: "Founded to tackle severe socioeconomic challenges in Odisha's most remote regions. Grown from a local initiative into a trusted developmental driver operating directly across Kalahandi, Kandhamal, Nuapada, Balangir, Koraput, and Keonjhar districts.",
      tag: "Legacy"
    },
    {
      year: "Since 2008",
      title: "Public-Private Healthcare Partnerships (PPP)",
      description: "Appointed administrative manager for key Health & Wellness Centres (HWCs) and Primary Health Centres (PHC New) under the National Health Mission (NHM). Delivering continuous 24/7 primary healthcare, reproductive child health camps, and emergency care covering over 180 tribal villages.",
      tag: "Health & Care"
    },
    {
      year: "Since 2021",
      title: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
      description: "Facilitating intensive adolescent health interventions across 14 blocks of Balangir district in partnership with NHM Odisha. Focusing directly on reducing malnutrition, addressing iron-deficiency anemia, and providing robust reproductive health training.",
      tag: "Adolescent Health"
    },
    {
      year: "Ongoing",
      title: "Sustainable Livelihoods & Climate Action",
      description: "Pioneered System of Rice Intensification (SRI) methods increasing local tribal crop yields from 13 to over 22 quintals per acre. Simultaneously empowering women's groups through localized Bio-Input supply units, millet cultivation campaigns, and value-added market linkages for Non-Timber Forest Products (NTFPs).",
      tag: "Livelihoods"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto my-15 px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Our Journey & Impact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">
            Experience & Strategic Highlights
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            For over three decades, Seba Jagat has built trusted structures to bridge policy and people—uplifting tribal communities, women, landless farmers, and children across Odisha.
          </p>
        </div>

        {/* High-Impact Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="text-3xl md:text-4xl font-black text-sky-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-sky-500 rounded-full inline-block"></span>
            Key Institutional Highlights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:border-sky-200 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                      {item.year}
                    </span>
                    <span className="text-xs font-medium text-gray-400 uppercase bg-gray-50 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative baseline border link accent */}
                <div className="mt-6 pt-4 border-t border-gray-50 text-xs font-semibold text-gray-400 flex items-center gap-1">
                  Seba Jagat Operational Footprint
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Ground-Level Insight Callout */}
        <div className="mt-12 bg-sky-900 text-white p-6 md:p-8 rounded-2xl shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-sky-800 rounded-full opacity-20 pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
              Grassroots Success Model
            </span>
            <h3 className="text-xl md:text-2xl font-bold mt-1 mb-3">
              Convergence & Peer-to-Peer Learning
            </h3>
            <p className="text-sky-100 text-sm md:text-base leading-relaxed opacity-90">
              Our core operational approach centers on creating self-reliant institutional models. By integrating training architectures for Forest Rights Committees (FRCs) alongside multi-department public service delivery (Agriculture, MGNREGA, and Horticulture), we guarantee local ownership that outlives direct project timelines.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceAndHighlights;