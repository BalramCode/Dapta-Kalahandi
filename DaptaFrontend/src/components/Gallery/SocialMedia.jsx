import React from 'react';

const SocialMedia = () => {
  // Central routing array hosting target network endpoints, asset colors, and identity descriptors for dapta.org
  const platformLinks = [
    {
      id: 1,
      platform: "LinkedIn",
      handle: "dapta",
      metric: "Enterprise & Network",
      actionLabel: "Connect Ecosystem",
      themeColor: "linkedin",
      url: "https://linkedin.com/company/dapta",
      accentIcon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      summary: "Review operational frameworks, decentralized data infrastructure partnerships, organization announcements, and enterprise compliance pipelines."
    },
    {
      id: 2,
      platform: "X / Twitter",
      handle: "@dapta_org",
      metric: "Network Protocol Logs",
      actionLabel: "Follow Protocol",
      themeColor: "x",
      url: "https://x.com/dapta_org",
      accentIcon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      summary: "Streaming real-time architectural changes, open-source repository pushes, Web3 integration benchmarks, and developer engineering updates."
    },
    {
      id: 3,
      platform: "YouTube",
      handle: "dapta_org",
      metric: "Architecture & Demos",
      actionLabel: "Watch Breakdowns",
      themeColor: "youtube",
      url: "https://youtube.com/@dapta_org",
      accentIcon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      summary: "Deep-dive technical walkthroughs, implementation playbooks, smart contract audits, and core systems design documentation video logs."
    },
    {
      id: 4,
      platform: "Instagram",
      handle: "@dapta_org",
      metric: "Culture & Graphics",
      actionLabel: "View Visuals",
      themeColor: "instagram",
      url: "https://instagram.com/dapta_org",
      accentIcon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      summary: "UI design asset highlights, team coordinate captures, community event updates, and structural design interface frameworks."
    }
  ];

  // Dynamic branding engine mapping visual themes to network profiles
  const getPlatformStyles = (network) => {
    const registry = {
      linkedin: {
        banner: "bg-blue-600 text-white",
        badge: "bg-blue-50 text-blue-700 border-blue-100",
        action: "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
      },
      x: {
        banner: "bg-black text-white",
        badge: "bg-gray-50 text-gray-800 border-gray-200",
        action: "bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-200"
      },
      youtube: {
        banner: "bg-red-600 text-white",
        badge: "bg-red-50 text-red-700 border-red-100",
        action: "bg-red-50 text-red-700 hover:bg-red-100 border-red-200"
      },
      instagram: {
        banner: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white",
        badge: "bg-pink-50 text-pink-700 border-pink-100",
        action: "bg-pink-50 text-pink-700 hover:bg-pink-100 border-pink-200"
      }
    };
    return registry[network] || registry.linkedin;
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl my-15 mx-auto px-4">
        
        {/* Module Header Area */}
        <div className="text-center md:text-left border-b border-gray-200 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
            Network Hub
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2 tracking-tight">
            Organization Footprint & Directories
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Connect directly across open-source layers, decentralized technical journals, and ecosystem communications.
          </p>
        </div>

        {/* 4-Column Social Grid Interface (realigned layout for 4 modules) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformLinks.map((node) => {
            const themes = getPlatformStyles(node.themeColor);
            return (
              <div 
                key={node.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Branding Banner Plate */}
                  <div className={`w-full h-24 relative overflow-hidden flex items-center justify-between px-4 ${themes.banner}`}>
                    
                    {/* Brand Vector Icon Block */}
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-inner">
                      {node.accentIcon}
                    </div>

                    {/* Network Handle Text Frame */}
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-70 block">
                        Network ID
                      </span>
                      <span className="font-mono text-xs font-bold tracking-tight">
                        {node.handle}
                      </span>
                    </div>

                    {/* Faint ambient geometric background mesh */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Core Meta Content Area */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${themes.badge}`}>
                        {node.platform}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 font-mono">
                        {node.metric}
                      </span>
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed">
                      {node.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Outbound Navigation Trigger */}
                <div className="p-5 pt-0">
                  <a 
                    href={node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-2.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 border ${themes.action}`}
                  >
                    <span>{node.actionLabel}</span>
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>

                  <div className="text-center text-[9px] font-semibold tracking-widest uppercase text-gray-300 mt-3">
                    Ecosystem Axis: 0{node.id}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SocialMedia;