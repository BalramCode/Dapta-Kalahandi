import React from 'react';

const Events = () => {
  // Master database for upcoming and recent institutional events
  const eventList = [
    {
      id: 1,
      title: "Regional Khadi & Craft Exhibition",
      date: "Jun 18, 2026",
      time: "10:00 AM - 05:00 PM",
      location: "Town Hall, Bhawanipatna",
      badge: "Upcoming Exhibition",
      themeColor: "sky",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
      description: "A centralized marketplace showcase featuring traditional artisans, authentic handloom collectives, and blockchain-verified craft stalls from district blocks."
    },
    {
      id: 2,
      title: "Sustainable Agriculture Seminar",
      date: "Jul 02, 2026",
      time: "09:30 AM - 04:00 PM",
      location: "Rangapadar Training Hub",
      badge: "Technical Workshop",
      themeColor: "emerald",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
      description: "Gathering agricultural scientists and local tribal farmers to discuss organic organic soil upgrades, water conservation mapping, and SRI cultivation workflows."
    },
    {
      id: 3,
      title: "Youth Tech & Innovation Summit",
      date: "Jul 15, 2026",
      time: "11:00 AM - 03:30 PM",
      location: "MMU Campus Auditorium",
      badge: "Community Assembly",
      themeColor: "purple",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
      description: "An open forum exploring administrative AI automation tools, rural tech opportunities, and digital literacy frameworks for undergraduate students."
    },
    {
      id: 4,
      title: "Maternal Health Screening Drive",
      date: "Aug 10, 2026",
      time: "08:00 AM - 02:00 PM",
      location: "Lanjigarh Block Clinic",
      badge: "Medical Outreach",
      themeColor: "rose",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
      description: "Deploying healthcare tracking networks, free diagnostic screenings, and structural nutritional support charts for remote village sectors."
    }
  ];

  // Helper mapping system for color cohesion
  const getThemeStyles = (color) => {
    const palette = {
      sky: { badge: "bg-sky-50 text-sky-700 border-sky-100", icon: "text-sky-500" },
      emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-100", icon: "text-emerald-500" },
      purple: { badge: "bg-purple-50 text-purple-700 border-purple-100", icon: "text-purple-500" },
      rose: { badge: "bg-rose-50 text-rose-700 border-rose-100", icon: "text-rose-500" }
    };
    return palette[color] || palette.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Component Header Block */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            On Our Radar
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Upcoming Events & Assemblies
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Stay updated with our upcoming public forums, training camps, workshops, and exhibitions organized throughout the region.
          </p>
        </div>

        {/* Responsive Events Grid Matrix */}
        <div className="grid md:grid-cols-2 gap-8">
          {eventList.map((event) => {
            const layout = getThemeStyles(event.themeColor);
            return (
              <div 
                key={event.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden flex flex-col group"
              >
                {/* Event Visual Cover Banner */}
                <div className="w-full h-48 sm:h-56 bg-gray-100 relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Status Overlay Tag */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border shadow-sm backdrop-blur-md bg-white/90 ${layout.badge}`}>
                      {event.badge}
                    </span>
                  </div>
                </div>

                {/* Content Core Body Area */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Date / Time Scheduling Strip */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                      <div className="flex items-center gap-1.5">
                        <svg className={`w-4 h-4 ${layout.icon}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span className="text-gray-900 font-extrabold">{event.date}</span>
                      </div>
                      <div className="hidden sm:block text-gray-300">•</div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Event Title */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors tracking-tight">
                      {event.title}
                    </h3>

                    {/* Event Detailed Text Description */}
                    <p className="text-gray-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Geolocation Tag Footer Layer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold max-w-[70%] truncate">
                      <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="truncate">{event.location}</span>
                    </div>

                    {/* Action Link Button */}
                    <a 
                      href={`/events/${event.id}`} 
                      className="text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-1 shrink-0 group/btn"
                    >
                      View Details
                      <svg className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Events;