import React, { useState, useEffect } from 'react';

const AwardAndCertifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert) => {
    setSelectedImage(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const certificates = [
    {
      id: 1,
      image: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783926575/Screenshot_2026-07-13_123633_j61joh.png",
      title: "District Skill Committee Certificate of Appreciation",
      description: "Recognized by the District Administration of Kalahandi for outstanding contributions toward strengthening the local skill development ecosystem and rural youth employment.",
      theme: "sky"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783926575/Screenshot_2026-07-13_123647_f7e5vk.png",
      title: "4th Pillar Change Maker Award",
      description: "Conferred by the Talcher Working Journalists' Association, honoring our impactful grassroots leadership and long-term development work within tribal communities in Odisha.",
      theme: "amber"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783926575/Screenshot_2026-07-13_123542_zal9cr.png",
      title: "Participation in International Symposium on Shree Anna & Forgotten Foods (2024)",
      description: "Awarded by the Government of Odisha for establishing millet food stalls in Kalahandi, highlighting our work in promoting climate-resilient agriculture and traditional tribal dietary diversity.",
      theme: "emerald"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783926575/Screenshot_2026-07-13_123615_o7wgx8.png",
      title: "Letter of Appreciation – Kalahandi Divyang Manch & Sightsavers India",
      description: "Honored for outstanding collaboration in delivering healthcare, education, social security, and sustainable livelihood programs for persons with disabilities across Kalahandi.",
      theme: "purple"
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783926577/Screenshot_2026-07-13_123703_iyl7qh.png",
      title: "Madhyam Foundation Livelihood Security Milestone Certificate",
      description: "Awarded for a decade-long project with AWO International, Germany, which successfully enhanced the household incomes of tribal women farmers through organic vegetable cultivation.",
      theme: "sky"
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/ddptxvwrj/image/upload/v1783926578/Screenshot_2026-07-13_123718_sqayaw.png",
      title: "Credibility Alliance Accreditation on Minimum Norms",
      description: "Certified by the Credibility Alliance for adhering to strict national standards of governance, transparency, and public accountability for voluntary organizations.",
      theme: "amber"
    },
  ];

  const getThemeClasses = (theme) => {
    const themes = {
      sky: { bg: "bg-sky-50", text: "text-sky-600", border: "hover:border-sky-300", accent: "bg-sky-100 text-sky-700" },
      amber: { bg: "bg-amber-50", text: "text-amber-600", border: "hover:border-amber-300", accent: "bg-amber-100 text-amber-700" },
      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "hover:border-emerald-300", accent: "bg-emerald-100 text-emerald-700" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "hover:border-purple-300", accent: "bg-purple-100 text-purple-700" }
    };
    return themes[theme] || themes.sky;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl my-15 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full inline-block mb-4">
            Official Recognitions
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Awards & Certificates
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            A testament to our unwavering commitment to transparency, governance, and operational excellence. Explore our official certifications and statutory accreditations below.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {certificates.map((cert) => {
            const theme = getThemeClasses(cert.theme);
            return (
              <div
                key={cert.id}
                onClick={() => openModal(cert)}
                className={`group bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl ${theme.border} transition-all duration-300 cursor-pointer overflow-hidden flex flex-col`}
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        View Details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${theme.bg}`}>
                    <svg className={`w-6 h-6 ${theme.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  {/* <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {cert.description}
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeModal}
        />

        {/* Modal Content */}
        <div
          className={`relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300 transform ${isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
            }`}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2.5 bg-white/80 hover:bg-gray-100 backdrop-blur-md text-gray-600 hover:text-gray-900 rounded-full transition-all shadow-sm group"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {selectedImage && (
            <>
              {/* Image Section */}
              <div className="w-full md:w-3/5 lg:w-2/3 bg-gray-100 p-6 sm:p-10 flex items-center justify-center min-h-[40vh] md:min-h-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain rounded-md shadow-sm"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5 lg:w-1/3 p-8 sm:p-10 flex flex-col justify-center bg-white border-l border-gray-100 overflow-y-auto">
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center flex-shrink-0 ${getThemeClasses(selectedImage.theme).bg}`}>
                  <svg className={`w-7 h-7 ${getThemeClasses(selectedImage.theme).text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                  {selectedImage.title}
                </h3>

                <div className="h-1 w-12 bg-sky-500 rounded-full mb-6"></div>

                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {selectedImage.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Verified Document Record
                  </p>
                  {/* <p className="text-sm text-gray-500 mt-1 font-mono">
                    ID: CERT-{new Date().getFullYear()}-{selectedImage.id.toString().padStart(4, '0')}
                  </p> */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AwardAndCertifications;