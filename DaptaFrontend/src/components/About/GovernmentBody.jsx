// src/components/About/GovernmentBody.jsx
import React from 'react';

const GovernmentBody = () => {
  // Completely randomized dummy data replacing the original credentials
  const boardMembers = [
    {
      id: 1,
      name: "Dr. Alok Ranjan Mohanty",
      contact: "+91-98610 12345",
      designation: "President",
      yearsActive: 12,
      initials: "AM"
    },
    {
      id: 2,
      name: "Mrs. Priyadarshini Mishra",
      contact: "+91-70081 23456",
      designation: "Vice-President",
      yearsActive: 8,
      initials: "PM"
    },
    {
      id: 3,
      name: "Mr. Manoranjan Das",
      contact: "+91-94371 98765",
      designation: "Secretary",
      yearsActive: 15,
      initials: "MD"
    },
    {
      id: 4,
      name: "Ms. Suchitra Samal",
      contact: "+91-82490 54321",
      designation: "Joint Secretary",
      yearsActive: 6,
      initials: "SS"
    },
    {
      id: 5,
      name: "Mr. Rajesh Kumar Sahu",
      contact: "+91-99372 11223",
      designation: "Treasurer",
      yearsActive: 10,
      initials: "RS"
    },
    {
      id: 6,
      name: "Mrs. Minati Pradhan",
      contact: "+91-78945 66778",
      designation: "Executive Member",
      yearsActive: 5,
      initials: "MP"
    },
    {
      id: 7,
      name: "Mr. Dilip Kumar Naik",
      contact: "+91-91247 88990",
      designation: "Executive Member",
      yearsActive: 4,
      initials: "DN"
    }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Section Header */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          Governing Body
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Meet the executive board members steering our organizational vision and governance framework.
        </p>
      </div>

      {/* Desktop View: Styled Table (Visible on md screens and up) */}
      <div className="hidden md:block border border-gray-200 rounded-md overflow-hidden shadow-sm bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 text-sm font-semibold">
              <th className="p-4 w-16 text-center">Sl No.</th>
              <th className="p-4 w-20">Photo</th>
              <th className="p-4">Full Name</th>
              <th className="p-4">Designation</th>
              <th className="p-4">Contact No.</th>
              <th className="p-4 text-center">Tenure (Years)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
            {boardMembers.map((member, index) => (
              <tr key={member.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 text-center font-medium text-gray-400">{index + 1}</td>
                <td className="p-4">
                  {/* Clean Fallback Avatar Frame */}
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs border border-sky-200 shadow-inner">
                    {member.initials}
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-800">{member.name}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    member.designation === 'President' || member.designation === 'Secretary' 
                      ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}>
                    {member.designation}
                  </span>
                </td>
                <td className="p-4 font-mono text-xs">{member.contact}</td>
                <td className="p-4 text-center font-medium">{member.yearsActive} yrs</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View: Card Stack (Visible on small screens) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {boardMembers.map((member, index) => (
          <div key={member.id} className="bg-white border border-gray-200 rounded-md p-4 shadow-sm flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm border border-sky-200 shadow-inner flex-shrink-0">
              {member.initials}
            </div>
            <div className="flex-1 space-y-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400">#{index + 1}</span>
                <span className="text-xs text-gray-500 font-medium">{member.yearsActive} years active</span>
              </div>
              <h4 className="font-semibold text-gray-900 truncate">{member.name}</h4>
              <p className="text-xs font-medium text-sky-700">{member.designation}</p>
              <p className="text-xs text-gray-500 pt-1 font-mono">{member.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentBody;