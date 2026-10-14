import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    activityIndex: 0,
    imageIndex: 0
  });

  const openLightbox = (activityIndex, imageIndex) => {
    setLightboxState({ isOpen: true, activityIndex, imageIndex });
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
      const currentImages = activities[prev.activityIndex].images;
      const nextIndex = (prev.imageIndex + 1) % currentImages.length;
      return { ...prev, imageIndex: nextIndex };
    });
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxState(prev => {
      const currentImages = activities[prev.activityIndex].images;
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

  const activities = [
    {
      id: 1,
      title: "District-Level Meeting on Ecological & Tribal Rights",
      badge: "Advocacy & Networking",
      themeColor: "sky",
      description: "DAPTA organized a crucial district-level meeting bringing together youth representatives, key government stakeholders, and partner NGOs to strengthen collaboration for the protection of ecological resources and tribal rights. The discussions focused intensely on sustainable development frameworks, fostering youth leadership, and encouraging grassroots community participation. By building stronger institutional networks, the initiative aimed to establish a robust advocacy pipeline to safeguard indigenous communities and preserve the local environment.",
      images: [
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928590/IMG-20260711-WA0016_swwhte.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928590/IMG-20260711-WA0015_stc5gq.jpg"
      ]
    },
    {
      id: 2,
      title: "Special Campaign 5.0",
      badge: "Community Outreach",
      themeColor: "amber",
      description: "Special Campaign 5.0 was launched as an extensive community outreach initiative primarily focused on public awareness, active citizen participation, and strengthening engagement at the grassroots level. The campaign emphasized the importance of collaborative action and mobilized local volunteer participation to address pressing community issues. Through widespread awareness generation, this initiative successfully empowered local residents to take proactive roles in shaping and improving their own communities.",
      images: [
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928590/IMG-20260711-WA0018_coxtfm.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928590/IMG-20260711-WA0017_bvanrp.jpg"
      ]
    },
    {
      id: 3,
      title: "Capacity Building Training for Leadership",
      badge: "Skill Development",
      themeColor: "purple",
      description: "Recognizing the need for strong local governance, DAPTA conducted a capacity-building training programme aimed at strengthening leadership skills and improving community participation. The interactive sessions were tailored to empower youth and emerging local leaders with practical tools for teamwork, effective communication, and strategic decision-making. By strengthening community-level institutions, the training laid a solid foundation for more sustainable development and self-reliant grassroots leadership.",
      images: [
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928588/IMG-20260711-WA0023_feo1n0.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928589/IMG-20260711-WA0019_hyfxdy.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928589/IMG-20260711-WA0022_mjo8it.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928589/IMG-20260711-WA0020_auwvky.jpg"
      ]
    },
    {
      id: 4,
      title: "Water Conclave Programme at Badli Kiss College",
      badge: "Environmental Initiative",
      themeColor: "emerald",
      description: "DAPTA successfully organized a Water Conclave Programme at Badli Kiss College, Bhawanipatna, dedicated to promoting critical awareness around water conservation and sustainable water resource management. The conclave facilitated engaging discussions among students, educators, domain experts, and community members regarding climate resilience and proactive participation. The event underscored the shared responsibility of protecting local water resources and encouraged adopting responsible environmental practices in daily life.",
      images: [
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928575/IMG-20260711-WA0060_whbryg.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928575/IMG-20260711-WA0054_c3zr1t.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928576/IMG-20260711-WA0059_vhk8ge.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928577/IMG-20260711-WA0055_wivt2d.jpg",
        "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783928577/IMG-20260711-WA0053_lz94qk.jpg"
      ]
    }
  ];

  const getThemeStyles = (color) => {
    const palette = {
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", icon: "text-sky-500" },
      emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-100", icon: "text-emerald-500" },
      amber: { badge: "bg-amber-50 text-amber-700 border-amber-100", icon: "text-amber-500" },
      purple: { badge: "bg-purple-50 text-purple-700 border-purple-100", icon: "text-purple-500" }
    };
    return palette[color] || palette.sky;
  };

  const renderImageGallery = (images, activityIndex) => {
    if (images.length === 2) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-full">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(activityIndex, i)}
              className="relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100 shadow-sm aspect-[4/3] sm:aspect-square"
            >
              <img src={img} alt={`Activity shot ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-gray-900 rounded-full p-2.5 backdrop-blur-sm shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (images.length === 4) {
      return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(activityIndex, i)}
              className="relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100 shadow-sm aspect-[4/3]"
            >
              <img src={img} alt={`Activity shot ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-gray-900 rounded-full p-2.5 backdrop-blur-sm shadow-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
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
              onClick={() => openLightbox(activityIndex, i)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100 shadow-sm ${i === 0 ? 'col-span-2 row-span-2 aspect-square sm:aspect-auto' : 'aspect-[4/3] sm:aspect-square'
                }`}
            >
              <img src={img} alt={`Activity shot ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
            Field Operations
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Activities Gallery
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore our continuous on-ground efforts across communities, ranging from environmental advocacy to capacity-building empowerment programs.
          </p>
        </div>

        {/* Activities Layouts */}
        <div className="flex flex-col">
          {activities.map((activity, index) => {
            const isEven = index % 2 === 1;
            const layout = getThemeStyles(activity.themeColor);

            return (
              <div key={activity.id} className="py-12 sm:py-20 border-b border-gray-100 last:border-0 group/section">
                <div className={`flex flex-col gap-10 lg:gap-16 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                  {/* Text Description Area */}
                  <div className="w-full lg:w-2/5 flex flex-col justify-center transition-all duration-700 lg:group-hover/section:-translate-y-2">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-6 self-start ${layout.badge}`}>
                      {activity.badge}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                      {activity.title}
                    </h2>
                    <div className="w-12 h-1 bg-gray-200 mb-6 rounded-full"></div>
                    <p className="text-gray-600 text-base leading-relaxed text-justify sm:text-left">
                      {activity.description}
                    </p>
                  </div>

                  {/* Image Gallery Area */}
                  <div className="w-full lg:w-3/5">
                    {renderImageGallery(activity.images, index)}
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
                src={activities[lightboxState.activityIndex].images[lightboxState.imageIndex]}
                alt={`Activity full preview`}
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 sm:bottom-8 text-white/60 font-semibold tracking-widest text-xs sm:text-sm z-30 bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {lightboxState.imageIndex + 1} / {activities[lightboxState.activityIndex].images.length}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;