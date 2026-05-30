import React from 'react';

const LatestUpdates = () => {
  const updates = [
    {
      id: 1,
      title: "Equipments distribution for Disability people",
      description: "Training Workshop and Equipments distrib...",
      // We map the image from image_2e0bc3.jpg as a reference placeholder for real rendering
      imageSrc: "image_2e0bc3.jpg", 
      isIllustration: false,
    },
    {
      id: 2,
      title: "Declaration of three ODF",
      description: "Declaration of three ODF (Open Defecatio...",
      imageSrc: "image_2e0bc3.jpg", // Replace with an illustration vector path if preferred
      isIllustration: true, // Conditionally matches the clean centered white container background padding
    },
    {
      id: 3,
      title: "Swasthy Mela",
      description: "Observation of SWASTHYA MELA at Baksandi...",
      imageSrc: "image_2e0bc3.jpg",
      isIllustration: false,
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2E40] tracking-tight">
            News Events & Blogs
          </h2>
        </div>

        {/* 3-Card Columns Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {updates.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-100/80 shadow-sm rounded-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Media Block */}
              <div className={`relative w-full aspect-[4/3] overflow-hidden ${
                item.isIllustration ? 'bg-white p-6 flex items-center justify-center' : 'bg-gray-100'
              }`}>
                {item.isIllustration ? (
                  /* Recreating the vector washing hand illustration layout dynamically if flagged */
                  <div className="w-full h-full flex items-center justify-center bg-sky-50/50 rounded-full max-w-[200px] aspect-square mx-auto relative p-2">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full h-full object-contain mix-blend-multiply block"
                    />
                  </div>
                ) : (
                  /* Standard Photographic Cards Layout Frame */
                  <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover block transition-transform duration-500 hover:scale-[1.02]"
                  />
                )}
              </div>

              {/* Lower Text Content Container Block */}
              <div className="p-6 flex flex-col items-start justify-between flex-1 min-h-[220px]">
                <div className="w-full space-y-3">
                  {/* Event/Post Title */}
                  <h3 className="text-[#1A2E40] text-base md:text-lg font-bold leading-snug tracking-wide line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Faded Short Snippet Excerpt */}
                  <p className="text-[#888888] text-sm font-light leading-relaxed tracking-normal line-clamp-2 pr-2">
                    {item.description}
                  </p>
                </div>

                {/* Sky-Blue Action Button matching your screenshot blueprint */}
                <button className="bg-[#3197D6] hover:bg-[#2786C2] active:bg-[#1E74AB] text-white text-[12px] font-medium py-1.5 px-4 rounded-[3px] mt-6 shadow-sm transition-colors uppercase tracking-wider">
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;