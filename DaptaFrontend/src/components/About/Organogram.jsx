import React from 'react';
import organogram from "../../img/ornagram.png";

const Organogram = () => {
  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm p-3.5 sm:p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full overflow-x-auto flex justify-center">
        <img 
          src={organogram} 
          alt="DAPTA Organogram" 
          className="max-w-full h-auto object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default Organogram;