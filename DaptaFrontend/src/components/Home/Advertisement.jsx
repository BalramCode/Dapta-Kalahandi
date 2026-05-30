import React from 'react';
import { Smile, Heart, CloudFog, User, Droplet } from 'lucide-react';

const Advertisement = () => {
  const categories = [
    {
      id: 1,
      title: "Child Rights & Education",
      icon: <Smile className="w-12 h-12 text-[#FF6A00]" strokeWidth={1.8} />,
      isActive: true, // The first item has a distinct blue background
    },
    {
      id: 2,
      title: "Livelihood",
      icon: <Heart className="w-12 h-12 text-[#FF6A00]" strokeWidth={1.8} />,
      isActive: false,
    },
    {
      id: 3,
      title: "Climate Change",
      icon: <CloudFog className="w-12 h-12 text-[#FF6A00]" strokeWidth={1.8} />,
      isActive: false,
    },
    {
      id: 4,
      title: "Women Empowerment",
      icon: <User className="w-12 h-12 text-[#FF6A00]" strokeWidth={1.8} />, // Represents the female figure
      isActive: false,
    },
    {
      id: 5,
      title: "Health Sanitation",
      icon: <Droplet className="w-12 h-12 text-[#FF6A00]" fill="#FF6A00" strokeWidth={1.8} />,
      isActive: false,
    },
  ];

  return (
    <div className="relative w-full min-h-[400px] bg-[#FAF9F5] flex items-center justify-center overflow-hidden font-sans border-b-4 border-[#1E293B]">
      {/* Subtle Dotted Map Background Effect */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none bg-repeat"
        style={{
          backgroundImage: `radial-gradient(#000 10%, transparent 10%)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 grid grid-cols-5 gap-4 text-center items-start">
        {categories.map((item) => (
          <div key={item.id} className="flex flex-col items-center group cursor-pointer">
            
            {/* Icon Circle */}
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 mb-6
                ${item.isActive 
                  ? 'bg-[#CCE0EB]' 
                  : 'bg-[#F5EFE6] hover:bg-[#EFE7D9]'
                }`}
            >
              {item.icon}
            </div>

            {/* Label Text */}
            <p className="text-[#1E293B] font-semibold text-[15px] leading-snug max-w-[160px]">
              {item.title}
            </p>

          </div>
        ))}
      </div>

      {/* Bottom Corner Orange Indicator Accent */}
      <div className="absolute bottom-6 right-0 w-4 h-8 bg-[#FF6A00] rounded-l-full" />
    </div>
  );
};

export default Advertisement;