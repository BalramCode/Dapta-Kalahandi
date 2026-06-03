import React, { useState } from 'react';

const VideoGallery = () => {
  // Local state tracking the currently active playing video asset source
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState("");

  // Master database hosting high-quality, lightweight open-source test stream video assets
  const videoCollection = [
    {
      id: 1,
      title: "MAA: The Unsolved Mystery - Official Trailer",
      category: "Cinematic Production",
      duration: "2:45",
      themeColor: "rose",
      thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
      // Production high-efficiency H.264 / MP4 stream link
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      synopsis: "A gritty narrative showcase profiling regional legends, cinematic drone passes over Kalahandi landscapes, and structural background sound scoring."
    },
    {
      id: 2,
      title: "Roop: Documenting Rural Artisan Collectives",
      category: "Studio Documentary",
      duration: "5:20",
      themeColor: "sky",
      thumbnail: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      synopsis: "An intimate, stylized look behind the scenes tracking traditional handloom infrastructure, sustainable dye preparation workshops, and localized design workflows."
    },
    {
      id: 3,
      title: "Ground Impact: Sustainable Water Harvesting Structures",
      category: "Field Case Study",
      duration: "3:15",
      themeColor: "emerald",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      synopsis: "High-definition documentation mapping the construction timeline of earthen catchment dams, contour lines, and seasonal groundwater recharges."
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

  const getCategorizedStyles = (color) => {
    const palette = {
      rose: { badge: "bg-rose-50 text-rose-700 border-rose-100", highlight: "group-hover:text-rose-600", playBg: "bg-rose-600/90 text-white" },
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", highlight: "group-hover:text-sky-600", playBg: "bg-sky-600/90 text-white" },
      emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-100", highlight: "group-hover:text-emerald-600", playBg: "bg-emerald-600/90 text-white" }
    };
    return palette[color] || palette.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header Area */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Media Screening
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Cinematic Video Gallery
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Stream our latest documentary reels, project field reports, and narrative cinematic short trailers detailing grassroots regional initiatives.
          </p>
        </div>

        {/* 3-Column Screen Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCollection.map((video) => {
            const layout = getCategorizedStyles(video.themeColor);
            return (
              <div 
                key={video.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Interactive Trigger Thumbnail Container */}
                  <div className="w-full h-48 bg-black relative overflow-hidden group/thumb">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover opacity-90 group-hover/thumb:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Pure CSS Dynamic Radial Black Gradient Backing overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                    {/* Central Play Button Widget */}
                    <button
                      type="button"
                      onClick={() => triggerPlayer(video.videoUrl, video.title)}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl scale-95 group-hover/thumb:scale-105 transition-all duration-200 ${layout.playBg}`}
                      aria-label="Play Screening Asset"
                    >
                      <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>

                    {/* Duration Counter Pill */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-mono px-1.5 py-0.5 rounded font-bold tracking-wider">
                      {video.duration}
                    </div>

                    {/* Top Type Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-md bg-white/90 ${layout.badge}`}>
                        {video.category}
                      </span>
                    </div>
                  </div>

                  {/* Context Meta Text Area */}
                  <div className="p-6">
                    <h3 className={`text-base sm:text-md font-extrabold text-gray-900 transition-colors tracking-tight leading-snug ${layout.highlight}`}>
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {video.synopsis}
                    </p>
                  </div>
                </div>

                {/* Tracking Node Footer line */}
                <div className="mx-6 mb-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>HTML5 Streaming Pipeline</span>
                  <span className="font-mono">REEL-0{video.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Full-Screen Lightbox Portal Modal backdrop */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex flex-col items-center justify-center p-4 transition-all duration-300">
            
            {/* Modal Box Frame Wrapper */}
            <div className="w-full max-w-4xl bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl relative">
              
              {/* Media Control Top Metadata Strip Bar */}
              <div className="p-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-white gap-4">
                <span className="text-xs md:text-sm font-bold truncate tracking-tight text-neutral-200">
                  Streaming Now: <span className="text-sky-400 font-extrabold">{activeVideoTitle}</span>
                </span>
                
                {/* Immediate Dismissal Button */}
                <button
                  type="button"
                  onClick={terminatePlayer}
                  className="bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white px-2.5 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 border border-neutral-700"
                >
                  <span>Close</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Native Video Playback Element Block */}
              <div className="relative aspect-video bg-black">
                <video
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

            </div>

            {/* Quick click outside escape helper background shield */}
            <div 
              className="absolute inset-0 -z-10 cursor-pointer" 
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