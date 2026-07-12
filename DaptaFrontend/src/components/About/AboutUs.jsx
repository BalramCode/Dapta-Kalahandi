// src/components/About/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-fade-in-up" style={{ animationDelay: '150ms' }}>

      {/* Hero Intro Section */}
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[100px] -z-10" />

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight mb-6">
          Introduction
        </h2>

        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium text-justify">
          DAPTA started its approach from education and health, gradually evolving into other critical activities like women empowerment, food security, and the sustainable development of deprived communities.
        </p>
      </div>



      {/* Core Philosophy Section */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="sticky top-32 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">
              Holistic Approach
            </h3>
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <p className="mt-4 text-sm text-slate-500 leading-relaxed font-medium">
              We believe sustainable development comes from addressing interconnected challenges in a comprehensive and inclusive way.
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
            {/* Accent Line */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-emerald-100 rounded-r-lg" />
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify font-normal pl-4">
              The organization works on holistic development, as it creates a foundation for long-term, transformative impact. It enables individuals and communities to grow with dignity and resilience, tackling the root causes of deprivation while fostering overall well-being and self-reliance.
            </p>
          </div>
        </div>
      </div>

      {/* Stakeholders Section */}
      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="sticky top-32 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">
              Our Stakeholders
            </h3>
            <div className="h-1 w-12 bg-amber-500 rounded-full" />
            <p className="mt-4 text-sm text-slate-500 leading-relaxed font-medium">
              Targeting definite territories for vulnerable people who fit our core mission and vision.
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
            {/* Accent Line */}
            <div className="absolute right-0 top-8 bottom-8 w-1 bg-amber-100 rounded-l-lg" />
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify font-normal pr-4">
              The stakeholders and our development partners are primarily from Adivasis (Tribals), Dalits, and marginalized vulnerable sections. Women and children are the direct, focused stakeholders of this organization. As a whole, the organization targets specific territories to uplift the vulnerable people of these pockets, perfectly aligning with our overarching mission and vision.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-sky-50 rounded-br-[100px] -z-10" />

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
          Our Story
        </h2>
        <div className="h-1 w-16 bg-sky-500 rounded-full mb-8" />

        <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed text-justify font-normal">
          <p>
            The informal initiation started with voluntary spirit from <span className="font-semibold text-sky-600">1989</span> to provide relief & <span className="font-semibold text-sky-600">welfare</span> support and services during natural calamities in Ganjam and Rayagada District. The starvation death and sale of human kids of Kalahandi district alarmed the world. Tribal exploitation & rampant corruption was the main cause of starvation. Right of tribal and women was highly affected. Witnessing the drastic condition of excluded community, <span className="font-bold text-sky-700">DAPTA</span> formalized its entity as a non-profit making secular organisation to combat the situation.
          </p>
          <p>
            As an organisation, <span className="font-bold text-sky-700">DAPTA</span> started with a welfare and <span className="font-semibold text-sky-600">rights-based approach</span> for the development of excluded communities and now works towards programme sustainability. To influence <span className="font-semibold text-sky-600">civil society</span> and policy makers, it has extended its collaboration through networking, advocacy, and rights-based campaigns for the conservation of <span className="font-semibold text-sky-600">Land, Water, and Forest</span>. These initiatives include restoring the survival rights of vulnerable sections in different ways. The supporting and collaborating partners, CBOs, and Government agencies have recognized DAPTA's significant contribution in the field of development.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
