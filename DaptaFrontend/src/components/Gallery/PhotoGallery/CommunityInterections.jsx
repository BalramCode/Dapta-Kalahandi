import React from 'react'

const CommunityInterections = () => {
  const galleryPhotos = [
    {
      id: 1,
      heading: "Field Operational Briefing",
      imgUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      heading: "Village Community Council",
      imgUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      heading: "SRI Agricultural Workshop",
      imgUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      heading: "District Level Assembly",
      imgUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      heading: "Women Self-Help Gathering",
      imgUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      heading: "Resource Distribution Campaign",
      imgUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl my-15 mx-auto px-4">
        
        {/* Module Section Title */}
        <div className="border-b border-gray-200 pb-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Media Library
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">
            Community Interection Photos
          </h1>
        </div>

        {/* Dense Responsive Flex-Grid Matrix (Lg screens map out to exactly 6 columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {galleryPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="bg-white p-2 rounded-xl border border-gray-200/70 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col group"
            >
              {/* Image Frame Box with Uniform Square Aspect Ratio Layout */}
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100 relative">
                <img 
                  src={photo.imgUrl} 
                  alt={photo.heading} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Minimal Text Subheading Segment Below Image */}
              <div className="mt-2 text-center pt-1 px-1 flex-grow flex items-center justify-center">
                <h3 className="text-xs font-bold text-gray-700 tracking-tight line-clamp-2 leading-tight group-hover:text-sky-600 transition-colors">
                  {photo.heading}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CommunityInterections