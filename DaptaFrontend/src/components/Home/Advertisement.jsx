import React from 'react';
import { Smile, Heart, CloudFog, User, Droplet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Advertisement = () => {
  const pillars = [
    {
      id: 1,
      title: "Child Rights & Education",
      description: "Ensuring every child has access to quality education, safety, and the opportunity to build a brighter future.",
      icon: Smile,
      colorClass: "text-sky-500",
      bgClass: "bg-sky-50",
      borderClass: "group-hover:border-sky-200",
      shadowClass: "group-hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)]",
      link: "/activities/all/education"
    },
    {
      id: 2,
      title: "Livelihood & Economy",
      description: "Building sustainable economic opportunities, skill development, and financial independence for rural communities.",
      icon: Heart,
      colorClass: "text-rose-500",
      bgClass: "bg-rose-50",
      borderClass: "group-hover:border-rose-200",
      shadowClass: "group-hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)]",
      link: "/activities/all/sustainable-livelihoods"
    },
    {
      id: 3,
      title: "Climate Resilience",
      description: "Promoting environmental sustainability, climate adaptation strategies, and natural resource management.",
      icon: CloudFog,
      colorClass: "text-emerald-500",
      bgClass: "bg-emerald-50",
      borderClass: "group-hover:border-emerald-200",
      shadowClass: "group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)]",
      link: "/activities/all/environmental-climate"
    },
    {
      id: 4,
      title: "Women Empowerment",
      description: "Fostering gender equality, leadership, and empowering women to take ownership of resources and governance.",
      icon: User,
      colorClass: "text-purple-500",
      bgClass: "bg-purple-50",
      borderClass: "group-hover:border-purple-200",
      shadowClass: "group-hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]",
      link: "/activities/all/womens-governance"
    },
    {
      id: 5,
      title: "Health & Sanitation",
      description: "Improving rural health outcomes, preventative care, and ensuring access to clean water and sanitation.",
      icon: Droplet,
      colorClass: "text-amber-500",
      bgClass: "bg-amber-50",
      borderClass: "group-hover:border-amber-200",
      shadowClass: "group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)]",
      link: "/activities/all/health"
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F5] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-sky-600 block mb-3">
            Our Pillars of Change
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Driving Sustainable Impact
          </h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We focus on core developmental areas to uplift marginalized communities and create a balanced, equitable society.
          </p>
        </div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            // Center the 5th item if on large screens (3 columns)
            const isLastOdd = index === 4 && pillars.length % 2 !== 0;

            return (
              <Link 
                to={pillar.link}
                key={pillar.id}
                className={`block group relative bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer ${pillar.borderClass} ${pillar.shadowClass} ${isLastOdd ? 'lg:col-start-2' : ''}`}
              >
                {/* Subtle Background Glow on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl ${pillar.bgClass} -z-10`} />

                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${pillar.bgClass}`}>
                  <Icon className={`w-8 h-8 ${pillar.colorClass}`} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {pillar.description}
                </p>

                {/* Interactive Action Link Indicator */}
                <span 
                  className={`inline-flex items-center text-sm font-bold uppercase tracking-wider transition-all duration-300 ${pillar.colorClass} opacity-80 group-hover:opacity-100 group-hover:translate-x-1`}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Advertisement;