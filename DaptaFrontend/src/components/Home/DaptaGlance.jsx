import React from 'react';
import heroImg1 from "../../img/heroimg1.png";
import { Link } from 'react-router-dom'; // 👈 Make sure to import Link for navigation
function DaptaGlance() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 bg-white overflow-hidden font-sans">

      {/* Decorative background watermark (The large faded 'S' curve on the left) */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[35%] aspect-square opacity-5 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-gray-900 w-full h-full">
          <path d="M50,0 C20,0 0,20 0,50 C0,80 20,100 50,100 C80,100 100,80 100,50 C100,20 80,0 50,0 Z M50,85 C30,85 15,70 15,50 C15,30 30,15 50,15 C70,15 85,30 85,50 C85,70 70,85 50,85 Z" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* Left Side: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center text-center px-4 md:px-8">

          {/* Heading with Brand Icon */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#E76F51] text-2xl">
              {/* Simple grid/flower-like placeholder icon matching the logo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
              </svg>
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-[#333333]">
              Dapta At A Glance !!
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-[#1c1c1c] text-[15px] md:text-base leading-relaxed max-w-xl mb-6 font-light">
            Dapta is a Non-Governmental, Non-political, Non-profit making Voluntary Organisation,
            has been working in Kalahandi District since 1992. The main aim of the Organisation is to
            establish a just, sustainable and participatory society by utilizing local available resources
            and people's organization's where each individual will live in dignity and self respect.
          </p>

          {/* Read More Link */}
          <Link
            to="/about" // <-- 2. Use 'to' instead of 'href'
            className="text-[#2A9D8F] font-medium hover:text-[#1d6f65] transition-colors duration-200 border-b border-transparent hover:border-[#1d6f65] text-base inline-block"
          >
            Read More
          </Link>
        </div>

        {/* Center Accent Borders */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full relative min-h-[300px]">
          {/* Blue Line */}
          <div className="absolute right-2 top-0 bottom-0 w-1 bg-[#2A9D8F]"></div>
          {/* Orange Line (Shorter, offset downward) */}
          <div className="absolute right-0 top-1/3 bottom-4 w-1.5 bg-[#F4A261]"></div>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
          <div className="relative p-2 bg-[#F7F5F0] rounded-sm shadow-sm max-w-md lg:max-w-full">
            <img
              src={heroImg1}  // Replace with your actual image path
              alt="dapta Biochar Training Program"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default DaptaGlance;