import React from 'react';

const CaseStudies = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Header Block Consistent with Reports Modules */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Impact Stories
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Case Studies
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">
            Real-world proof of field programs transforming local economies, traditional agricultural productivity, and community sustainability models.
          </p>
        </div>

        {/* MAIN CASE STUDY CARD */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden grid md:grid-cols-12 gap-0">
          
          {/* Left Column: Visual Asset Display */}
          <div className="md:col-span-5 relative min-h-[260px] md:min-h-full bg-gray-900">
            <img 
              src="https://www.tatatrusts.org/Upload/Images/masthead/system-rice.jpg" 
              alt="Tribal farmer tending to a green paddy field utilizing the System of Rice Intensification method" 
              className="w-full h-full object-cover opacity-90 absolute inset-0"
            />
            {/* Dark Gradient Overlay for text protection */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
            
            {/* Quick Context Tag Overlay */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                Field Demonstration
              </p>
              <p className="text-sm font-semibold mt-1 text-gray-200">
                Kenduguda Village, Bhawanipatna
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Metrics Content */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Sustainable Agriculture
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug">
                Improving Agriculture — Improved Livelihood Through SRI Methods
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                For the first time in Kenduguda village of TalBelGoan Panchayat in Bhawanipatna Block, 
                seven tribal farmers executed a localized pilot demonstration in paddy cultivation utilizing the 
                <strong> System of Rice Intensification (SRI)</strong> method, engineered with structural technical 
                coordination from the Agriculture Department.
              </p>

              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                With continuous motivational coaching and structural workflow field orientation provided by 
                the <strong>Dapta field staff</strong>, these seven farmers successfully managed their crop cycles. 
                Though initial risks caused baseline skepticism regarding final crop yield outcomes, the post-harvest 
                computations completely validated the operational adjustment.
              </p>
            </div>

            {/* HARVEST DATA METRICS GRID */}
            <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div className="bg-gray-50/70 rounded-xl p-3 border border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Traditional Yield</p>
                <p className="text-lg sm:text-xl font-bold text-gray-500 mt-0.5">13 - 15 Qtl <span className="text-xs font-normal">/ acre</span></p>
              </div>
              <div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100/50">
                <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider">SRI Method Yield</p>
                <p className="text-lg sm:text-xl font-black text-emerald-700 mt-0.5">22 - 25 Qtl <span className="text-xs font-normal">/ acre</span></p>
              </div>
            </div>

            {/* IMPACT STATEMENT & INCENTIVE BLOCK */}
            <div className="mt-5 bg-sky-50/40 border border-sky-100/60 rounded-xl p-4 flex items-start gap-3">
              <div className="p-1 rounded-md bg-sky-100 text-sky-600 mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-normal">
                An incremental production surge of <strong>8 to 10 quintals per acre</strong>, compounded by a direct financial 
                incentive check of <strong>₹4,750</strong> issued directly via the Agriculture Department, solidified systemic trust. 
                These seven trailblazing farmers have served as an ecosystem catalyst in the regional tract, establishing blueprints 
                for wider department expansion.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;