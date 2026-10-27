import React, { useState, useEffect } from 'react';

const VideoGallery = () => {
  // Local state tracking the currently active playing video asset source
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState("");

  // Video documentation of DAPTA's village water supply, stream repair, and borewell initiatives
  const videoCollection = [
    {
      id: 1,
      title: "Village Water Source Repair & Stream Flow Restoration",
      category: "Source Restoration",
      duration: "2:37",
      themeColor: "emerald",
      thumbnail: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140747/VID-20260617-WA0020_wvh31t.jpg",
      videoUrl: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140747/VID-20260617-WA0020_wvh31t.mp4",
      synopsis: "Field documentation of natural spring and stream intake repairs, restoring smooth gravity-fed water flow from forest catchment zones directly to village households."
    },
    {
      id: 2,
      title: "Community Tap Standpost & Clean Drinking Water Access",
      category: "Drinking Water Supply",
      duration: "0:21",
      themeColor: "sky",
      thumbnail: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140764/VID-20260407-WA0022_wi1rxw.jpg",
      videoUrl: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140764/VID-20260407-WA0022_wi1rxw.mp4",
      synopsis: "Village women accessing clean, continuous tap water from a newly commissioned community standpost, significantly easing daily water collection burdens."
    },
    {
      id: 3,
      title: "Pipeline Trenching & Water Supply Network in Remote Hamlets",
      category: "Pipeline Network",
      duration: "0:07",
      themeColor: "teal",
      thumbnail: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140785/VID-20260617-WA0011_qxsmy1.jpg",
      videoUrl: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140785/VID-20260617-WA0011_qxsmy1.mp4",
      synopsis: "Documenting ongoing pipeline excavation, trenching, and conduit work across hilly rural terrain to bring reliable water directly to remote settlements."
    },
    {
      id: 4,
      title: "Borewell & Water Storage Tank Commissioning",
      category: "Borewell & Storage",
      duration: "0:13",
      themeColor: "blue",
      thumbnail: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140775/VID-20260407-WA0021_zlwb30.jpg",
      videoUrl: "https://res.cloudinary.com/ddptxvwrj/video/upload/v1792140775/VID-20260407-WA0021_zlwb30.mp4",
      synopsis: "Overview of a newly installed borewell water storage structure, paved drainage apron, and village distribution point ensuring long-term drinking water security."
    }
  ];

  // Open overlay helper mechanism
  const triggerPlayer = (url, title) => {
    setActiveVideoUrl(url);
    setActiveVideoTitle(title);
  };

  // Safe reset routine closing out video instances
  const terminatePlayer = () => {
    setActiveVideoUrl(null);
    setActiveVideoTitle("");
  };

  // Handle keyboard escape key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        terminatePlayer();
      }
    };
    if (activeVideoUrl) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeVideoUrl]);

  const getCategorizedStyles = (color) => {
    const palette = {
      emerald: {
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        highlight: "group-hover:text-emerald-600",
        playBg: "bg-emerald-600 text-white"
      },
      sky: {
        badge: "bg-sky-50 text-sky-700 border-sky-200",
        highlight: "group-hover:text-sky-600",
        playBg: "bg-sky-600 text-white"
      },
      teal: {
        badge: "bg-teal-50 text-teal-700 border-teal-200",
        highlight: "group-hover:text-teal-600",
        playBg: "bg-teal-600 text-white"
      },
      blue: {
        badge: "bg-blue-50 text-blue-700 border-blue-200",
        highlight: "group-hover:text-blue-600",
        playBg: "bg-blue-600 text-white"
      }
    };
    return palette[color] || palette.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">

        {/* Module Header Area */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-100/70 border border-sky-200 px-3 py-1 rounded-full">
            Community Water Initiatives
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Video Gallery
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed">
            Watch on-ground video documentation of DAPTA's rural drinking water initiatives, borewell installations, natural stream restorations, and community piped water infrastructure across Kalahandi villages.
          </p>
        </div>

        {/* 2-Column Responsive Screen Card Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videoCollection.map((video) => {
            const layout = getCategorizedStyles(video.themeColor);
            return (
              <div
                key={video.id}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Interactive Trigger Thumbnail Container */}
                  <div
                    onClick={() => triggerPlayer(video.videoUrl, video.title)}
                    className="w-full aspect-video bg-neutral-900 relative overflow-hidden cursor-pointer group/thumb"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-95 group-hover/thumb:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 group-hover/thumb:from-black/80 transition-colors duration-300" />

                    {/* Central Play Button Widget */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerPlayer(video.videoUrl, video.title);
                      }}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl scale-95 group-hover/thumb:scale-110 transition-all duration-300 cursor-pointer ${layout.playBg}`}
                      aria-label={`Play ${video.title}`}
                    >
                      <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>

                    {/* Duration Counter Pill */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] font-mono px-2 py-0.5 rounded font-semibold tracking-wider backdrop-blur-xs">
                      {video.duration}
                    </div>

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border shadow-xs backdrop-blur-md bg-white/95 ${layout.badge}`}>
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Context Meta Text Area */}
                  <div className="p-6">
                    <h3
                      onClick={() => triggerPlayer(video.videoUrl, video.title)}
                      className={`text-lg font-extrabold text-gray-900 cursor-pointer transition-colors tracking-tight leading-snug ${layout.highlight}`}
                    >
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2.5 leading-relaxed">
                      {video.synopsis}
                    </p>
                  </div>
                </div>

                {/* Tracking Action Footer */}
                <div className="mx-6 mb-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => triggerPlayer(video.videoUrl, video.title)}
                    className="flex items-center gap-1.5 font-semibold text-sky-700 hover:text-sky-800 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span>Watch Video</span>
                  </button>
                  <span className="font-mono text-gray-400 uppercase text-[11px] font-semibold">
                    VIDEO-0{video.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Full-Screen Lightbox Portal Modal */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 transition-all duration-300">

            {/* Modal Box Frame Wrapper */}
            <div className="w-full max-w-4xl bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative z-10 flex flex-col">

              {/* Media Control Top Metadata Strip Bar */}
              <div className="px-5 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-white gap-4">
                <span className="text-xs md:text-sm font-semibold truncate tracking-tight text-neutral-300">
                  Streaming: <span className="text-sky-400 font-bold ml-1">{activeVideoTitle}</span>
                </span>

                {/* Immediate Dismissal Button */}
                <button
                  type="button"
                  onClick={terminatePlayer}
                  className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 border border-neutral-700 cursor-pointer shrink-0"
                >
                  <span>Close</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Native Video Playback Element Block */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

            </div>

            {/* Quick click outside escape helper background shield */}
            <div
              className="absolute inset-0 z-0 cursor-pointer"
              onClick={terminatePlayer}
              aria-hidden="true"
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default VideoGallery;