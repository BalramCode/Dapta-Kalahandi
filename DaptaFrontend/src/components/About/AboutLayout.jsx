// src/components/About/AboutLayout.jsx
import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AboutLayout = () => {
  const location = useLocation();

  const getDynamicTitle = () => {
    const path = location.pathname;
    if (path.includes('about-us')) return 'About Us';
    if (path.includes('profile')) return 'Organisation Profile';
    if (path.includes('governing-body')) return 'Governing Body';
    if (path.includes('organogram')) return 'Organogram';
    if (path.includes('legal-documents')) return 'Legal Documents';
    if (path.includes('roadmap')) return 'Strategy & Roadmap';
    if (path.includes('founder-note')) return 'Founder Note';
    if (path.includes('former-secretary-note')) return 'Former Secretary Note';
    if (path.includes('secretary-note')) return 'Secretary Note';
    return 'About Us';
  };

  const title = getDynamicTitle();

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] font-sans antialiased flex flex-col pt-20 md:pt-24">
      
      {/* Sleek Minimalist Page Header */}
      <div className="w-full bg-white border-b border-slate-200/60 shadow-[0_4px_20px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Main Title with Entrance Animation */}
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              {title}
            </h1>
            <div className="h-1.5 w-16 bg-sky-500 rounded-full mt-3 sm:mt-4" />
          </div>

          {/* Elegant Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-500 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300" />
            <span className="text-slate-400 cursor-default">About</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300" />
            <span className="text-sky-600">{title}</span>
          </nav>
        </div>
      </div>

      {/* Dynamic Sub-Page Container Wrapper */}
      <div className="w-full flex-grow py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AboutLayout;