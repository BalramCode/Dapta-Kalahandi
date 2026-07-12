import React from 'react';

const Lightbox = ({ photo, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
    <div className="relative max-w-full max-h-full" onClick={e => e.stopPropagation()}>
      <button
        className="absolute top-2 right-2 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img
        src={photo.imgUrl.replace('w=400', 'w=1200')}
        alt={photo.heading}
        className="max-w-screen-lg max-h-screen object-contain"
      />
      <div className="mt-2 text-center text-white text-sm">{photo.heading}</div>
    </div>
  </div>
);

export default Lightbox;
