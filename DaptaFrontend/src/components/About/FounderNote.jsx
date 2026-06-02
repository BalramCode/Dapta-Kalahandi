// src/components/About/FounderNote.jsx
import React from 'react';

const FounderNote = () => {
  return (
    <div className="w-full space-y-6">
      {/* Section Heading */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
          Founder's Voice
        </h2>
      </div>

      {/* Main Content Area - Text wraps around the right-aligned circular portrait */}
      <div className="block flow-root text-gray-600 text-sm md:text-base leading-relaxed text-justify font-normal">
        
        {/* Right Aligned Circular Image Portrait matching image_b275c7.png */}
        <div className="float-right ml-6 mb-4 md:mb-6 shape-outside-circle">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-amber-200 to-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
              alt="Satyanarayan Pattanayak" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Generates an elegant placeholder frame if the graphic asset link is broken
                e.target.src = "https://via.placeholder.com/300/e0f2fe/0369a1?text=Founder";
              }}
            />
          </div>
        </div>

        {/* Letter Body Segment */}
        <p className="mb-4 font-medium text-gray-800">
          Dear friends and co-travellers,
        </p>
        
        <p className="mb-4">
          Welcome to the Dapta family.
        </p>
        
        <p className="mb-4">
          Since our humble beginnings in 1992, Dapta has been driven by the belief that every individual deserves to live a life of dignity, self-respect, and equal opportunity. Rooted in the principles of Gandhian philosophy, our journey began in the heart of Urladani Panchayat, where we closely listened to the voices of rural and tribal communities and pledged to stand beside them in their journey for a just, participatory, and sustainable society. Over the years, Dapta has evolved, shaped by the hopes and aspirations of the people we serve.
        </p>
        
        <p className="mb-4">
          Our mission has always been holistic development—addressing not just the challenges but the interconnections between them. From securing land rights and promoting sustainable agriculture to enhancing children's well-being, improving health and education, fostering climate resilience, and empowering women and youth, we believe in tackling the root causes of deprivation through an integrated approach.
        </p>
        
        <p className="mb-4">
          Through the dedication of our team, the strength of our partnerships, and the support of communities, Dapta has grown to touch lives across multiple districts in Odisha. Every initiative we undertake is driven by the vision of building a society that thrives on inclusion, participation, and sustainability.
        </p>
        
        <p className="mb-4">
          With deep gratitude, we sincerely thank everyone who has supported Dapta's journey. Your belief in our mission has inspired and strengthened us in building a just, participatory, and sustainable society. Let us continue this shared path, ensuring dignity, self-reliance, and resilience reach every life we touch. Looking ahead, I warmly invite you to join us in this transformative journey. Your involvement and support will help us create lasting change and build a just, inclusive, and sustainable society for future generations.
        </p>

        {/* Sign-off Valediction Block */}
        <div className="mt-8 pt-4 border-t border-gray-50 text-left">
          <p className="text-gray-500 italic text-sm">Thanking you</p>
          <h4 className="text-gray-800 font-semibold text-base mt-2">Satyanarayan Pattanayak</h4>
          <p className="text-xs text-sky-700 font-medium tracking-wide mt-0.5">Secretary</p>
        </div>

      </div>
    </div>
  );
};

export default FounderNote;