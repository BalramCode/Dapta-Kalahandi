import React from 'react';

const AwardsAndRecognitions = () => {
  // Replace these placeholder URLs with your actual image paths
  const awards = [
    { id: 1, src: 'https://via.placeholder.com/300', alt: 'Award 1' },
    { id: 2, src: 'https://via.placeholder.com/300', alt: 'Award 2' },
    { id: 3, src: 'https://via.placeholder.com/300', alt: 'Award 3' },
    { id: 4, src: 'https://via.placeholder.com/300', alt: 'Award 4' },
    { id: 5, src: 'https://via.placeholder.com/300', alt: 'Certificate 1' },
    { id: 6, src: 'https://via.placeholder.com/300', alt: 'Award 5' },
    { id: 7, src: 'https://via.placeholder.com/300', alt: 'Award 6' },
    { id: 8, src: 'https://via.placeholder.com/300', alt: 'Award 7' },
    { id: 9, src: 'https://via.placeholder.com/300', alt: 'Award 8' },
  ];

  return (
    <section className="w-full bg-[#e65c19] py-16 px-4 md:px-8 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 tracking-wide">
          Awards & Recognition
        </h2>

        {/* Smooth Scrolling / Overflow Container */}
        <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 pb-6 px-4">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="flex-shrink-0 snap-center group cursor-pointer"
            >
              {/* Image Wrapper dealing with Circular Smooth Transition */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden border-4 border-transparent group-hover:border-white rounded-2xl group-hover:rounded-full transition-all duration-500 ease-in-out shadow-lg bg-white/10 backdrop-blur-sm">
                <img
                  src={award.src}
                  alt={award.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AwardsAndRecognitions;