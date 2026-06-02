// src/components/About/LegalDocument.jsx
import React from 'react';

const LegalDocument = () => {
  // Safe dummy PDF links that you can easily swap out later
  const samplePdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Left Column Data: Main structural statutory documents visible in image_b2d760.png
  const certificates = [
    { title: "Registration Certificate PDF", url: samplePdfUrl },
    { title: "Seba Jagat NGO DARPAN PDF", url: samplePdfUrl },
    { title: "12A (Renewal) PDF", url: samplePdfUrl },
    { title: "12A PDF", url: samplePdfUrl },
    { title: "80G (Renewal) PDF", url: samplePdfUrl },
    { title: "80G PDF", url: samplePdfUrl },
    { title: "CSR Certificate PDF", url: samplePdfUrl },
    { title: "FC Renewal Certificate 2021 PDF", url: samplePdfUrl },
    { title: "Sebajagat Bye-Laws & Memorandum PDF", url: samplePdfUrl },
    { title: "Certificate of Registration of Societies (SRA) PDF", url: samplePdfUrl },
    { title: "PAN PDF", url: samplePdfUrl },
    { title: "TAN PDF", url: samplePdfUrl },
  ];

  // Right Column Data: Fulfilling the empty "Other Report" segment with typical compliance files
  const otherReports = [
    { title: "Annual Audit Report FY 2024-25", url: samplePdfUrl },
    { title: "Annual Narrative Performance Report", url: samplePdfUrl },
    { title: "FCRA Annual Return (FC-4) 2023-24", url: samplePdfUrl },
    { title: "Latest ITR Filing Acknowledgment", url: samplePdfUrl },
    { title: "Institutional Evaluation & Impact Study", url: samplePdfUrl },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Page Description Header */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          Legal Documents & Governance
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Access public transparency records, government registrations, and compliance audits.
        </p>
      </div>

      {/* Main Two-Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Card Segment: Certificates */}
        <div className="relative bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm overflow-hidden min-h-[500px]">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-3">
            Certificates
          </h3>
          
          <ul className="space-y-4 relative z-10">
            {certificates.map((doc, idx) => (
              <li key={idx} className="group">
                <a 
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sky-600 font-medium text-sm hover:text-sky-800 transition-colors duration-200"
                >
                  {/* Styled Red PDF Document Icon */}
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span className="hover:underline tracking-wide">{doc.title}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Faint Background Decorative Vector Image Watermark matching image_b2d760.png */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] text-gray-900 translate-x-4 translate-y-4">
            <svg className="w-56 h-56" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6l-4-4H9z" />
              <path d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L7.414 9H15a1 1 0 110 2H7.414l3.293 3.293a1 1 0 11-1.414 1.414l-4-4z" />
            </svg>
          </div>
        </div>

        {/* Right Card Segment: Other Reports */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm min-h-[500px]">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-3">
            Other Reports
          </h3>
          
          <ul className="space-y-4">
            {otherReports.map((doc, idx) => (
              <li key={idx} className="group">
                <a 
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sky-600 font-medium text-sm hover:text-sky-800 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span className="hover:underline tracking-wide">{doc.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default LegalDocument;