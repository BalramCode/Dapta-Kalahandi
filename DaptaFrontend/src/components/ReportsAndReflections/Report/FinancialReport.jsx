import React from 'react';

const FinancialReport = () => {
  // Audit Reports List
  const auditReports = [
    { year: "2024-25", label: "Audit Report 2024-25", size: "1.8 MB", url: "/documents/audit-report-2024-25.pdf" },
    { year: "2023-24", label: "Audit Report 2023-24", size: "2.1 MB", url: "/documents/audit-report-2023-24.pdf" },
    { year: "2022-23", label: "Audit Report 2022-23", size: "1.9 MB", url: "/documents/audit-report-2022-23.pdf" },
    { year: "2021-22", label: "Audit Report 2021-22", size: "2.0 MB", url: "/documents/audit-report-2021-22.pdf" },
    { year: "2020-21", label: "Audit Report 2020-21", size: "2.3 MB", url: "/documents/audit-report-2020-21.pdf" },
    { year: "2019-20", label: "Audit Report 2019-20", size: "1.7 MB", url: "/documents/audit-report-2019-20.pdf" },
  ];

  // FC4 Returns List
  const fc4Returns = [
    { year: "2023-24", label: "FC4 Annual Return 2023-24", size: "950 KB", url: "/documents/fc4-return-2023-24.pdf" },
    { year: "2022-23", label: "FC4 Return 2022-23", size: "1.1 MB", url: "/documents/fc4-return-2022-23.pdf" },
    { year: "2021-22", label: "FC4 Return 2021-22", size: "880 KB", url: "/documents/fc4-return-2021-22.pdf" },
    { year: "2020-21", label: "FC4 Return 2020-21", size: "1.2 MB", url: "/documents/fc4-return-2020-21.pdf" },
  ];

  // Helper component to render the document list rows cleanly
  const DocumentGrid = ({ items, downloadPrefix }) => (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md hover:border-sky-200 transition-all duration-200 group"
        >
          <div className="flex items-center gap-4">
            {/* Emerald/Green theme to denote financial tracking/audits */}
            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
              <svg 
                className="w-6 h-6 text-emerald-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-sky-600 transition-colors">
                {item.label}
              </h3>
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                PDF Document • {item.size}
              </p>
            </div>
          </div>

          <a 
            href={item.url}
            download={`${downloadPrefix}-${item.year}.pdf`}
            className="p-2 rounded-lg bg-gray-50 text-gray-500 hover:bg-sky-600 hover:text-white transition-all shadow-inner group-hover:bg-sky-50 group-hover:text-sky-600"
            title={`Download ${item.label}`}
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
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* DAPTA Header & Subheading (Matches AnnualReport.jsx for alignment) */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            DAPTA Documentation
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Financial Reports
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Review our institutional statutory disclosures, audited statements, and mandatory 
            foreign contribution regulatory filings tracking financial accountability.
          </p>
        </div>

        {/* SECTION 1: Audit Reports */}
        <div className="mb-12">
          <h2 className="text-lg md:text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
            Statutory Audit Reports
          </h2>
          <DocumentGrid items={auditReports} downloadPrefix="DAPTA-Audit-Report" />
        </div>

        {/* SECTION 2: FC4 Returns */}
        <div>
          <h2 className="text-lg md:text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
            FC4 Returns (Foreign Contribution Regulation)
          </h2>
          <DocumentGrid items={fc4Returns} downloadPrefix="DAPTA-FC4-Return" />
        </div>

        {/* Statutory Footer Disclaimer Bar */}
        <div className="mt-12 bg-gray-100/80 rounded-xl p-4 text-xs text-gray-500 text-center border border-gray-200/50">
          All financial submissions are compiled by certified independent auditors and submitted 
          in compliance with corresponding societal oversight laws and standard regulatory bodies.
        </div>

      </div>
    </div>
  );
};

export default FinancialReport;