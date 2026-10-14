import React, { useState, useEffect } from 'react';

const Events = () => {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    eventIndex: 0,
    imageIndex: 0
  });

  const openLightbox = (eventIndex, imageIndex) => {
    setLightboxState({ isOpen: true, eventIndex, imageIndex });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
    setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxState(prev => {
      const currentImages = events[prev.eventIndex].images;
      const nextIndex = (prev.imageIndex + 1) % currentImages.length;
      return { ...prev, imageIndex: nextIndex };
    });
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxState(prev => {
      const currentImages = events[prev.eventIndex].images;
      const nextIndex = (prev.imageIndex - 1 + currentImages.length) % currentImages.length;
      return { ...prev, imageIndex: nextIndex };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxState.isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState.isOpen]);

  const events = [
    {
      id: 1,
      title: "Cyber Awareness Programme",
      date: "July 2026",
      badge: "Community Education",
      themeColor: "sky",
      description: "DAPTA organized a comprehensive Cyber Awareness Programme aimed at educating students and community members about the critical aspects of online safety and cybersecurity. The initiative focused on raising awareness around digital fraud prevention, secure password management, and identifying phishing attempts. Participants were guided on responsible social media usage and the importance of safeguarding personal information in the digital age. This programme successfully promoted digital literacy and empowered the community to navigate technology securely and responsibly.",
      images: [
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928579/IMG-20260711-WA0047_t38a0i.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928580/IMG-20260711-WA0046_vnwbev.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928581/IMG-20260711-WA0045_ipqrgk.jpg"
      ]
    },
    {
      id: 2,
      title: "World Water Day Campaign",
      date: "March 2026",
      badge: "Environmental Initiative",
      themeColor: "emerald",
      description: "In observance of World Water Day, DAPTA conducted an extensive campaign to highlight the critical need for water conservation and sustainable management practices. The event brought together community members through interactive awareness activities centered on protecting natural water resources and reducing wastage. Discussions emphasized actionable steps for responsible water usage in daily rural and agricultural activities. By fostering widespread participation, the campaign underscored the shared responsibility of preserving our vital water ecosystems for future generations.",
      images: [
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928587/IMG-20260711-WA0025_kvzzlk.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928585/IMG-20260711-WA0028_z3jjn3.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928585/IMG-20260711-WA0027_vfipkl.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928584/IMG-20260711-WA0035_mgwrvp.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928585/IMG-20260711-WA0034_fxobet.jpg"
      ]
    },
    {
      id: 3,
      title: "World Environment Day Celebration",
      date: "June 2026",
      badge: "Sustainability Action",
      themeColor: "amber",
      description: "DAPTA celebrated World Environment Day with a series of impactful activities promoting environmental protection and sustainable practices within the region. The celebration featured extensive tree plantation drives and community cleanliness initiatives to foster a cleaner, greener surrounding. Awareness campaigns focused on the urgent need to conserve local biodiversity and implement pollution reduction strategies at the grassroots level. This event successfully mobilized community participation, reinforcing our collective commitment to ecological sustainability.",
      images: [
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928578/IMG-20260711-WA0049_atj1cf.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928578/IMG-20260711-WA0048_jmoass.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928577/IMG-20260711-WA0050_uifvsg.jpg"
      ]
    }
  ];

  const getThemeStyles = (color) => {
    const palette = {
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", icon: "text-sky-500" },
      emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-100", icon: "text-emerald-500" },
      amber: { badge: "bg-amber-50 text-amber-700 border-amber-100", icon: "text-amber-500" }
    };
    return palette[color] || palette.sky;
  };

  const renderImageGallery = (images, eventIndex) => {
    if (images.length === 3) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 h-full">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(eventIndex, i)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100 shadow-sm ${i === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto' : 'aspect-[4/3] sm:aspect-[4/3]'
                }`}
            >
              <img src={img} alt={`Event shot ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-gray-900 rounded-full p-2.5 backdrop-blur-sm shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (images.length === 5) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 h-full">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(eventIndex, i)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100 shadow-sm ${i === 0 ? 'col-span-2 row-span-2 aspect-square sm:aspect-auto' : 'aspect-[4/3] sm:aspect-square'
                }`}
            >
              <img src={img} alt={`Event shot ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-gray-900 rounded-full p-2.5 backdrop-blur-sm shadow-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full inline-block mb-4">
            Recent Activities
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Events & Showcases
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Discover the latest programmes, campaigns, and community events organized by DAPTA to foster awareness, sustainability, and education across the region.
          </p>
        </div>

        {/* Events Layouts */}
        <div className="flex flex-col">
          {events.map((event, index) => {
            const isEven = index % 2 === 1;
            const layout = getThemeStyles(event.themeColor);

            return (
              <div key={event.id} className="py-12 sm:py-20 border-b border-gray-100 last:border-0 group/section">
                <div className={`flex flex-col gap-10 lg:gap-16 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                  {/* Text Description Area */}
                  <div className="w-full lg:w-2/5 flex flex-col justify-center transition-all duration-700 lg:group-hover/section:-translate-y-2">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-6 self-start ${layout.badge}`}>
                      {event.badge}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 tracking-tight leading-tight">
                      {event.title}
                    </h2>
                    {/* <div className="flex items-center gap-2 text-gray-500 font-semibold text-sm mb-6">
                      <svg className={`w-5 h-5 ${layout.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {event.date}
                    </div> */}
                    <p className="text-gray-600 text-base leading-relaxed text-justify sm:text-left">
                      {event.description}
                    </p>
                  </div>

                  {/* Image Gallery Area */}
                  <div className="w-full lg:w-3/5">
                    {renderImageGallery(event.images, index)}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${lightboxState.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gray-950/95 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeLightbox}
        />

        {/* Modal Inner */}
        {lightboxState.isOpen && (
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8" onClick={e => e.stopPropagation()}>

            {/* Top Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group z-30"
              aria-label="Close"
            >
              <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Nav */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 group z-30 hover:-translate-x-1"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Nav */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 group z-30 hover:translate-x-1"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative w-full max-w-6xl flex items-center justify-center select-none" onClick={closeLightbox}>
              <img
                src={events[lightboxState.eventIndex].images[lightboxState.imageIndex]}
                alt={`Event full preview`}
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 sm:bottom-8 text-white/60 font-semibold tracking-widest text-xs sm:text-sm z-30 bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {lightboxState.imageIndex + 1} / {events[lightboxState.eventIndex].images.length}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Events;