import React from 'react';

const MissionVisionObjective = () => {
  const cards = [
    {
      id: 'mission',
      title: 'Mission',
      text: 'Eradication of poverty through a People Centered action strongly...',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-[#2D3748]">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      ),
      isFeatured: false,
    },
    {
      id: 'vision',
      title: 'Vision',
      text: 'Establishing a just, participatory and sustainable society, where...',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-[#2D3748]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      isFeatured: true, // This adds the orange underline visible on the center card
    },
    {
      id: 'objective',
      title: 'Objective',
      text: 'Enabling the last person of the society to live with dignity. Improving the....',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-[#2D3748]">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17h6" />
          <path d="M9 12h6" />
          <path d="M9 7h6" />
        </svg>
      ),
      isFeatured: false,
    },
  ];

  return (
    <div className="relative w-full bg-[#EBF1F5] py-16 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Background Decorative Floral/Leaf Element on the left */}
      <div className="absolute left-4 bottom-20 w-24 h-40 opacity-40 pointer-events-none hidden md:block">
        <div className="w-full h-full relative">
          {/* Abstract leaf shape representations mirroring image_2eddda.jpg */}
          <div className="absolute bottom-0 left-2 w-6 h-20 bg-[#6C8E9B] rounded-full rotate-[-25deg] origin-bottom"></div>
          <div className="absolute bottom-0 left-6 w-7 h-24 bg-[#4A6D7C] rounded-full rotate-[-10deg] origin-bottom"></div>
          <div className="absolute bottom-2 left-10 w-6 h-20 bg-[#5A7D8C] rounded-full rotate-[15deg] origin-bottom"></div>
          <div className="absolute bottom-6 left-0 w-2 h-12 bg-[#D4AF37] rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Grid Container for the 3 Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-stretch">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`bg-white px-6 py-10 flex flex-col items-center text-center shadow-md transition-transform duration-300 hover:-translate-y-1 relative ${
              card.isFeatured ? 'border-b-4 border-[#F4A261]' : ''
            }`}
          >
            {/* Vector Line Icon Wrapper */}
            <div className="mb-4 p-2 flex items-center justify-center">
              {card.icon}
            </div>

            {/* Card Title */}
            <h3 className="text-xl font-semibold text-[#2D3748] mb-3 tracking-wide">
              {card.title}
            </h3>

            {/* Card Description */}
            <p className="text-[#718096] text-sm leading-relaxed max-w-[250px] mb-6 min-h-[48px]">
              {card.text}
            </p>

            {/* Read More Action Link */}
            <a
              href={`#${card.id}`}
              className="text-[#E76F51] text-sm font-medium hover:text-[#d95d3f] transition-colors duration-200 uppercase tracking-wider mt-auto"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionObjective;