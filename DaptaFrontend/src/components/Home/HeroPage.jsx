import { useState, useEffect } from "react";

// 1. Correct the imports to map to your actual asset files
import heroImg1 from "../../img/heroimg1.png";
import heroImg2 from "../../img/heroimg2.png";
import heroImg3 from "../../img/heroimg4.png";
import heroImg4 from "../../img/heroimg3.png";

function Hero() {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // FIX: Only lock horizontal overflow on the body, allowing normal vertical scrolling
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, [images.length]);

  return (
    // FIX: Changed w-screen to w-full and removed h-screen layout locking to let content flow naturally
    <div className="relative w-full h-[100vh] overflow-hidden bg-black flex items-center justify-center isolate select-none">
      
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
          0% { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-ken-burns-1 { animation: cinematicPan 20s ease-in-out infinite; }
        .animate-ken-burns-2 { animation: cinematicZoom 25s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUpIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        /* Optional: Clean way to hide track scrollbars completely while preserving scroll mechanics */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Image Layer - Contained absolutely so it never expands your page size */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const animationClass = index % 2 === 0 ? "animate-ken-burns-1" : "animate-ken-burns-2";

          return (
            <img
              key={index}
              src={src}
              alt={`Peace slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
                isActive ? "opacity-40 pointer-events-auto" : "opacity-0"
              } ${isActive ? animationClass : ""}`}
            />
          );
        })}
      </div>

      {/* Premium Vignette Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 pointer-events-none z-10" />

      {/* Interactive Typography */}
      <div className="relative z-20 max-w-4xl px-6 text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-white/90 uppercase leading-tight">
          March towards a <br />
          
          <span className="inline-block font-medium text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-300 hover:scale-105 hover:text-emerald-300 cursor-default">
            non-violent
          </span> 
          <span className="text-white/60 font-light"> & </span> <br />
          
          <span className="inline-block font-semibold text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-105 hover:text-sky-300 cursor-default">
            peaceful world
          </span>
        </h1>

        <div className="mt-8 w-24 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto transition-all duration-700 hover:w-48 hover:via-sky-400" />
      </div>
    </div>
  );
}

export default Hero;