// src/components/About/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full space-y-10">
      
      {/* Twin Overlapping Images Presentation Layout Structure */}
      <div className="relative w-full grid grid-cols-2 gap-4 items-center">
        
        {/* Left Side Group Photo Block */}
        <div className="rounded-sm overflow-hidden shadow-sm border border-gray-100 aspect-[4/3]">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
            alt="Community Members" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Conference/Meeting Block */}
        <div className="rounded-sm overflow-hidden shadow-sm border border-gray-100 aspect-[4/3]">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
            alt="DAPTA Strategy Meeting" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Central Circular Overlapping Identity Seal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-1.5 shadow-md border border-gray-100 flex items-center justify-center">
            <div className="w-full h-full bg-sky-50 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Logo Seal" 
                className="w-11 h-11 object-contain"
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </div>
          </div>
        </div>

      </div>

      {/* Main Core Text Content Assembly */}
      <div className="space-y-4 max-w-none">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          Introduction
        </h2>
        
        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify font-normal">
          Dapta At A Glance Dapta, founded in 1992 in Odisha, is a grassroots voluntary organization committed to creating a just, participatory, and sustainable society rooted in Gandhian philosophy. With its origins in Urladani Panchayat of Kalahandi district, the organization began by engaging directly with rural and tribal communities to understand their challenges and aspirations, fostering a foundation of trust and collaboration that continues to define its work. Over the years, Dapta has grown to address critical issues affecting marginalized populations, emphasizing sustainable development, self-reliance, and dignity.
        </p>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify font-normal">
          The organization works on holistic development, as it believes that sustainable development comes from addressing the interconnected challenges faced by communities in a comprehensive and inclusive way and creates a foundation for long-term, transformative impact. It enables individuals and communities to grow with dignity and resilience, tackling the root causes of deprivation while fostering overall well-being and self-reliance. 
        </p>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify font-normal">
          Dapta's child-centric initiatives encompass nutrition, education, and overall well-being, ensuring that vulnerable children grow up in healthy, nurturing environments. Programs addressing malnutrition, promoting child health, and creating safe spaces for learning and development. Dapta emphasizes the importance of securing land rights, especially for women, recognizing the transformative power of ownership in enabling them to lead empowered and dignified lives. The organization also champions sustainable agricultural practices, with a focus on horticulture, millet cultivation, integrated farming, and the inclusion of livestock and fishery to enhance food security and diversify livelihoods.
        </p>
      </div>

    </div>
  );
};

export default AboutUs;