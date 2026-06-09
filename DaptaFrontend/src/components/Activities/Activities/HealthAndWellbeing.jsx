import React from 'react';

function HealthAndWellbeing() {
  // Core Focus Pillars Data
  const pillars = [
    { title: "Preventive & Curative Care", icon: "🩺", desc: "Comprehensive health services focused on treatment and early prevention." },
    { title: "HIV/AIDS Care & Support", icon: "🎗️", desc: "Dedicated programs aimed at care, support, and vulnerability reduction." },
    { title: "Reproductive & Child Health", icon: "🍼", desc: "Enabling safe motherhood and ensuring robust child development." },
    { title: "Safe Water & Nutrition", icon: "💧", desc: "Holistic management of clean drinking water and dietary nutrition." },
    { title: "Community Mental Health", icon: "🧠", desc: "Comprehensive local mental healthcare, treatment, and structural rehabilitation." },
    { title: "Community Eye Care", icon: "👁️", desc: "Accessible vision check-ups, treatments, and blindness prevention initiatives." },
    { title: "Disability Rehabilitation", icon: "♿", desc: "Active care and livelihood rehabilitation for physically challenged individuals." }
  ];

  // Specific Deep-Dive Supported Projects Data
  const initiatives = [
    {
      title: "Dedicated for Mental Health Care",
      supportedBy: "Basic Need India, Bangalore",
      timeline: "Active since last 3 years",
      impact: "446 poor mental patients supported",
      description: "Providing vital mental health care to poor people of Kalahandi. Patients are supported in terms of Community Care Treatment Support, with select individuals receiving structured support for livelihood promotion.",
      accent: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50/50",
      textAccent: "text-blue-600",
      badgeBg: "bg-blue-100 text-blue-800"
    },
    {
      title: "People's Initiative for Malaria Prevention",
      supportedBy: "Sir Dorabji Tata Trust, Mumbai",
      timeline: "Targeted regional impact",
      impact: "35,000 people benefited across 90 tribal villages",
      description: "An intensive malaria control initiative actively working within 90 tribal villages of the Lanjigarh and Bhawanipatna blocks of Kalahandi to substantially mitigate transmission risks.",
      accent: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/50",
      textAccent: "text-amber-600",
      badgeBg: "bg-amber-100 text-amber-900"
    },
    {
      title: "Sensitizing Transgenders to Halt & Reverse HIV Vulnerability",
      supportedBy: "Orissa State AIDS Control Society, Govt. of Orissa",
      timeline: "State Goverment Alignment",
      impact: "250 targeted, 148 vulnerable, 18 HIV positive supported",
      description: "Dedicated intervention working directly to halt and reverse the HIV situation among transgender populations in Kalahandi, actively serving vulnerable and positive community members.",
      accent: "from-rose-500 to-pink-600",
      bgLight: "bg-rose-50/50",
      textAccent: "text-rose-600",
      badgeBg: "bg-rose-100 text-rose-800"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto my-12 md:my-20 px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 rounded-3xl border border-gray-100 shadow-sm">
      
      {/* SECTION HEADER */}
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
        <div className="flex items-center justify-center space-x-2 select-none">
          <span className="w-2.5 h-2.5 bg-lime-500 inline-block rounded-full animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-lime-600 bg-lime-50 px-3 py-1 rounded-full">Our Core Priority</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
          Health & Wellbeing
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
          Health Hazards are a prime issue DAPTA is dedicated to addressing. We combine wide-reaching preventive healthcare fields with targeted field operations.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-lime-500 to-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* CORE FOCUS PILLARS GRID */}
      <div className="mb-20">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 text-center">
          Core Healthcare Interventions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-lime-200"
            >
              <div className="text-2xl mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-gray-800 tracking-wide mb-1 group-hover:text-lime-600 transition-colors duration-200">
                {pillar.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DEEP DIVE KEY INITIATIVES */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center">
          Supported Action Programmes
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Dynamic Accent Top Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.accent}`}></div>
              
              <div className="p-6 sm:p-8 space-y-5">
                {/* Supporter Badge */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Supported By</span>
                  <div className="text-xs font-bold text-gray-700 bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-lime-500 transition-colors duration-300"></span>
                    <span>{item.supportedBy}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-extrabold text-gray-900 tracking-tight leading-snug group-hover:text-gray-800 transition-colors duration-200">
                  {item.title}
                </h4>

                {/* Main Narrative Text */}
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>

              {/* Data Insights Footer Summary Block */}
              <div className={`p-5 ${item.bgLight} border-t border-gray-100/60 mt-auto space-y-2.5`}>
                <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                  <span>Program Scope:</span>
                  <span className={`font-semibold ${item.textAccent}`}>{item.timeline}</span>
                </div>
                <div className={`p-2.5 rounded-xl ${item.badgeBg} text-xs font-semibold flex items-start space-x-2`}>
                  <span className="mt-0.5">📊</span>
                  <span className="leading-tight">{item.impact}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default HealthAndWellbeing;