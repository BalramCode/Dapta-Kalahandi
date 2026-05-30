import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  // Visitor counter digits
  const visitorCount = ["0", "4", "0", "7", "2"];

  return (
    <footer 
      className="relative text-white bg-cover bg-center font-sans pt-16 pb-6 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgba(18, 24, 12, 0.85), rgba(18, 24, 12, 0.9)), url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200')` 
      }}
    >
      {/* Upper Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-bold mb-6 tracking-wide relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#FF6A00] after:mt-2">
            About
          </h3>
          <p className="text-gray-300 text-[14px] leading-relaxed text-justify pr-4">
            DaptaKalhandi is a Non-Governmental, Non-political, Non-profit making Voluntary Organisation, has been working in Kalahandi District since 1992. The main aim of the Organisation is to establish a just, sustainable and participatory society by utilizing local available resources and people's...
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-3 text-[14px] text-gray-300">
            {['Home', 'About Us', 'Activities', 'Reports & Reflections', 'Get Involved', 'Gallery', 'Contact Us', 'Donate Us'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#FF6A00] transition-colors duration-200 block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6 tracking-wide">Contact</h3>
          <ul className="space-y-4 text-[14px] text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" fill="#FF6A00" fillOpacity={0.2} />
              <span>
                Address - At - Bhawanipatna,<br />
                Po/Via- Bhawanipatna,<br />
                PIN-766102,<br />
                Dist – Kalahandi,<br />
                State- Odisha,<br />
                Country-India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FF6A00] shrink-0" fill="#FF6A00" />
              <a href="tel:+919437070326" className="hover:underline">+91-8260647549</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FF6A00] shrink-0" />
              <a href="mailto:sebajagat@gmail.com" className="hover:underline">dapta@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
              <span className="break-all">
                <a href="https://www.dapta.org" target="_blank" rel="noreferrer" className="hover:underline">www.dapta.org</a> / <br />
                <a href="https://www.dapta.org.in" target="_blank" rel="noreferrer" className="hover:underline">www.dapta.org.in</a>
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Location Map Container */}
        <div>
          <h3 className="text-lg font-bold mb-6 tracking-wide">Location</h3>
          <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-lg max-w-[280px]">
            <div className="relative h-44 bg-[#E5E3DF] overflow-hidden">
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Madanpur+Rampur,Kalahandi,Odisha&zoom=13&size=300x200&sensor=false&key=" 
                alt="Madanpur Rampur Map" 
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/280x180/e5e3df/999999?text=Madanpur+Rampur+Map";
                }}
              />
              <div className="absolute top-2 left-2 bg-white text-blue-600 text-[11px] font-semibold px-2 py-1 rounded shadow flex items-center gap-1 cursor-pointer">
                <span>Open in Maps</span>
                <span className="text-[9px]">↗</span>
              </div>
              <div className="absolute bottom-1 right-1 bg-white/90 text-[9px] text-gray-600 px-1 rounded scale-90">
                Google
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700/60 my-4 max-w-7xl mx-auto" />

      {/* Bottom Sub-Footer Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-400">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-1 text-center md:text-left">
          <span className="text-lg leading-none">⚙</span>
          <span>
            © Copyright 2024, All Rights Reserved <span className="text-white font-medium">Dapta</span>
          </span>
        </div>

        {/* Right: Social Handles & Visitor Counter */}
        <div className="flex flex-wrap items-center gap-4">
          
          {/* Social Icons Layout using Font Awesome classes */}
          <div className="flex items-center gap-1.5">
            <a href="#" className="w-7 h-7 bg-[#00ACEE] flex items-center justify-center text-white rounded hover:opacity-90 transition-opacity">
              <i className="fa fa-twitter text-[14px]"></i>
            </a>
            <a href="#" className="w-7 h-7 bg-[#3B5998] flex items-center justify-center text-white rounded hover:opacity-90 transition-opacity">
              <i className="fa fa-facebook text-[14px]"></i>
            </a>
            <a href="#" className="w-7 h-7 bg-[#FF4500] flex items-center justify-center text-white rounded hover:opacity-90 transition-opacity">
              <i className="fa fa-youtube-play text-[14px]"></i>
            </a>
            <a href="#" className="w-7 h-7 bg-[#3F729B] flex items-center justify-center text-white rounded hover:opacity-90 transition-opacity">
              <i className="fa fa-instagram text-[14px]"></i>
            </a>
          </div>

          {/* Visitor Grid Box Elements */}
          <div className="flex items-center gap-1.5 ml-2">
            <span className="text-gray-300">Visitors:</span>
            <div className="flex gap-0.5">
              {visitorCount.map((digit, index) => (
                <span 
                  key={index} 
                  className="bg-[#00334E] text-[#00FFE0] font-mono font-bold px-1.5 py-0.5 rounded-sm text-[14px] tracking-wide border border-[#005577]"
                >
                  {digit}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;