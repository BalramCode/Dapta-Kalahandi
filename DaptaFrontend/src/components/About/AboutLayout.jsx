// src/components/About/AboutLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import heroImg1 from "../../img/heroimg1.png";
const hero = "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017399/heroImg3_u9woac.jpg"
const AboutLayout = () => {
  const location = useLocation();

  // Helper function to extract the current path and return the correct title
  const getDynamicTitle = () => {
    const path = location.pathname;

    if (path.includes('about-us')) return 'About Us';
    if (path.includes('profile')) return 'Organisation Profile';
    if (path.includes('governing-body')) return 'Governing Body';
    if (path.includes('organogram')) return 'Organogram';
    if (path.includes('legal-documents')) return 'Legal Documents';
    if (path.includes('roadmap')) return 'Strategy & Roadmap';
    if (path.includes('founder-notes')) return 'Founder Notes';

    // Default fallback title if someone just visits "/about"
    return 'About Us';
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased">
      
      {/* Top Main Hero Section Banner - Height increased for a bigger image look */}
      <div className="relative w-full h-[340px] md:h-[400px] bg-gray-900 overflow-hidden">
        {/* Banner Background Image with Dark Overlay Mesh */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 bg-fixed"
          style={{ 
            backgroundImage: `url(${hero})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/20" />

        {/* Banner Centered Dynamic Title - Adjusted with pt-16 offset to remain perfectly middle-centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-lg transition-all duration-300 capitalize text-center">
            {getDynamicTitle()}
          </h1>
        </div>
      </div>

      {/* Dynamic Sub-Page Container Wrapper */}
      <div className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AboutLayout;