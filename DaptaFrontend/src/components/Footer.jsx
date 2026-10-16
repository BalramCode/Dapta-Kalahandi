import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Dapta Kalahandi is a Non-Governmental, Non-political, Non-profit making Voluntary Organisation, has been working in Kalahandi District since 1992. The main aim of the Organisation is to establish a just, sustainable and participatory society by utilizing local available resources and people's...
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-3 text-[14px] text-gray-300">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Activities', path: '/activities' },
              { name: 'Reports & Reflections', path: '/reports' },
              { name: 'Get Involved', path: '/get-involved' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact Us', path: '/contact' },
              { name: 'Donate Us', path: '/get-involved/donation-info' },
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Terms & Conditions', path: '/terms-and-conditions' }
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-[#FF6A00] transition-colors duration-200 block">
                  {link.name}
                </Link>
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
                Near Love Dale School,<br />
                Mandar Bagicha Para,<br />
                Bhawanipatna, PIN - 766001,<br />
                Dist – Kalahandi,<br />
                State - Odisha, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#FF6A00] shrink-0" fill="#FF6A00" />
              <a href="tel:+919437029124" className="hover:underline">+91 9437029124</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#FF6A00] shrink-0" />
              <a href="mailto:dapta@rediffmail.com" className="hover:underline">dapta@rediffmail.com</a>
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
              <iframe
                title="DAPTA Office Location Map"
                src="https://maps.google.com/maps?q=W55F%2B79G,+near+Love+Dale+School,+Mandar+Bagicha+Para,+Bhawanipatna,+Odisha+766001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://www.google.com/maps/search/?api=1&query=W55F%2B79G%2C+near+Love+Dale+School%2C+Mandar+Bagicha+Para%2C+Bhawanipatna%2C+Odisha+766001"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-2 bg-white/95 text-blue-600 text-[11px] font-semibold px-2 py-1 rounded shadow-md flex items-center gap-1 cursor-pointer hover:bg-white hover:text-blue-700 transition-colors z-10"
              >
                <span>Open in Maps</span>
                <span className="text-[9px]">↗</span>
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2.5 max-w-[280px] leading-relaxed">
            <span className="text-gray-300 font-medium">Plus Code:</span> W55F+79G, near Love Dale School, Mandar Bagicha Para, Bhawanipatna, Odisha 766001
          </p>
        </div>

      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700/60 my-4 max-w-7xl mx-auto" />

      {/* Bottom Sub-Footer Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-400">

        {/* Left: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1">
            <span className="text-lg leading-none">⚙</span>
            <span>
              © Copyright 2024, All Rights Reserved <span className="text-white font-medium">Dapta</span>
            </span>
          </div>
          <span className="hidden sm:inline text-gray-600">|</span>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white hover:underline transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-white hover:underline transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Right: Social Handles & Visitor Counter */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Social Icons Layout */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/development-agency-for-poor-and-tribal-awakening-dapta/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="DAPTA on LinkedIn"
              className="w-8 h-8 bg-[#0077B5] flex items-center justify-center text-white rounded-lg hover:opacity-90 hover:scale-105 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/dapta.kalahandi.75/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="DAPTA on Facebook"
              className="w-8 h-8 bg-[#1877F2] flex items-center justify-center text-white rounded-lg hover:opacity-90 hover:scale-105 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/daptakalahandi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="DAPTA on Instagram"
              className="w-8 h-8 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white rounded-lg hover:opacity-90 hover:scale-105 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
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