import { useParams } from "react-router-dom";
import { useState } from "react";
import certificates from "../data/certificates";

function CertificateVerification() {
  const { token } = useParams();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");

  const certificate = certificates.find((cert) => cert.token === token);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!certificate) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 font-sans pt-20">
        <div className="max-w-md w-full bg-white border border-slate-200 p-8 rounded-2xl text-center shadow-xl">
          <div className="w-16 h-16 bg-rose-50 border border-rose-100 rounded-full flex items-center justify-center mx-auto mb-5 text-rose-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Certificate Record Missing</h1>
          <p className="text-slate-500 text-sm mt-2 leading-relaxed">
            The token provided does not match any authenticated records within our registration system.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative">
      
      {/* Decorative Top Ambient Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] pointer-events-none overflow-hidden opacity-70 z-0">
        <div className="absolute top-[-20%] left-[25%] w-[400px] h-[400px] bg-emerald-200/50 rounded-full blur-[80px]" />
        <div className="absolute top-[-10%] right-[25%] w-[350px] h-[350px] bg-sky-200/40 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        
        {/* Verification Status Header Banner */}
        <div className="bg-white border my-20 border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-700 text-[11px] font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Secured & Verified ✓
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Ecosystem Credential Registry
            </h1>
          </div>

          <button 
            onClick={handleCopyLink}
            className={`w-full sm:w-auto text-xs font-bold px-4 py-3 rounded-xl border transition-all flex items-center justify-center gap-2 shadow-sm ${
              copied 
              ? 'bg-emerald-600 border-emerald-600 text-white' 
              : 'bg-slate-900 hover:bg-slate-800 border-slate-900 text-white'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              )}
            </svg>
            <span>{copied ? "Link Copied!" : "Share Verification"}</span>
          </button>
        </div>

        {/* Centralized Navigation Tabs */}
        <div className="bg-slate-200/60 p-1.5 rounded-xl flex gap-1 font-semibold text-xs border border-slate-300/40">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex-1 py-3 rounded-lg text-center transition-all ${
              activeTab === "preview" 
                ? "bg-white text-slate-900 shadow-sm font-bold" 
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Certificate Preview
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`flex-1 py-3 rounded-lg text-center transition-all ${
              activeTab === "details" 
                ? "bg-white text-slate-900 shadow-sm font-bold" 
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Credential Details
          </button>
        </div>

        {/* Dynamic Panel Canvas */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden min-h-[400px] flex flex-col justify-between">
          
          {/* TAB 1: CERTIFICATE PREVIEW */}
          {activeTab === "preview" && (
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center items-center bg-slate-50/50">
              <div className="w-full max-w-2xl border border-slate-200 shadow-md bg-white rounded-xl overflow-hidden relative group">
                <img
                  src={certificate.image}
                  alt={`Certificate issued to ${certificate.name}`}
                  className="w-full h-auto object-contain max-h-[480px] transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            </div>
          )}

          {/* TAB 2: METADATA DETAILS WITH DYNAMIC TEXT */}
          {activeTab === "details" && (
            <div className="p-6 sm:p-8 space-y-6 flex-1 divide-y divide-slate-100">
              
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
                  Recipient Legal Identity
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {certificate.name}
                </h2>
              </div>

              {certificate.role && (
                <div className="py-5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-1.5">
                    Engagement Track
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 border border-slate-100 rounded-xl p-4">
                    {certificate.isTechnical ? (
                      /* Technical Text Framework */
                      <>
                        Successfully finalized all system milestones, cross-functional deployments, and production reviews assigned under the <strong className="text-slate-800 font-bold">{certificate.role}</strong> operational division.
                      </>
                    ) : (
                      /* Non-Technical Text Framework */
                      <>
                        Successfully completed all primary milestones, collaborative team initiatives, and performance objectives assigned under the <strong className="text-slate-800 font-bold">{certificate.role}</strong> operational division.
                      </>
                    )}
                  </p>
                </div>
              )}

              {/* Organization Fields */}
              <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50/60 border border-slate-100 p-4 rounded-xl">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-0.5">
                    Issuing Authority
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {certificate.issuer || "Dapta Organization"}
                  </span>
                </div>
                <div className="bg-slate-50/60 border border-slate-100 p-4 rounded-xl">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-0.5">
                    Issuance Date
                  </span>
                  <span className="text-sm font-bold text-slate-800 font-mono">
                    {certificate.date || "2026.05.15"}
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* Persistent Action Footer */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-[11px] text-slate-400 font-medium">
                This official credential record is verified and hosted permanently by our organization registry.
              </p>
            </div>
            
            <a 
              href={certificate.image} 
              download={`Certificate-${certificate.name.replace(/\s+/g, '-')}.png`}
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto sm:ml-auto text-center py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-slate-200"
            >
              <span>Download Asset</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CertificateVerification;