import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-12 mx-auto px-4">

        {/* Module Header */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-2 tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Have queries about our projects, community training programs, or partner channels?
            Reach out through our administrative coordinates or drop an inquiry file below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT CHANNELS: Contact Forms Block (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-5">Contact Form</h2>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800">
                <svg className="w-10 h-10 text-emerald-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-base">Inquiry Dispatched Successfully</h3>
                <p className="text-xs text-emerald-600/90 mt-1">Thank you for your message. Our coordinating desk will evaluate the entry promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Full Name</label>
                    <input
                      type="text" required name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Address</label>
                    <input
                      type="email" required name="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Subject</label>
                  <input
                    type="text" required name="subject" value={formData.subject} onChange={handleChange}
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all"
                    placeholder="Inquiry Topic"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Message / Message Details</label>
                  <textarea
                    rows="4" required name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none transition-all resize-none"
                    placeholder="Describe your inquiry details here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-sky-600 text-white font-bold text-sm tracking-wide shadow-md shadow-sky-600/10 hover:bg-sky-700 transition-all cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* RIGHT PANELS: Office Locations, Comm Metrics & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Connect Core Metrics Links */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-5 space-y-4 shadow-xs">

              {/* Voice Helpline Connection */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Phone Contact</span>
                  <a href="tel:+919437029124" className="text-base font-bold text-gray-800 hover:text-sky-600 transition-colors mt-0.5 inline-block">
                    +91-9437029124
                  </a>
                </div>
              </div>

              {/* Email Infrastructure Registry */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email For Inquiry</span>
                  <a href="mailto:sapta@rediffmail.com" className="text-sm font-bold text-gray-800 hover:text-emerald-600 transition-colors mt-0.5 inline-block">
                    dapta@rediffmail.com
                  </a>
                </div>
              </div>

              {/* Web Domain Ecosystem */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Website Identity Domains</span>
                  <div className="flex flex-col gap-0.5 mt-1 text-sm font-bold text-gray-800">
                    <a href="https://www.dapta.org" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                      www.dapta.org
                    </a>
                    <a href="https://www.dapta.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                      www.dapta.org.in
                    </a>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA CONNECTIONS BLOCK */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">Connect With Us</span>
                <div className="flex items-center gap-3">
                  
                  {/* Facebook */}
                  <a 
                    href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page"
                    className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"
                    className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a 
                    href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel"
                    className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a 
                    href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter X Profile"
                    className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                </div>
              </div>

            </div>

            {/* Structured Addresses Stack */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Office Addresses</h3>

              {/* 1. Registered Office */}
              <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-xs relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide bg-amber-50 px-2 py-0.5 rounded inline-block">
                  Registered Head Office
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2 leading-relaxed">
                  Near Old Cinema Hall, Bhawanipatna, Kalahandi District, Odisha, India — Pin: 766001
                </p>
              </div>

              {/* 2. Co-ordination Office */}
              <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-xs relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-sky-500" />
                <h4 className="text-xs font-bold text-sky-800 uppercase tracking-wide bg-sky-50 px-2 py-0.5 rounded inline-block">
                  Co-ordination Office
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2 leading-relaxed">
                  At-Burat, Po-Bhawanipatna, PS-Bhawanipatna, Dist-Kalahandi, State-Odisha, Pin-766001
                </p>
              </div>

              {/* 3. Training Center */}
              <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-xs relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Training Center Hub
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2 leading-relaxed">
                  At-Rangapadar, Po-Urladani, Dist-Kalahandi, State-Odisha
                </p>
              </div>
            </div>

            {/* INTERACTIVE GOOGLE MAP CONTAINER */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-2 shadow-xs overflow-hidden group">
              <div className="rounded-xl overflow-hidden h-64 w-full relative isolation bg-gray-100">
                <iframe
                  title="DAPTA Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3741.5204480112444!2d83.17131109999999!3d19.9083056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU0JzI5LjkiTiA4M8KwMTAnMjQuNiJF!5e0!3m2!1sen!2sin!4v1717975200000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-2 pt-3 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span>📍 Live Navigation Node</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=19.9083056,83.1713111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline font-bold"
                >
                  Open Map view
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;