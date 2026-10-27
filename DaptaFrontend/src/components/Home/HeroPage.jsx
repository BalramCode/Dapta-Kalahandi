import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const images = [
    "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017400/heroImg1_hnzihq.jpg?q=80&w=1200&auto=format&fit=crop",
    "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781028084/heroImg2_ijll32.jpg?q=80&w=1200&auto=format&fit=crop",
    "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017399/heroImg3_u9woac.jpg?q=80&w=1200&auto=format&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const resetAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black flex items-center justify-center font-sans group select-none">

      {/* Background Images Layer */}
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Soft continuous zoom effect */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear ${isActive ? "scale-105" : "scale-100"
                }`}
              style={{ backgroundImage: `url(${src})` }}
            />
            {/* High-contrast modern gradients to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>
        );
      })}

      {/* Main Hero Content Area */}
      <div className="relative mt-20 z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-center h-full">
        <div className="max-w-3xl animate-fade-in-up">

          {/* Animated Mission Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-5 sm:mb-8 shadow-2xl cursor-default transition-all duration-300 hover:bg-white/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-sm font-bold tracking-[0.18em] text-white uppercase">
              DAPTA Empowerment Mission
            </span>
          </div>

          {/* Bold, Clean Typography */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[80px] font-extrabold text-white leading-[1.08] tracking-tight drop-shadow-2xl">
            Empowering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
              Communities
            </span>
            <br />
            Transforming Lives
          </h1>

          {/* Readable Description */}
          <p className="mt-5 sm:mt-8 text-sm sm:text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
            Mobilizing community resilience, sustainable ecosystems, and structural legal rights to establish enduring, equitable dignity for a peaceful world.
          </p>

          {/* Interactive Call-to-Action Buttons */}
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5">
            <Link
              to="/activities/all/health"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-widest text-white uppercase bg-emerald-500 rounded-full overflow-hidden transition-all duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            >
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>

            <Link
              to="/get-involved/donation-info"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-widest text-white uppercase bg-transparent border-[2px] border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-300 hover:scale-105"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Tactile Manual Slider Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/20 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7" strokeWidth={2.5} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/20 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7" strokeWidth={2.5} />
      </button>

      {/* Sleek Progress Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full bg-white ${index === currentIndex
                ? "w-10 h-2 opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                : "w-2 h-2 opacity-40 hover:opacity-100 hover:scale-125"
              }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default Hero;