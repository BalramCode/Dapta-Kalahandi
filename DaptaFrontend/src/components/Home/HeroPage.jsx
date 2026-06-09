import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const images = [
    "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781028084/heroImg2_ijll32.jpg?q=80&w=1200&auto=format&fit=crop",
    "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017400/heroImg1_hnzihq.jpg?q=80&w=1200&auto=format&fit=crop",
    "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017399/heroImg3_u9woac.jpg?q=80&w=1200&auto=format&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  // Helper to safely reset and kick off the auto-rotation loop
  const resetAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds for an elegant, slow-paced transition
  };

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    resetAutoPlay();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, [images.length]);

  // Interactive Control Handlers
  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetAutoPlay();
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAutoPlay();
  };

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
    resetAutoPlay();
  };

  return (
    <div className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-black flex items-center justify-center isolate select-none">
      
      <style>{`
        @keyframes cinematicPan {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.12) translate(-0.5%, 0.5%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        @keyframes cinematicZoom {
          0% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes fadeUpIn {
          0% { opacity: 0; transform: translateY(30px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-ken-burns-1 { animation: cinematicPan 24s ease-in-out infinite; }
        .animate-ken-burns-2 { animation: cinematicZoom 28s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUpIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* BACKGROUND CAROUSEL IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const animationClass = index % 2 === 0 ? "animate-ken-burns-1" : "animate-ken-burns-2";

          return (
            <img
              key={index}
              src={src}
              alt={`Peace slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1400ms] ease-in-out will-change-transform ${
                isActive 
                  ? "opacity-100 scale-100 pointer-events-auto z-10" 
                  : "opacity-0 scale-105 pointer-events-none z-0"
              } ${isActive ? animationClass : ""}`}
            />
          );
        })}
      </div>

      {/* CINEMATIC GRADIENT VIGNETTE OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none z-10" />

      {/* INTERACTIVE TYPOGRAPHY & HERO ACTIONS */}
      <div className="relative z-20 max-w-5xl px-4 sm:px-6 md:px-12 text-center animate-fade-up flex flex-col items-center">
        
        {/* Subtle Institutional Tag */}
        <div className="mb-4 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-xs">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
            DAPTA Empowerment Mission
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white/95 uppercase leading-[1.15] sm:leading-tight">
          March towards a <br className="hidden sm:inline" />
          <span className="inline-block font-medium text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.25)] transition-all duration-300 hover:scale-105 hover:text-emerald-300 cursor-default">
            non-violent
          </span>
          <span className="text-white/40 font-light"> & </span>
          <span className="inline-block font-semibold text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-105 hover:text-sky-300 cursor-default">
            peaceful world
          </span>
        </h1>

        <div className="mt-8 w-20 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 hover:w-44 hover:via-sky-400" />

        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300/90 max-w-2xl font-light leading-relaxed tracking-wide text-center">
          Mobilizing community resilience, sustainable ecosystems, and structural legal rights to establish enduring, equitable dignity.
        </p>

        {/* RESPONSIVE CALL TO ACTIONS (CTAs) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
  <Link
    to="/activities/all/health"
    className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all duration-200 text-center"
  >
    Explore Our Work
  </Link>
  <Link
    to="/get-involved/donation-info"
    className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl active:scale-95 transition-all duration-200 text-center"
  >
    Get Involved
  </Link>
</div>
      </div>

      {/* TACTILE MANUAL CAROUSEL CONTROLS */}
      <button
        onClick={handlePrev}
        aria-label="Previous image slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/10 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 focus:outline-none active:scale-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        aria-label="Next image slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/10 hover:bg-white/10 text-white/60 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 focus:outline-none active:scale-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* VISUAL SLIDE INDICATORS TRACKER */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5 bg-black/20 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/5">
        {images.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={(e) => handleDotClick(index, e)}
              aria-label={`Go to slide index position ${index + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full focus:outline-none ${
                isActive ? "w-8 bg-sky-400" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Hero;