// src/components/About/OrganizasionalProfit.jsx
import React from 'react';

const OrganizasionalProfit = () => {
  const profileDetails = [
    { label: "Name of Organisation", value: "DAPTA Kalahandi" },
    { label: "Year of Establishment", value: "1989" },
    {
      label: "Address",
      value: "Registered Head Office: Near Old Cinema Hall, Bhawanipatna, Kalahandi District, Odisha, India — Pin: 766001"
    },
    { label: "Contact Person", value: "TODO: Verify Contact Person" },
    { label: "Contact No.", value: "+91 9437029124" },
    { label: "Email Id", value: "dapta@rediffmail.com" },
    { label: "Website", value: "www.dapta.org / www.dapta.org.in" },
    { label: "Society Regd. No. & Date", value: "TODO: Verify Society Regd. No. & Date" },
    { label: "DARPAN Unique Id & Regd. Date", value: "TODO: Verify DARPAN Unique Id" },
    { label: "Income Tax Regd. (12-A)", value: "TODO: Verify Income Tax Regd. (12-A)" },
    { label: "Income Tax Regd (80-G)", value: "TODO: Verify Income Tax Regd (80-G)" },
    { label: "FCRA", value: "TODO: Verify FCRA" },
    { label: "CSR Registration", value: "TODO: Verify CSR Registration" },
    { label: "PAN", value: "TODO: Verify PAN" },
    { label: "TAN", value: "TODO: Verify TAN" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          Organisation Profile
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Official statutory credentials and legal registration properties of DAPTA Kalahandi.
        </p>
      </div>

      {/* Styled Key-Value Grid (Simulated Responsive Table) */}
      <div className="border border-gray-200 rounded-lg sm:rounded-md overflow-hidden shadow-sm bg-white">
        {profileDetails.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2 p-3 sm:p-4 border-b last:border-b-0 border-gray-100 items-baseline text-xs sm:text-sm transition-colors hover:bg-gray-50/50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
              }`}
          >
            {/* Field Label */}
            <div className="font-semibold text-gray-800 md:col-span-1 tracking-wide">
              {item.label}
            </div>

            {/* Field Value */}
            <div className="text-gray-600 md:col-span-2 font-normal break-words">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizasionalProfit;