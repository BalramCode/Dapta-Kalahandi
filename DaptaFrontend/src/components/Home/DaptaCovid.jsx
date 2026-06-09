import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DaptaCovid() {
  // Interactive state to highlight milestones/pillars
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    { title: "Just Society", desc: "Establishing equality, citizen voice, and deep-rooted community advocacy." },
    { title: "Sustainable Living", desc: "Maximizing local available resources safely to protect climate and ecology." },
    { title: "Human Dignity", desc: "Ensuring individual self-respect, female empowerment, and lasting livelihood." }
  ];

  // Placeholder Unsplash image mapping to a community training/social theme
  const heroImgFallback = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781018410/gallery9_e4r5n8.png?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="relative w-full min-h-[650px] lg:h-[100vh] bg-[#FAF9F5] overflow-hidden font-sans flex items-center justify-center border-b-[6px] border-[#1E293B]">

      {/* Decorative background watermark (Large faded 'S' curve accent) */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[30%] aspect-square opacity-[0.03] pointer-events-none hidden lg:block text-slate-900">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50,0 C20,0 0,20 0,50 C0,80 20,100 50,100 C80,100 100,80 100,50 C100,20 80,0 50,0 Z M50,85 C30,85 15,70 15,50 C15,30 30,15 50,15 C70,15 85,30 85,50 C85,70 70,85 50,85 Z" />
        </svg>
      </div>

      {/* Main Structural Layout Container */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12 lg:py-0">

        {/* Left Side: Content Block */}
        <div className="lg:col-span-6 flex flex-col items-start text-left justify-center space-y-6">

          {/* Header Stamp */}
          {/* <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="text-[#E76F51] animate-spin-slow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
              </svg>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Established 1992</span>
          </div> */}

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800 leading-tight">
            DAPTA'S RESPONSE TO <span className="text-[#2A9D8F]">COVID-19 PANDEMIC</span>
          </h2>

          <div className="text-slate-600 text-base md:text-[17px] leading-relaxed max-w-xl font-light">
            <p className="mb-4 font-normal text-slate-800">
              Dapta is a Non-Governmental, Non-political, and Non-profit making voluntary organisation working across the Kalahandi District. Our vision centers around generating a participatory society using local ecosystems so every individual can thrive with full dignity.
            </p>
            <ul className="list-disc pl-5 space-y-3 marker:text-slate-400">
              <li>
                <strong>Dry Ration Distribution:</strong> Provided to 3,500 families, including 3,408 families across 124 villages of the Lanjigarh Block and 92 vulnerable families from Bhawanipatna (including 19 individuals from the transgender community).
              </li>
              <li>
                <strong>Mask Distribution:</strong> Delivered 17,335 double-layered cotton cloth masks to 3,500 families across 124 villages in the Lanjigarh block, as well as 33 vulnerable families in Bhawanipatna.
              </li>
              <li>
                <strong>Hygiene Supplies:</strong> Distributed 17,000 pieces of soap to the 3,500 families mentioned above.
              </li>
              <li>
                <strong>Awareness Campaigns:</strong> Conducted hand hygiene education and practical demonstrations across 124 villages in the Lanjigarh Block.
              </li>
            </ul>
          </div>


       
        </div>

        {/* Center Aesthetic Borders (Only seen on desktop) */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-48 relative">
          <div className="absolute right-4 top-0 bottom-0 w-[2px] bg-slate-200" />
          <div
            className="absolute right-[14px] w-1 bg-[#2A9D8F] transition-all duration-500 rounded-full"
            style={{
              top: `${activeTab * 33}%`,
              height: '33%'
            }}
          />
        </div>

        {/* Right Side: Showcase Frame */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-full group">

            {/* Ambient Background Glow Effect tracking state changes */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2A9D8F] to-[#F4A261] rounded-2xl opacity-10 blur-xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-105 pointer-events-none" />

            {/* Main Graphic Frame */}
            <div className="relative p-3 bg-white rounded-2xl shadow-xl border border-slate-100 transition-all duration-500 group-hover:scale-[1.01] overflow-hidden">
              <div className="relative overflow-hidden rounded-xl h-72 md:h-96 w-full bg-slate-100">
                <img
                  src={heroImgFallback}
                  alt="Dapta Biochar Training Program"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Visual Glassmorphism overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                  <span className="text-[10px] font-bold tracking-widest text-[#E76F51] uppercase block mb-1">On-the-ground</span>
                  <p className="text-xs text-slate-800 font-medium">Empowering communities through direct field skills and local resources.</p>
                </div>
              </div>
            </div>

            {/* Back Accent Geometric Card */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#F4A261]/10 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>
        </div>

      </div>

      {/* Global Embedded Styles for minor animation states */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
      `}</style>
    </section>
  );
}

export default DaptaCovid;