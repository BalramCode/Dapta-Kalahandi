// src/components/About/OrganizasionalProfit.jsx
import React from 'react';

const OrganizasionalProfit = () => {
  const profileDetails = [
    { label: "Name of Organisation", value: "Seba Jagat" },
    { label: "Year of Establishment", value: "1992" },
    { 
      label: "Address", 
      value: "At – Burat, Po/Via- M.Rampur, PIN-766102, Dist – Kalahandi, State- Odisha, Country-India" 
    },
    { label: "Contact Person", value: "Mr. Satyanarayan Pattanayak" },
    { label: "Contact No.", value: "+91-9437070326" },
    { label: "Email Id", value: "sebajagat@gmail.com" },
    { label: "Website", value: "www.sebajagat.org / www.sebajagat.org.in" },
    { label: "Society Regd. No. & Date", value: "19391/5/1993-94 , Date : 27.04.1993" },
    { label: "DARPAN Unique Id & Regd. Date", value: "OR/2010/0032011" },
    { label: "Income Tax Regd. (12-A)", value: "AACTS6144FE20214, 28th May 2021" },
    { label: "Income Tax Regd (80-G)", value: "AACTS6144FF20214, 28th May 2021" },
    { label: "FCRA", value: "104950027 ,Date-29-01-1996 (Renewed till 31st Dec 2026)" },
    { label: "CSR Registration", value: "CSR00004928 of Dated-5/5/2021" },
    { label: "PAN", value: "AACTS6144F" },
    { label: "TAN", value: "BBNS02755E" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          Organisation Profile
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Official statutory credentials and legal registration properties of Seba Jagat.
        </p>
      </div>

      {/* Styled Key-Value Grid (Simulated Responsive Table) */}
      <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm bg-white">
        {profileDetails.map((item, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 md:grid-cols-3 gap-2 p-4 border-b last:border-b-0 border-gray-100 items-baseline text-sm transition-colors hover:bg-gray-50/50 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
            }`}
          >
            {/* Field Label Label */}
            <div className="font-semibold text-gray-700 md:col-span-1 tracking-wide">
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