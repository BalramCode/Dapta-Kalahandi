// src/components/About/LegalDocument.jsx
import React from 'react';

const LegalDocument = () => {
  const certificates = [
    { 
      title: "Registration Certificate", 
      url: "/ReportPDF/registration.jpg", 
      type: "Image",
      description: "Official statutory NGO registration framework documentation." 
    },
    { 
      title: "12A Registration", 
      url: "/ReportPDF/12ACertificate.pdf", 
      type: "PDF",
      description: "Income Tax Department tax exemption clearance registry entry." 
    },
    { 
      title: "80G Certificate", 
      url: "/ReportPDF/80G Certificate.pdf", 
      type: "PDF",
      description: "Donor tax deduction approval structure registry." 
    },
    { 
      title: "CSR Certificate", 
      url: "/ReportPDF/CSR-1-Certificate.pdf", 
      type: "PDF",
      description: "Ministry of Corporate Affairs corporate social responsibility alignment." 
    },
    { 
      title: "Permanent Account Number (PAN)", 
      url: "/ReportPDF/pancard.jpg", 
      type: "Image",
      description: "Government-issued identification card validation infrastructure." 
    },
  ];

  return (
    <div className="w-full bg-gray-50/50 rounded-3xl border border-gray-200/60 p-6 sm:p-8 lg:p-10 transition-all duration-300">
      
      {/* Decorative Module Header */}
      <div className="max-w-2xl mb-10">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
          Transparency Registry
        </span>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight mt-3 mb-2">
          Legal Documents & Governance
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Access public transparency records, verified statutory government registrations, compliance certificates, and operational audits.
        </p>
      </div>

      {/* Bento Layout Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {certificates.map((doc, idx) => {
          const isPdf = doc.type === "PDF";
          
          return (
            <div 
              key={idx} 
              className="group relative bg-white border border-gray-200/80 rounded-2xl p-5 shadow-xs hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1.5 hover:border-sky-500/50 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle upper background radial glow on hover */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Header Row: Document Type Tag & Badge Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                    isPdf ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {isPdf ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" />
                      </svg>
                    )}
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    isPdf ? 'bg-rose-100/60 text-rose-700' : 'bg-amber-100/60 text-amber-700'
                  }`}>
                    {doc.type}
                  </span>
                </div>

                {/* Title & Structured Description */}
                <h3 className="text-base font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-200 tracking-tight">
                  {doc.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-medium">
                  {doc.description}
                </p>
              </div>

              {/* Action Link Button */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide group-hover:text-sky-500/80 transition-colors">
                  Open Document
                </span>
                <a 
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs"
                  aria-label={`View ${doc.title}`}
                >
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Institutional Faint Watermark Base Backing */}
      <div className="mt-10 pt-6 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-400 font-medium">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cryptographically Verified Node Assets
        </span>
        <span>DAPTA Transparency Core</span>
      </div>

    </div>
  );
};

export default LegalDocument;