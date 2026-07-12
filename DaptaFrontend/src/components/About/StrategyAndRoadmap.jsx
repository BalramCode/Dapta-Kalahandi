// src/components/About/StrategyAndRoadmap.jsx
import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const StrategyAndRoadmap = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 space-y-12 animate-fade-in-up" style={{ animationDelay: '150ms' }}>

      {/* Modern Heading Section */}
      <div className="text-center space-y-4 select-none mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
          Our Strategic Core
        </h2>
        <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto mt-6">
          The guiding principles that drive our long-term efforts to empower and uplift marginalized communities.
        </p>
      </div>

      {/* Grid Layout: Stacks on mobile, splits into 2 columns on medium/large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* MISSION CARD */}
        <div className="group relative bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-sky-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <div className="space-y-6">
            {/* Header Icon & Title */}
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-2xl bg-sky-50 text-sky-600 transition-all duration-500 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                <Target size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-wide uppercase transition-colors duration-300 group-hover:text-sky-600">
                Mission
              </h3>
            </div>

            {/* Statement Content */}
            <p className="text-slate-600 text-base sm:text-lg leading-[1.8] text-justify font-medium">
              Dapta believes to work for the community through people’s co-operation and participation in the entire development process.
            </p>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute -bottom-4 -right-4 text-sky-100/50 font-black text-8xl uppercase pointer-events-none select-none tracking-tighter transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-6 z-0">
            GOAL
          </div>
        </div>

        {/* VISION CARD */}
        <div className="group relative bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <div className="space-y-6">
            {/* Header Icon & Title */}
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                <Lightbulb size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-wide uppercase transition-colors duration-300 group-hover:text-emerald-600">
                Vision
              </h3>
            </div>

            {/* Statement Content */}
            <p className="text-slate-600 text-base sm:text-lg leading-[1.8] text-justify font-medium">
              Dapta visualizes a society where a united community has the ability to assert its rights and access the basic requirements needed to lead a meaningful life.
            </p>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute -bottom-4 -right-4 text-emerald-100/50 font-black text-8xl uppercase pointer-events-none select-none tracking-tighter transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6 z-0">
            HOPE
          </div>
        </div>

      </div>

    </div>
  );
};

export default StrategyAndRoadmap;