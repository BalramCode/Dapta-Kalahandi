import React from 'react';

const SocialMedia = () => {
  // Central routing array hosting target network endpoints, asset colors, and identity descriptors
  const platformLinks = [
    {
      id: 1,
      platform: "LinkedIn",
      handle: "Balaram Naik",
      metric: "500+ Connections",
      actionLabel: "Connect Professional",
      themeColor: "linkedin",
      url: "https://linkedin.com",
      accentIcon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      summary: "Review full academic pipelines at Maa Manikeshwari University, enterprise tech positions, and interactive systems documentation."
    },
    {
      id: 2,
      platform: "GitHub",
      handle: "balaram-naik",
      metric: "Repositories & Pulls",
      actionLabel: "Audit Repositories",
      themeColor: "github",
      url: "https://github.com",
      accentIcon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      summary: "Inspect live active production structures, MERN app configuration logs, Solidity contracts, and system engine scripts."
    },
    {
      id: 3,
      platform: "X / Twitter",
      handle: "@balaram_naik",
      metric: "Tech Architecture Logs",
      actionLabel: "Follow Narrative",
      themeColor: "x",
      url: "https://x.com",
      accentIcon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      summary: "Streaming periodic engineering logs, Web3 testing updates, and UI/UX design workflow frameworks."
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
      github: {
        banner: "bg-neutral-900 text-white",
        badge: "bg-neutral-50 text-neutral-800 border-neutral-200",
        action: "bg-neutral-900 text-white hover:bg-neutral-800 border-transparent"
      },
      x: {
        banner: "bg-black text-white",
        badge: "bg-gray-50 text-gray-800 border-gray-200",
        action: "bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-200"
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
            Social Footprint & Directories
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Connect directly across open-source hubs, technical journals, and professional coordination pipelines.
          </p>
        </div>

        {/* 3-Column Social Grid Interface */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformLinks.map((node) => {
            const themes = getPlatformStyles(node.themeColor);
            return (
              <div 
                key={node.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Branding Banner Plate */}
                  <div className={`w-full h-24 relative overflow-hidden flex items-center justify-between px-6 ${themes.banner}`}>
                    
                    {/* Brand Vector Icon Block */}
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-inner">
                      {node.accentIcon}
                    </div>

                    {/* Network Handle Text Frame */}
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-70 block">
                        Platform Profile
                      </span>
                      <span className="font-mono text-sm font-bold tracking-tight">
                        {node.handle}
                      </span>
                    </div>

                    {/* Faint ambient geometric background mesh */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Core Meta Content Area */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${themes.badge}`}>
                        {node.platform}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400 font-mono">
                        {node.metric}
                      </span>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {node.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Outbound Navigation Trigger */}
                <div className="p-6 pt-0">
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

                  <div className="text-center text-[10px] font-semibold tracking-widest uppercase text-gray-300 mt-3">
                    Identity Pointer Axis: 0{node.id}
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