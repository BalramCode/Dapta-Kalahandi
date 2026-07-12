// src/components/About/ProfileNote.jsx
import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const ProfileNote = ({ title, name, designation, image, alwaysVisibleParagraphs, collapsibleParagraphs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Sticky Profile Sidebar */}
        <div className="lg:col-span-4 flex flex-col items-center text-center lg:sticky lg:top-32 space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* Decorative Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-transparent rounded-3xl -z-10 pointer-events-none" />
          
          {/* Circular Image Container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-gradient-to-tr from-sky-400 to-emerald-400 shadow-xl group overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
            <img
              src={image || `https://via.placeholder.com/300/e0f2fe/0369a1?text=${encodeURIComponent(designation)}`}
              alt={name}
              className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110 bg-white"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/300/e0f2fe/0369a1?text=${encodeURIComponent(designation)}`;
              }}
            />
          </div>

          {/* Profile Name & Designation */}
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
              {name}
            </h3>
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-slate-100 rounded-full">
              <span className="text-sm font-bold tracking-widest uppercase text-sky-600">
                {designation}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Note / Letter */}
        <div className="lg:col-span-8 bg-white p-8 sm:p-10 md:p-12 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
          
          {/* Elegant Quote Icon Overlay */}
          <Quote className="absolute top-8 left-8 w-16 h-16 text-slate-100 -rotate-6 pointer-events-none select-none" />
          
          <div className="relative z-10 space-y-6 text-slate-700 text-base md:text-lg leading-[1.8] font-normal text-justify">
            
            {alwaysVisibleParagraphs.map((para, idx) => {
              if (idx === 0) {
                // Drop-cap for the very first paragraph for a professional letter feel
                return (
                  <p key={idx} className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-sky-500 first-letter:mr-2 first-letter:float-left">
                    {para}
                  </p>
                );
              }
              return <p key={idx}>{para}</p>;
            })}
            
            <div className={`space-y-6 overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[2500px] opacity-100 mt-6' : 'max-h-0 sm:max-h-[2500px] opacity-0 sm:opacity-100 sm:mt-6'}`}>
              {collapsibleParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Mobile Read More Toggle */}
          {collapsibleParagraphs.length > 0 && (
            <div className="sm:hidden flex justify-center mt-8 pt-8 border-t border-slate-100">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-center w-full py-3 px-6 bg-slate-50 hover:bg-sky-50 text-sky-600 font-bold text-sm uppercase tracking-widest rounded-xl border border-slate-200 transition-colors duration-300 focus:outline-none"
              >
                {isExpanded ? 'Read Less' : 'Read Full Message'}
              </button>
            </div>
          )}

          {/* Signature Block at bottom right */}
          <div className="mt-12 pt-8 border-t border-dashed border-slate-200 flex flex-col items-end text-right">
            <span className="font-serif italic text-xl text-slate-400 mb-1">Sincerely,</span>
            <h4 className="text-slate-900 font-extrabold text-xl tracking-tight">
              {name}
            </h4>
            <p className="text-sm font-bold text-sky-600 tracking-wider uppercase mt-1">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNote;
