import React, { useState, useEffect, useRef } from 'react';

const OurActivity = () => {
  const allActivities = [
    { id: 1, title: "Women Resource Centre: Empowering Women for Social and Economic Transformation", imageUrl: "image_2e6ca4.png" },
    { id: 2, title: "Inclusive Governance: Landscape-Based Planning and Participatory Tools", imageUrl: "image_2e6ca4.png" },
    { id: 3, title: "Leadership and Participation of Women in Local Governance", imageUrl: "image_2e6ca4.png" },
    { id: 4, title: "Sustainable Agriculture: Improving Livelihood Security for Tribal Farmers", imageUrl: "image_2e6ca4.png" },
    { id: 5, title: "Community-Led Health Initiative: Maternal and Child Care across Villages", imageUrl: "image_2e6ca4.png" },
    { id: 6, title: "Youth Skill Empowerment: Vocational Training and Capacity Building", imageUrl: "image_2e6ca4.png" },
  ];

  // Number of cards we display at once
  const CARDS_TO_SHOW = 3;
  const originalLength = allActivities.length;

  // Clone items to handle seamless circular infinite looping transitions
  // We append the first few items to the end, and prepend the last few items to the start.
  const clonedActivities = [
    ...allActivities.slice(-CARDS_TO_SHOW),
    ...allActivities,
    ...allActivities.slice(0, CARDS_TO_SHOW),
  ];

  // Start at the index where the actual original data begins
  const [currentIndex, setCurrentIndex] = useState(CARDS_TO_SHOW);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Calculate which dot should highlight based on current position
  const activeDotIndex = (currentIndex - CARDS_TO_SHOW + originalLength) % originalLength;

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Jump smoothly without transition when hit the cloned boundaries
  const handleTransitionEnd = () => {
    // If we pass the last original item into the end clones, snap back to the start original item
    if (currentIndex >= originalLength + CARDS_TO_SHOW) {
      setIsTransitioning(false); // disable animation temporarily
      setCurrentIndex(CARDS_TO_SHOW);
    }
    // If we pass the first original item into the start clones, snap forward to the end original item
    else if (currentIndex < CARDS_TO_SHOW) {
      setIsTransitioning(false); // disable animation temporarily
      setCurrentIndex(originalLength + CARDS_TO_SHOW - 1);
    }
  };

  // Re-enable transition animations immediately after an invisible snap reset occurs
  useEffect(() => {
    if (!isTransitioning) {
      // Small timeout ensures the DOM renders the snapped position before turning transitions back on
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Auto-play Loop Ticker logic (pauses on hover)
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isPaused, isTransitioning]);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Layout */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-[#E76F51] mb-2">
            <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3"/>
            </svg>
          </div>
          <span className="text-xs tracking-widest text-gray-400 font-medium uppercase mb-1">
            What We Do
          </span>
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D3748] tracking-tight">
              Our Activity
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#E76F51] rounded-full" />
          </div>
        </div>

        {/* Carousel Window Container Wrapper */}
        <div 
          className="relative flex items-center group overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 p-3 rounded-full bg-white text-gray-700 shadow-xl border border-gray-100 z-20 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
          >
            &#10094;
          </button>

          {/* Sliding Track Film */}
          <div className="w-full overflow-hidden">
            <div 
              onTransitionEnd={handleTransitionEnd}
              className={`grid grid-flow-col auto-cols-[100%] md:auto-cols-[31.9%] gap-6 ${
                isTransitioning ? 'transition-transform duration-500 ease-in-out' : 'transition-none'
              }`}
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / CARDS_TO_SHOW)}% - ${(currentIndex * 16) / CARDS_TO_SHOW}px))`,
              }}
            >
              {clonedActivities.map((card, index) => (
                <div 
                  key={`${card.id}-${index}`} 
                  className="bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col justify-between transform transition-all duration-300 hover:shadow-md"
                >
                  {/* Card Top Image Block */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={card.imageUrl} 
                      alt={card.title} 
                      className="w-full h-full object-cover block"
                    />
                    <div className="absolute top-4 left-4 w-7 h-7 bg-[#2D3748]/40 backdrop-blur-[1px] rounded-full flex items-center justify-center cursor-pointer">
                      <svg className="w-3.5 h-3.5 text-white/90 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Card Lower Main Body Structure */}
                  <div className="p-6 flex flex-col items-center justify-between flex-1 min-h-[220px]">
                    <p className="text-[#333333] text-sm md:text-[15px] font-semibold text-center leading-relaxed line-clamp-4 px-2">
                      {card.title}
                    </p>
                    <button className="bg-[#3197D6] hover:bg-[#2786C2] text-white text-[13px] font-medium py-2 px-5 rounded-[4px] mt-4 uppercase tracking-wider">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-2 p-3 rounded-full bg-white text-gray-700 shadow-xl border border-gray-100 z-20 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
          >
            &#10095;
          </button>

        </div>

        {/* Bottom Navigation Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {allActivities.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) setCurrentIndex(index + CARDS_TO_SHOW);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeDotIndex === index ? 'w-6 bg-[#E76F51]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurActivity;