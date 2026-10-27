import React from 'react';

const VolunteerOpportunities = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 font-sans">
      <div className="max-w-4xl my-6 sm:my-10 mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-10 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Join Our Mission
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">
            Volunteer Opportunities
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            DAPTA welcomes passionate volunteers eager to support our grassroots development, tribal welfare, child education, and community healthcare initiatives across Kalahandi, Odisha. Reach out through our contact desk to get involved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;