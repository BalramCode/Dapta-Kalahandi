import React, { useState } from 'react';

const DonationInfo = () => {
  const [copiedField, setCopiedField] = useState(null);

  const bankDetails = {
    accountName: "SEBA JAGAT",
    bankName: "State Bank of India",
    branch: "Bhawanipatna",
    branchCode: "6725",
    address: "At/Po - M. Rampur, Dist. - Kalahandi",
    pin: "766102",
    stateCountry: "Odisha, India"
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Support Our Work
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Donation Information
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Your contributions directly fund our grassroot development programs, agricultural interventions, 
            and tribal livelihood security frameworks throughout Kalahandi.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Bank Account Passbook View (8 Cols) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
            
            {/* Passbook Header Banner */}
            <div className="bg-gradient-to-r from-sky-700 to-sky-800 p-5 text-white flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold tracking-wide">Direct Bank Transfer</h2>
                <p className="text-xs text-sky-100/80 mt-0.5">Support institution via localized remittance</p>
              </div>
              <div className="p-2 rounded-xl bg-white/10 shrink-0">
                <svg className="w-6 h-6 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>

            {/* Passbook Details Table Matrix */}
            <div className="p-6 space-y-4">
              
              {/* Account Holder Name */}
              <div className="pb-3.5 border-b border-gray-100 flex justify-between items-start gap-4">
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Account Holder Name</span>
                  <p className="text-base font-bold text-gray-800 mt-0.5">{bankDetails.accountName}</p>
                </div>
                <button 
                  onClick={() => handleCopy(bankDetails.accountName, 'name')}
                  className="text-xs font-medium text-sky-600 hover:text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md transition-colors"
                >
                  {copiedField === 'name' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Bank Name & Branch */}
              <div className="grid grid-cols-2 gap-4 pb-3.5 border-b border-gray-100">
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Bank Name</span>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">{bankDetails.bankName}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Branch Location</span>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">{bankDetails.branch}</p>
                </div>
              </div>

              {/* Branch Code */}
              <div className="pb-3.5 border-b border-gray-100 flex justify-between items-start gap-4">
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Branch Code</span>
                  <p className="text-sm font-mono font-bold text-gray-800 mt-0.5">{bankDetails.branchCode}</p>
                </div>
                <button 
                  onClick={() => handleCopy(bankDetails.branchCode, 'code')}
                  className="text-xs font-medium text-sky-600 hover:text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md transition-colors"
                >
                  {copiedField === 'code' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Complete Branch Mailing/Postal Address */}
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Branch Postal Details</span>
                <div className="text-sm text-gray-600 mt-1 space-y-0.5 bg-gray-50 p-3 rounded-xl border border-gray-100 font-medium">
                  <p>{bankDetails.address}</p>
                  <p>PIN — {bankDetails.pin}</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mt-1">{bankDetails.stateCountry}</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL: Form Download Block (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Download Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 rounded-2xl border border-amber-200/70 p-6 shadow-inner">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Offline Donation Form</h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Prefer maintaining paper logs or sending a physical check? Download our formal declaration logsheet 
                to attach alongside your direct deposit tracking ledger.
              </p>

              <a 
                href="/documents/seba-jagat-donation-form.pdf" 
                download="Seba-Jagat-Donation-Form.pdf"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-600 text-white font-bold text-sm tracking-wide shadow-md shadow-amber-600/10 hover:bg-amber-700 hover:shadow-lg transition-all duration-150 group"
              >
                <span>Download Donation Form</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Regulatory Transparency Note */}
            <div className="p-4 rounded-xl border border-gray-200 bg-white text-xs text-gray-500 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-gray-700">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944a11.954 11.954 0 007.834 3.056 10.03 10.03 0 01-1.166 5.603 9.93 9.93 0 01-3.668 3.733l-.001.002-3.001 1.71a1 1 0 01-1 0l-3.002-1.71.002-.001a9.93 9.93 0 01-3.668-3.733A10.03 10.03 0 012.166 5c0-.001 0-.001 0 0z" clipRule="evenodd" />
                </svg>
                Transparency Assurance
              </div>
              <p className="leading-relaxed">
                All domestic payments receive official institutional donation receipts. Kindly share confirmation cards 
                or transfer reference vouchers via our administrative desk to monitor allocation logs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DonationInfo;