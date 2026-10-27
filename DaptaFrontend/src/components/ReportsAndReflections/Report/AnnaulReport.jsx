import React from "react";

const AnnualReport = () => {
  const reports = [
    {
      year: "2024-25",
      url: "/ReportPDF/ANNUAL REPORT 2024-25.docx",
    },
    {
      year: "2023-24",
      url: "/ReportPDF/ANNUAL REPORT 2023-24.docx",
    },
    {
      year: "2022-23",
      url: "/ReportPDF/ANNUAL REPORT 2022-23.docx",
    },
    {
      year: "2021-22",
      url: "/ReportPDF/ANNUAL REPORT 2021-22.docx",
    },
    {
      year: "2019-20",
      url: "/ReportPDF/annualReport19-20.pdf",
    },
    {
      year: "2018-19",
      url: "/ReportPDF/annualReport18-19.pdf",
    },
    {
      year: "2017-18",
      url: "/ReportPDF/annualReport17-18.pdf",
    },
    {
      year: "2016-17",
      url: "/ReportPDF/annualReport16-17.pdf",
    },
    {
      year: "2015-16",
      url: "/ReportPDF/annualReport15-16.pdf",
    },
    {
      year: "2014-15",
      url: "/ReportPDF/annualReport14-15.pdf",
    },
  ];

  // Safely generates a working view link for both local development and production
  const getViewUrl = (fileUrl) => {
    const isDocx = fileUrl.toLowerCase().endsWith(".docx");
    if (!isDocx) return fileUrl;

    // Detect if running on localhost or a local IP
    const isLocal =
      typeof window !== 'undefined' &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname.startsWith("192.168."));

    if (isLocal) {
      // Local fall-back: Opens cleanly in a new tab without throwing a broken 3rd-party viewer screen
      return fileUrl;
    }

    // Production: Seamlessly pipes the live URL into the Microsoft Office Viewer
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const absoluteUrl = origin + fileUrl;
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-6xl my-6 sm:my-12 mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center md:text-left border-b border-gray-200 pb-6 sm:pb-8 mb-6 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            DAPTA Documentation
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Annual Reports
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Review our institutional milestones, financial disclosures, and
            programmatic updates documenting transparency, governance, and
            community impact over the past years.
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {reports.map((report) => {
            const isDocx = report.url.toLowerCase().endsWith(".docx");
            const targetUrl = getViewUrl(report.url);

            return (
              <a
                key={report.year}
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3.5 sm:p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md hover:border-sky-200 transition-all duration-200 group text-left cursor-pointer"
                title={`Open and View Report for ${report.year}`}
              >
                <div className="flex items-center gap-4">
                  {/* Dynamic Colors and Icons by Extension */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isDocx
                        ? "bg-blue-50 group-hover:bg-blue-100 text-blue-500"
                        : "bg-red-50 group-hover:bg-red-100 text-red-500"
                      }`}
                  >
                    {isDocx ? (
                      /* Word Document Micro-Icon */
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    ) : (
                      /* PDF Document Micro-Icon */
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-sky-600 transition-colors">
                      Annual Report {report.year}
                    </h3>

                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      {isDocx ? "Word Document" : "PDF Document"}
                    </p>
                  </div>
                </div>

                {/* View Action Trigger Button (Eye Icon) */}
                <div className="p-2 rounded-lg bg-gray-50 text-gray-400 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-inner">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Notice */}
        <div className="mt-10 bg-gray-100/80 rounded-xl p-4 text-xs text-gray-500 text-center border border-gray-200/50">
          For older archives or physical print requests regarding institutional
          compliance items, please contact the DAPTA Central Administrative
          Secretariat directly via our contact form.
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;