import React, { useState, useEffect } from 'react';

const OurActivity = () => {
  // 1. Data pool containing 6 customized cards
  const allActivities = [
    {
      id: 1,
      title: "Women Resource Centre: Empowering Women for Social and Economic Transformation",
      imageUrl: "image_2e6ca4.png", // Direct reference to your image file verbatim
    },
    {
      id: 2,
      title: "Inclusive Governance: Landscape-Based Planning and Participatory Tools",
      imageUrl: "image_2e6ca4.png",
    },
    {
      id: 3,
      title: "Leadership and Participation of Women in Local Governance",
      imageUrl: "image_2e6ca4.png",
    },
    {
      id: 4,
      title: "Sustainable Agriculture: Improving Livelihood Security for Tribal Farmers",
      imageUrl: "image_2e6ca4.png",
    },
    {
      id: 5,
      title: "Community-Led Health Initiative: Maternal and Child Care across Villages",
      imageUrl: "image_2e6ca4.png",
    },
    {
      id: 6,
      title: "Youth Skill Empowerment: Vocational Training and Capacity Building",
      imageUrl: "image_2e6ca4.png",
    },
  ];

  // Index pointer for the first card currently visible on screen
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 2. Next slide trigger (Circular Math logic)
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setStartIndex((prevIndex) => (prevIndex + 1) % allActivities.length);
  };

  // Previous slide trigger
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setStartIndex((prevIndex) => (prevIndex - 1 + allActivities.length) % allActivities.length);
  };

  // Reset transition locks quickly
  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [startIndex]);

  // 3. Auto-play loop to slide continuously every 4.5 seconds
  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(autoPlayTimer);
  }, [startIndex]);

  // 4. Extract exactly 3 items sequentially to display based on the running index pointer
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const targetIndex = (startIndex + i) % allActivities.length;
      cards.push(allActivities[targetIndex]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Layout directly matching image_2e6ca4.png */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Small Top Brand Icon */}
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
            {/* The absolute styled brush/underline stroke asset accent beneath 'Activity' */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#E76F51] rounded-full" />
          </div>
        </div>

        {/* Carousel Window Container Wrapper */}
        <div className="relative flex items-center group">
          
          {/* Circular Navigation Buttons - Visible on Container Hover */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 p-3 rounded-full bg-white text-gray-700 shadow-xl border border-gray-100 z-20 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
          >
            &#10094;
          </button>

          {/* Main 3 Card Layout Matrix Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {visibleCards.map((card, currentPositionIndex) => (
              <div 
                key={`${card.id}-${currentPositionIndex}`} 
                className="bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden flex flex-col justify-between transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                {/* Card Top Image Block with Floating Heart badge overlay */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    className="w-full h-full object-cover block"
                  />
                  {/* Gray floating overlay badge button with dark circular tint container */}
                  <div className="absolute top-4 left-4 w-7 h-7 bg-[#2D3748]/40 backdrop-blur-[1px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2D3748]/60 transition-colors">
                    <svg className="w-3.5 h-3.5 text-white/90 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>

                {/* Card Lower Main Body Structure */}
                <div className="p-6 flex flex-col items-center justify-between flex-1 min-h-[220px]">
                  <p className="text-[#333333] text-sm md:text-[15px] font-semibold text-center leading-relaxed tracking-normal line-clamp-4 px-2">
                    {card.title}
                  </p>

                  {/* Sky-Blue Action Button matching your screenshot design layout */}
                  <button className="bg-[#3197D6] hover:bg-[#2786C2] active:bg-[#1E74AB] text-white text-[13px] font-medium py-2 px-5 rounded-[4px] mt-4 shadow-sm hover:shadow transition-all uppercase tracking-wider">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 p-3 rounded-full bg-white text-gray-700 shadow-xl border border-gray-100 z-20 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
          >
            &#10095;
          </button>

        </div>

        {/* Bottom Circular Navigation Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {allActivities.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) setStartIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                startIndex === index ? 'w-6 bg-[#E76F51]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurActivity;