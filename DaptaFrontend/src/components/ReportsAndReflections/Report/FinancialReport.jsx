import React from 'react';

const FinancialReport = () => {
  // Audit Reports List
  const auditReports = [
    {
      year: "2021-22",
      label: "Financial Report 2021-22",
      size: "PDF",
      url: "/ReportPDF/financialReport21-22.pdf",
    },
    {
      year: "2020-21",
      label: "Financial Report 2020-21",
      size: "PDF",
      url: "/ReportPDF/financialReport20-21.pdf",
    },
    {
      year: "2019-20",
      label: "Financial Report 2019-20",
      size: "PDF",
      url: "/ReportPDF/financialReport19-20.pdf",
    },
    {
      year: "2018-19",
      label: "Financial Report 2018-19",
      size: "PDF",
      url: "/ReportPDF/financialReport18-19.pdf",
    },
    {
      year: "2017-18",
      label: "Financial Report 2017-18",
      size: "PDF",
      url: "/ReportPDF/financialReport17-18.pdf",
    },
    {
      year: "2016-17",
      label: "Financial Report 2016-17",
      size: "PDF",
      url: "/ReportPDF/financialReport16-17.pdf",
    },
    {
      year: "2015-16",
      label: "Financial Report 2015-16",
      size: "PDF",
      url: "/ReportPDF/financialReport15-16.pdf",
    },
  ];

  // Added Missing FC4 Returns Array to satisfy JSX reference downstream
  const fc4Returns = [
    {
      year: "2021-22",
      label: "12A Certificate",
      size: "PDF",
      url: "/ReportPDF/12ACertificate.pdf",
    },
    {
      year: "2020-21",
      label: "80G Certificate",
      size: "PDF",
      url: "/ReportPDF/80G Certificate.pdf",
    },
    {
      year: "2019-20",
      label: "CSR-1 Certificate",
      size: "PDF",
      url: "/ReportPDF/CSR-1-Certificate.pdf",
    },
  ];

  // Helper component to render the document list rows cleanly
  const DocumentGrid = ({ items, downloadPrefix }) => (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs flex items-center justify-between hover:shadow-md hover:border-emerald-200 transition-all duration-200 group"
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
              <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-emerald-600 transition-colors">
                {item.label}
              </h3>
              <p className="text-xs text-gray-400 font-medium mt-0.5">
                PDF Document • {item.size}
              </p>
            </div>
          </div>

          {/* FIXED: Changed `report.url` and `report.year` to use `item.url` and `item.year` */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gray-50 text-gray-500 hover:bg-emerald-600 hover:text-white transition-all shadow-2xs"
            title={`View Report for ${item.year}`}
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
      <div className="max-w-6xl my-12 mx-auto px-4">

        {/* DAPTA Header & Subheading */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            DAPTA Documentation
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-2 tracking-tight">
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