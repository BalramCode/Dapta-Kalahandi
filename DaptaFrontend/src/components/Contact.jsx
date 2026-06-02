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
    // Local processing mock logic
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
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Have queries about our projects, community training programs, or partner channels? 
            Reach out through our administrative coordinates or drop an inquiry file below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CHANNELS: Contact Forms Block (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-sm">
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

          {/* RIGHT PANELS: Office Locations & Comm Metrics (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Connect Core Metrics Links */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-5 space-y-4 shadow-sm">
              
              {/* Voice Helpline Connection */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Phone Contact</span>
                  <a href="tel:+919437070326" className="text-base font-bold text-gray-800 hover:text-sky-600 transition-colors mt-0.5 inline-block">
                    +91-9437070326
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
                  <a href="mailto:dapta@gmail.com" className="text-sm font-bold text-gray-800 hover:text-emerald-600 transition-colors mt-0.5 inline-block">
                    dapta@gmail.com
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

            </div>

            {/* Structured Addresses Stack */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Office Addresses</h3>
              
              {/* 1. Registered Office */}
              <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide bg-amber-50 px-2 py-0.5 rounded inline-block">
                  Registered Office
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2 leading-relaxed">
                  At-Bhawanipatna, Po-Bhawanipatna, Via-Bhawanipatna, Dist-Kalahandi, State-Odisha, Pin-766001
                </p>
              </div>

              {/* 2. Co-ordination Office */}
              <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-sky-500" />
                <h4 className="text-xs font-bold text-sky-800 uppercase tracking-wide bg-sky-50 px-2 py-0.5 rounded inline-block">
                  Co-ordination Office
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2 leading-relaxed">
                  At-Burat, Po-Bhawanipatna, PS-Bhawanipatna, Dist-Kalahandi, State-Odisha, Pin-766001
                </p>
              </div>

              {/* 3. Training Center */}
              <div className="bg-white rounded-xl border border-gray-200/60 p-4 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Training Center Hub
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-2 leading-relaxed">
                  At-Rangapadar, Po-Urladani, Dist-Kalahandi, State-Odisha
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;