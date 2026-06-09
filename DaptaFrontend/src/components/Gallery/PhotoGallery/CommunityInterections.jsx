import React, { useState, useEffect } from 'react';

const CommunityInterections = () => {
  // Controlled modal asset tracking state
  const [activePhoto, setActivePhoto] = useState(null);

  // Keyboard navigation event wrapper (closes modal cleanly on pressing Escape key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryPhotos = [
    {
      id: 1,
      heading: "Livelihood- MKSP",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017411/heroImg2_qomdss.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      heading: "Millet Crop Program",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017386/gallery3_gnutun.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      heading: "CCHDP School Programme",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017421/gallery21_t3dkyb.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      heading: "Livelihood- AWO",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017385/gallery5_fgwneo.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      heading: "CCHDP Health Care",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017382/gallery8_pvursx.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      heading: "Wash Academy",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017382/gallery9_zahovg.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7, // Fixed sequential array IDs to prevent duplicate keys runtime issue
      heading: "Livelihood- CEE",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017383/gallery10_dc7oh1.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      heading: "Sabala",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017417/gallery22_xugpoc.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      heading: "Women Empowerment- FCC",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017428/gallery14_wriozx.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      heading: "CMHC Mental Healthcare",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017428/gallery15_gdhaas.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      heading: "Observation Day of TI",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1781017430/gallery16_ue9ldk.jpg?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl my-15 mx-auto px-4">
        
        {/* Module Section Title */}
        <div className="border-b border-gray-200 pb-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Media Library
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">
            Community Interaction Photos
          </h1>
        </div>

        {/* Dense Responsive Grid Layout Component */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {galleryPhotos.map((photo) => (
            <button 
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="bg-white p-2 rounded-xl border border-gray-200/70 shadow-sm hover:shadow-md hover:border-sky-400 transition-all duration-200 flex flex-col group text-left cursor-pointer outline-none focus:ring-2 focus:ring-sky-500/40"
            >
              {/* Image Frame Box with Uniform Square Aspect Ratio Layout */}
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100 relative">
                <img 
                  src={photo.imgUrl} 
                  alt={photo.heading} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />
                
                {/* Visual indicator overlay on hover to signal interactivity */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="p-2 bg-white/90 rounded-lg shadow-sm text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.602 10.602z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Minimal Text Subheading Segment Below Image */}
              <div className="mt-2 text-center pt-1 px-1 flex-grow flex items-center justify-center w-full">
                <h3 className="text-xs font-bold text-gray-700 tracking-tight line-clamp-2 leading-tight group-hover:text-sky-600 transition-colors w-full">
                  {photo.heading}
                </h3>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN IMMERSIVE PREVIEW INTERACTIVE MODAL */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm animate-fade-in animate-duration-200"
          onClick={() => setActivePhoto(null)}
        >
          {/* Modal Card wrapper - stops click event bubbling from shutting overlay framework */}
          <div 
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Quick Action Close Navigation Button */}
            <button 
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer outline-none"
              aria-label="Close image preview"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Immersive Preview Layout Container */}
            <div className="w-full bg-gray-900/40 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img 
                src={activePhoto.imgUrl.replace('w=400', 'w=1200')} // Dynamically fetch a higher resolution from Cloudinary for large viewing
                alt={activePhoto.heading}
                className="max-w-full max-h-[70vh] object-contain select-none"
              />
            </div>

            {/* Bottom Caption Segment Panel */}
            <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-900 tracking-tight">
                {activePhoto.heading}
              </h2>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200/50">
                Media Frame Asset
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityInterections;