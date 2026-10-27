import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ZoomIn, ChevronLeft, ChevronRight, X } from 'lucide-react';

const ClubPhotos = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const clubPhotos = [
    {
      id: 1,
      title: "Livelihood Opportunities & Convergence Meeting",
      category: "Livelihood & Convergence",
      venue: "Borbhata, Kalahandi",
      date: "29 April 2024",
      themeColor: "emerald",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1792142265/97e38629-83ba-44d0-bb8d-1a2f83d2c5d9.png",
      description: "Interactive community liaison meeting in Borbhata connecting rural women and youth with government line departments, cooperatives, and civil society livelihood schemes."
    },
    {
      id: 2,
      title: "Capacity Building for Women's Participation & Leadership",
      category: "Women Leadership",
      venue: "Tentulichuan, Kalahandi",
      date: "17 March 2024",
      themeColor: "sky",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1792142261/cb7fc4f0-239e-4f4e-abf8-cab294f8b7ca.png",
      description: "Grassroots leadership training and capacity building workshop at Tentulichuan, empowering adolescent girls and women in community decision-making and civic participation."
    },
    {
      id: 3,
      title: "Youth & Women Leadership Enhancement Workshop",
      category: "Adolescent Club & Leadership",
      venue: "Badkhaermal, Kamthana",
      date: "16 February 2025",
      themeColor: "purple",
      imgUrl: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1792142229/cc1ca101-cd2d-4b8e-9e5d-e5521ed83198.png",
      description: "Adolescent club and women's empowerment capacity building session organized by DAPTA with support from Swiss Women League at Kamthana, recognizing active community leaders."
    }
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [lightboxIndex]);

  const nextPhoto = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % clubPhotos.length);
  };

  const prevPhoto = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + clubPhotos.length) % clubPhotos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const getThemeStyles = (color) => {
    const palette = {
      emerald: {
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        highlight: "group-hover:text-emerald-600"
      },
      sky: {
        badge: "bg-sky-50 text-sky-700 border-sky-200",
        highlight: "group-hover:text-sky-600"
      },
      purple: {
        badge: "bg-purple-50 text-purple-700 border-purple-200",
        highlight: "group-hover:text-purple-600"
      }
    };
    return palette[color] || palette.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl my-15 mx-auto px-4">
        
        {/* Module Section Title */}
        <div className="border-b border-gray-200 pb-6 mb-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-100/70 border border-sky-200 px-3 py-1 rounded-full">
            Youth & Women Club Initiatives
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Club & Program Photos
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed">
            Photographic documentation of DAPTA's adolescent clubs, women leadership workshops, and capacity-building training programs across villages in Kalahandi.
          </p>
        </div>

        {/* 3-Column Responsive Screen Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubPhotos.map((photo, index) => {
            const theme = getThemeStyles(photo.themeColor);
            return (
              <div 
                key={photo.id} 
                onClick={() => openLightbox(index)}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                <div>
                  {/* Image Frame Box */}
                  <div className="w-full aspect-[4/3] bg-neutral-900 relative overflow-hidden">
                    <img 
                      src={photo.imgUrl} 
                      alt={photo.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border shadow-xs backdrop-blur-md bg-white/95 ${theme.badge}`}>
                        {photo.category}
                      </span>
                    </div>

                    {/* Zoom Icon Button */}
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white p-2 rounded-lg backdrop-blur-sm group-hover:bg-sky-600 transition-colors shadow-md">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Context Information Area */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-2.5 font-medium">
                      <span className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        {photo.venue}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        {photo.date}
                      </span>
                    </div>

                    <h3 className={`text-lg font-extrabold text-gray-900 tracking-tight leading-snug transition-colors ${theme.highlight}`}>
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2.5 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mx-6 mb-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-sky-700 group-hover:text-sky-800">
                  <span className="flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-sky-600" />
                    Click to Enlarge
                  </span>
                  <span className="font-mono text-gray-400 uppercase text-[11px]">
                    PHOTO-0{photo.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Full-Screen Lightbox Portal Modal */}
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 transition-all duration-300"
            onClick={closeLightbox}
          >
            {/* Modal Dialog Card */}
            <div 
              className="relative w-full max-w-5xl bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Control Top Metadata Bar */}
              <div className="px-5 py-3.5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-white gap-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 text-xs font-mono font-bold shrink-0">
                    {lightboxIndex + 1} / {clubPhotos.length}
                  </span>
                  <span className="text-xs sm:text-sm font-bold truncate text-neutral-200">
                    {clubPhotos[lightboxIndex].title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 border border-neutral-700 cursor-pointer shrink-0"
                >
                  <span>Close</span>
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image Viewer Stage */}
              <div className="relative bg-black flex items-center justify-center max-h-[72vh] min-h-[300px] overflow-hidden select-none">
                <img
                  src={clubPhotos[lightboxIndex].imgUrl}
                  alt={clubPhotos[lightboxIndex].title}
                  className="max-w-full max-h-[72vh] w-auto h-auto object-contain"
                />

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-sky-600 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/10 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={nextPhoto}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-sky-600 text-white flex items-center justify-center backdrop-blur-sm transition-all border border-white/10 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption & Meta Strip */}
              <div className="px-5 py-3.5 bg-neutral-950 border-t border-neutral-800 text-neutral-300 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1 text-sky-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    {clubPhotos[lightboxIndex].venue}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {clubPhotos[lightboxIndex].date}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 sm:text-right max-w-lg truncate sm:whitespace-normal">
                  {clubPhotos[lightboxIndex].description}
                </p>
              </div>
            </div>

            {/* Backdrop click dismiss shield */}
            <div
              className="absolute inset-0 z-0 cursor-pointer"
              onClick={closeLightbox}
              aria-hidden="true"
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default ClubPhotos;