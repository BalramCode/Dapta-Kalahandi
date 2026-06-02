import React from 'react';

const AnnualReport = () => {
  // Exact list of reports requested
  const reports = [
    { year: "2024-25", size: "2.4 MB", url: "/documents/annual-report-2024-25.pdf" },
    { year: "2023-24", size: "3.1 MB", url: "/documents/annual-report-2023-24.pdf" },
    { year: "2022-23", size: "2.8 MB", url: "/documents/annual-report-2022-23.pdf" },
    { year: "2021-22", size: "2.7 MB", url: "/documents/annual-report-2021-22.pdf" },
    { year: "2020-21", size: "3.5 MB", url: "/documents/annual-report-2020-21.pdf" },
    { year: "2019-20", size: "2.9 MB", url: "/documents/annual-report-2019-20.pdf" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* DAPTA Header & Subheading */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            DAPTA Documentation
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Annual Reports
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Review our institutional milestones, financial disclosures, and programmatic updates 
            documenting transparency, governance, and community impact over the past years.
          </p>
        </div>

        {/* Interactive PDF Document List */}
        <div className="grid sm:grid-cols-2 gap-4">
          {reports.map((report, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md hover:border-sky-200 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                {/* Red PDF Brand Accent Icon Box */}
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                  <svg 
                    className="w-6 h-6 text-red-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                    />
                  </svg>
                </div>

                {/* Metadata Details */}
                <div>
                  <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-sky-600 transition-colors">
                    Annual Report {report.year}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    PDF Document • {report.size}
                  </p>
                </div>
              </div>

              {/* Download CTA Button Action */}
              <a 
                href={report.url}
                download={`DAPTA-Annual-Report-${report.year}.pdf`}
                className="p-2 rounded-lg bg-gray-50 text-gray-500 hover:bg-sky-600 hover:text-white transition-all shadow-inner group-hover:bg-sky-50 group-hover:text-sky-600"
                title={`Download Report for ${report.year}`}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Notice Disclaimer Bar */}
        <div className="mt-10 bg-gray-100/80 rounded-xl p-4 text-xs text-gray-500 text-center border border-gray-200/50">
          For older archives or physical print requests regarding institutional compliance items, 
          please contact the DAPTA Central Administrative Secretariat directly via our contact form.
        </div>

      </div>
    </div>
  );
};

export default AnnualReport;