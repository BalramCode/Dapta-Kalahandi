import React, { useState } from 'react';

function CovidRelief() {
    const [activeTab, setActiveTab] = useState('overview');

    // Core metrics for the top dashboard banner
    const metrics = [
        { value: "3,500+", label: "Families Reached", desc: "Across Lanjigarh & Bhawanipatna" },
        { value: "17,335", label: "Masks Distributed", desc: "Double-layered cotton cloth" },
        { value: "17,000", label: "Soaps Delivered", desc: "With hand hygiene education" },
        { value: "559", label: "PRI Leaders Engaged", desc: "Sarpanch, Naib Sarpanch & Ward Members" }
    ];

    // Raw kit contents organized neatly into comparable arrays
    const appiKit = [
        "Arhar Dal - 1kg", "Moong Dal - 1kg", "Kala Chana - 1kg", "Mustard Oil - 1 Ltr",
        "Sugar - 1kg", "Flattened Rice - 2kg", "Soyabin (Meal Maker) - 1kg", "Potato - 3kg",
        "Onion - 1kg", "Salt - 1kg", "Biscuits - 5 Packets", "Turmeric Powder - 100g",
        "Chilly Powder - 100g", "Curry Powder - 100g", "Soaps - 5 Pieces", "Double-layered Cotton Masks - 5 Pieces"
    ];

    const smileKit = [
        "Rice - 10kg", "Wheat Flour - 10kg", "Potato - 3kg", "Onion - 3kg",
        "Edible Oil - 1 Ltr", "Chilly Powder - 100g", "Turmeric Powder - 100g", "Chick Peas - 2kg",
        "Dal - 1kg", "Dalia - 1kg", "Sugar - 1kg", "Salt - 1kg",
        "Soap - 4 Pieces", "Sanitary Napkins - 1 Pkt", "Cotton Cloth Double-layered Masks - 5 Pieces"
    ];

    return (
        <section className="max-w-7xl mx-auto my-12 md:my-20 px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-white rounded-3xl border border-gray-100 shadow-xl">

            {/* HEADER SECTION */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
                <div className="flex items-center justify-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full">Crisis Response Archive</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                    COVID-19 Emergency Relief Operations
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Visualizing the structural hardships during lockdown, DAPTA mobilized immediate funding and local production pipelines to secure health, food accessibility, and dignity for vulnerable households.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-red-500 mx-auto rounded-full"></div>
            </div>

            {/* DASHBOARD METRICS HIGHLIGHT BAR */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {metrics.map((m, i) => (
                    <div key={i} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-5 rounded-2xl text-center shadow-2xs hover:shadow-md transition-all duration-300">
                        <div className="text-2xl md:text-3xl font-black text-rose-600 tracking-tight">{m.value}</div>
                        <div className="text-sm font-bold text-gray-800 mt-1">{m.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{m.desc}</div>
                    </div>
                ))}
            </div>

            {/* INTERACTIVE NAVIGATION TABS */}
            <div className="flex flex-wrap justify-center border-b border-gray-200 gap-2 sm:gap-6 mb-8 select-none">
                {[
                    { id: 'overview', label: 'Overview & Scope' },
                    { id: 'kits', label: 'Relief Kit Architecture' },
                    { id: 'activities', label: 'Activities & Outputs' },
                    { id: 'outcomes', label: 'Outcomes & Thanks' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-3 text-xs sm:text-sm font-bold tracking-wider uppercase border-b-2 transition-all duration-200 px-2 ${activeTab === tab.id
                            ? 'border-rose-600 text-rose-600 font-extrabold'
                            : 'border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* TAB PANEL CONTENT */}
            <div className="min-h-[400px] transition-all duration-300">

                {/* TAB 1: OVERVIEW & SCOPE */}
                {activeTab === 'overview' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4 text-sm sm:text-base text-gray-600 text-justify leading-relaxed">
                                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Phase 1 Operations (15/04/2020 – 10/05/2020)</h3>
                                <p>
                                    DAPTA stepped forward to safely manage and reduce the negative impacts of lockdown across the tribal and remote pockets of <strong>Lanjigarh Block</strong> and selected vulnerable sections in <strong>Bhawanipatna</strong>.
                                </p>
                                <p>
                                    The strategic operations prioritized historically marginalized sub-groups facing immediate food insecurity, including members from the <strong>transgender community</strong>, <strong>domestic maid servants</strong>, and local <strong>rickshaw pullers</strong>.
                                </p>
                            </div>
                            <div className="bg-rose-50/50 border border-rose-100/60 p-6 rounded-2xl space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-rose-800">Livelihood Mobilization Highlight</h4>
                                <p className="text-xs sm:text-sm text-rose-950/80 leading-relaxed text-justify">
                                    To secure an immediate supply of personal protection equipment, DAPTA mobilized <strong>2 local women Self-Help Groups (SHGs)</strong> to manufacture cotton cloth face masks at a massive scale. By guaranteeing to procure 100% of their production output, DAPTA successfully injected immediate emergency economic cash flows straight back to women workers.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: RELIEF KIT ARCHITECTURE */}
                {activeTab === 'kits' && (
                    <div className="space-y-8 animate-fadeIn">
                        <p className="text-sm text-gray-500 italic text-center max-w-2xl mx-auto">
                            Standardized distribution protocols were enacted to carefully align with all government-mandated guidelines regarding strict social distancing and rigorous hand hygiene.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* APPI Kit Card */}
                            <div className="border border-gray-100 bg-white rounded-2xl shadow-xs overflow-hidden">
                                <div className="bg-slate-900 text-white p-4">
                                    <h3 className="font-extrabold text-lg">Azim Premji Philanthropic Initiative (APPI)</h3>
                                    <p className="text-xs text-slate-400 mt-0.5">Distributed to 3,000 Families (Excluded Rice due to Govt provisioning)</p>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto custom-scrollbar">
                                    {appiKit.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                                            <span className="text-rose-500">✔</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Smile Foundation Kit Card */}
                            <div className="border border-gray-100 bg-white rounded-2xl shadow-xs overflow-hidden">
                                <div className="bg-amber-600 text-white p-4">
                                    <h3 className="font-extrabold text-lg">Smile Foundation India</h3>
                                    <p className="text-xs text-amber-100 mt-0.5">Distributed to 500 Families (Comprehensive Survival Kit)</p>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto custom-scrollbar">
                                    {smileKit.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                                            <span className="text-amber-600">✔</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 3: ACTIVITIES & OUTPUTS */}
                {activeTab === 'activities' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
                        {/* Core Operational Activities */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Activities Carried Out</h3>
                            <ul className="space-y-3">
                                {[
                                    "Health education & localized community sensitization detailing symptom identification, transmission vectors, and hand washing routines.",
                                    "Structured safe deployment and mapping of Dry Ration distribution hubs.",
                                    "Bulk distribution of cotton masks combined with structural hand washing demonstrations.",
                                    "Dissemination of vital public safety alerts to PRI members via strategic mass messaging tools.",
                                    "Targeted deployment of emergency hygiene resources to vulnerable child communities via DAPTA run CHILDLINE Kalahandi."
                                ].map((act, idx) => (
                                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
                                        <span className="bg-rose-100 text-rose-600 rounded-full p-0.5 mt-0.5 text-xs font-bold">✓</span>
                                        <span>{act}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Verifiable Outputs */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Quantified Outputs</h3>
                            <div className="space-y-3 max-h-80 overflow-y-auto pr-2 text-xs sm:text-sm text-gray-600">
                                <p><strong>Geographic Breadth:</strong> Reached 3,408 families across 124 rural villages in Lanjigarh Block and 92 families in Bhawanipatna (including 19 transgender individuals).</p>
                                <p><strong>Sanitation Materials:</strong> 17,335 cotton face masks and 17,000 bars of protective soap were directly handed out to beneficiary tracking lines.</p>
                                <p><strong>Panchayat Network Reach:</strong> Created 5 block-wise WhatsApp networks for women PRI members; delivered appropriate information guidelines directly to 43 Sarpanchs, 45 Naib Sarpanchs, and 471 ward members.</p>
                                <p><strong>CHILDLINE Operations:</strong> Directly mapped and supplied dry rations and hygiene provisions to 106 high-risk vulnerable children (including waste-pickers, brick kiln laborers, etc.).</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 4: OUTCOMES & ACKNOWLEDGMENTS */}
                {activeTab === 'outcomes' && (
                    <div className="space-y-8 animate-fadeIn text-sm text-gray-600">
                        {/* Outcomes Grid */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Structural Program Outcomes</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "Measurably reduced food security gaps during the peak of the movement crisis.",
                                    "Substantially increased community resilience, mask usage, and personal hygiene knowledge.",
                                    "Boosted online system migration and registration of returning migrant workers at the Gram Panchayat level.",
                                    "Mitigated public stigma and dismantled common myths regarding the pandemic.",
                                    "Empowered women PRI members to take primary leadership roles in mobilizing public benefit schemes (cooked food distribution, advance pensions, etc.)."
                                ].map((out, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm font-medium text-gray-700">
                                        💡 {out}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Institutional Gratefulness Block */}
                        <div className="border-t border-dashed border-gray-200 pt-6 space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-center text-gray-400">Institutional Appreciations</h3>
                            <p className="text-justify leading-relaxed text-xs sm:text-sm">
                                We convey our heartfelt thankfulness to the Kalahandi District and Lanjigarh Block administrations—particularly to the BDO <strong>Sri Jeetendra Mishra</strong> for his hands-on accompaniment to the remote village of Phuldumer in Trilochanpur GP. We extend deep gratitude to our donor partners, the <strong>Azim Premji Philanthropic Initiative (APPI)</strong> and the <strong>SMILE Foundation India</strong>, for their generous and benevolent support.
                            </p>
                        </div>
                    </div>
                )}

            </div>

            {/* FOOTER CTA CALLOUT */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-400 font-medium text-center sm:text-left">
                    DAPTA continues to execute need-driven interventions for returnee migrant networks to survive crises with absolute dignity.
                </p>
                <a
                    href="#full-report"
                    className="text-xs font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                >
                    Read Full Response Report →
                </a>
            </div>
        </section>
    );
}

export default CovidRelief;