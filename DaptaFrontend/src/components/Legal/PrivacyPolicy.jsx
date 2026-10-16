import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Users, Baby, FileText, CheckCircle2, AlertCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', label: '1. Introduction & Scope' },
    { id: 'data-collected', label: '2. Personal Data We Collect' },
    { id: 'purpose-usage', label: '3. Purpose & Legal Basis' },
    { id: 'child-protection', label: '4. Child Data Protection (DPDP Act)' },
    { id: 'storage-security', label: '5. Storage & Access Controls' },
    { id: 'sharing-disclosure', label: '6. Third-Party Sharing' },
    { id: 'retention', label: '7. Data Retention' },
    { id: 'user-rights', label: '8. Data Principal Rights' },
    { id: 'contact-grievance', label: '9. Grievance Redressal' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-6xl my-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header Banner */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-100/60 via-emerald-50/40 to-transparent rounded-bl-full pointer-events-none -z-0" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>DPDP Act 2023 Aligned Policy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
              <strong>Development Agency for Poor and Tribal Awakening (DAPTA)</strong> is committed to the lawful, fair, and transparent handling of personal data. This policy details how personal data is collected, used, protected, and retained across our digital portals in accordance with India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act 2023)</strong> and applicable legal frameworks.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 mt-6 pt-6 border-t border-gray-100">
              <span><strong>Last Updated:</strong> October 2026</span>
              <span>•</span>
              <span><strong>Jurisdiction:</strong> Odisha, India</span>
              <span>•</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                DPDP Act, 2023 Aligned
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Table of Contents (Desktop Sticky) */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-28 bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Table of Contents
            </h3>
            <nav className="space-y-1.5 text-sm">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:text-sky-700 hover:bg-sky-50 font-medium transition-all"
                >
                  {sec.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                to="/terms-and-conditions"
                className="flex items-center justify-between text-xs font-bold text-sky-700 hover:text-sky-800 p-2.5 rounded-lg bg-sky-50/60 hover:bg-sky-50 transition-colors"
              >
                <span>Read Terms & Conditions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Legal Document Sections */}
          <main className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-10 shadow-sm space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">

            {/* 1. Introduction & Scope */}
            <section id="introduction" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">1.</span> Introduction & Scope
              </h2>
              <p>
                The <strong>Development Agency for Poor and Tribal Awakening (DAPTA)</strong> is a non-governmental, non-political, non-profit voluntary organisation established in 1992 in Kalahandi District, Odisha. DAPTA works for the holistic upliftment of tribal, rural, and economically marginalized communities through participatory natural resource management, sustainable agriculture, drinking water and borewell infrastructure, community healthcare, child development, and women&apos;s self-help groups.
              </p>
              <p>
                This Privacy Policy applies to personal data collected via our website (<a href="https://www.dapta.org" className="text-sky-600 hover:underline">www.dapta.org</a>), contact inquiries, online certificate verification mechanisms (<code className="bg-gray-100 text-sky-700 px-1.5 py-0.5 rounded text-xs">/verify/:token</code>), and offline donation forms.
              </p>
            </section>

            {/* 2. Personal Data We Collect */}
            <section id="data-collected" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">2.</span> Personal Data We Collect
              </h2>
              <p>
                In strict compliance with data minimization principles, DAPTA collects only the minimal personal data necessary to respond to your queries, process community inquiries, and issue institutional receipts:
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Contact Information:</strong> Full name, email address, phone number, and inquiry messages submitted voluntarily through our Contact Us form.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Donation & Remittance Records:</strong> Donor name, bank transaction reference numbers, postal address, and PAN (if provided on offline donation declaration forms for Section 80G tax receipts under the Indian Income Tax Act).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Credential Verification Tokens:</strong> Unique alphanumeric certificate identifiers submitted to verify training, volunteering, or fellowship credentials issued by DAPTA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Technical Access Logs:</strong> Standard web server logs including IP address, browser type, timestamp, and referring URL, collected solely for server diagnostics and cybersecurity defense.</span>
                </li>
              </ul>
            </section>

            {/* 3. Purpose & Legal Basis */}
            <section id="purpose-usage" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">3.</span> Purpose & Legal Basis for Processing
              </h2>
              <p>
                We process your data strictly under lawful grounds recognised by Section 4 and Section 7 of the DPDP Act 2023:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm">Specified Consent</h4>
                  <p className="text-xs text-gray-600">
                    To respond to your voluntary messages, feedback, and partnership requests submitted via our web forms.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm">Statutory Compliance</h4>
                  <p className="text-xs text-gray-600">
                    To maintain accounting logs, financial audits, and donation receipts pursuant to Indian tax and NGO laws.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm">Public Verification</h4>
                  <p className="text-xs text-gray-600">
                    To validate legitimate certificates and volunteer recognitions through authorized token lookups.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm">Security & Integrity</h4>
                  <p className="text-xs text-gray-600">
                    To safeguard our IT infrastructure against malicious traffic, abuse, and unauthorized access.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Child Data Protection */}
            <section id="child-protection" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">4.</span> Child Data Protection (DPDP Act, 2023)
              </h2>
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                  <Baby className="w-5 h-5 text-emerald-700" />
                  <span>Strict Protection of Children&apos;s Personal Data</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  In compliance with <strong>Section 9 of the Digital Personal Data Protection Act, 2023</strong>:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-900 list-disc list-inside">
                  <li><strong>Verifiable Parental Consent:</strong> DAPTA does not collect personal data from individuals under 18 years of age through our website without verifiable parental or lawful guardian consent.</li>
                  <li><strong>No Profiling or Targeted Advertising:</strong> We never engage in behavioral tracking, profiling, or targeted outreach directed at children.</li>
                  <li><strong>No Detrimental Processing:</strong> We do not process child personal data in any manner that could adversely impact the well-being of a child.</li>
                  <li><strong>Beneficiary Identity Protection:</strong> Case studies, nutrition camp reports, and educational photo galleries featuring rural or tribal children are published solely with prior institutional and community consent, and identifying personal data is withheld to protect children&apos;s dignity and safety.</li>
                </ul>
              </div>
            </section>

            {/* 5. Storage & Access Controls */}
            <section id="storage-security" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">5.</span> Storage, Access Controls & Security
              </h2>
              <p>
                We implement practical, reasonable administrative and technical security measures appropriate to the nature of data handled:
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-sky-600 flex-shrink-0 mt-1" />
                  <span><strong>Restricted Access:</strong> Inquiries and communication logs are restricted strictly to authorized administrative officers and program coordinators on a strict need-to-know basis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-sky-600 flex-shrink-0 mt-1" />
                  <span><strong>Encrypted In-Transit Transmission:</strong> Website traffic is served over standard HTTPS (Transport Layer Security) to safeguard communications between your browser and our servers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-sky-600 flex-shrink-0 mt-1" />
                  <span><strong>Physical & Administrative Security:</strong> Physical donation forms and paper registers are stored in secure archives at our Bhawanipatna office with locked access.</span>
                </li>
              </ul>
            </section>

            {/* 6. Third-Party Sharing */}
            <section id="sharing-disclosure" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">6.</span> Third-Party Sharing & Transfers
              </h2>
              <p>
                <strong>DAPTA does not sell, rent, commercialize, or trade your personal data under any circumstances.</strong>
              </p>
              <p>Personal data is shared only under the following limited and necessary conditions:</p>
              <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-gray-600">
                <li><strong>Service Providers & Infrastructure:</strong> Web hosting partners, secure mail transfer agents, and media hosting services (such as Cloudinary) acting under data processing agreements solely to host and deliver our web pages.</li>
                <li><strong>Statutory Authorities:</strong> Government bodies, tax authorities, or regulatory agencies where mandatory by Indian law (such as Section 80G filings, FCRA requirements, or lawful court orders).</li>
              </ul>
            </section>

            {/* 7. Data Retention */}
            <section id="retention" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">7.</span> Data Retention Schedule
              </h2>
              <p>
                In compliance with Section 8(7) of the DPDP Act 2023, personal data is retained only as long as necessary for the purpose it was collected, or as required by Indian statutory law:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-100 text-gray-800 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3 border-b border-gray-200">Data Category</th>
                      <th className="p-3 border-b border-gray-200">Retention Period</th>
                      <th className="p-3 border-b border-gray-200">Disposal Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 font-medium">Contact Inquiries</td>
                      <td className="p-3">Up to 24 months after inquiry resolution</td>
                      <td className="p-3 text-gray-500">Secure electronic deletion</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Donation & Tax Logs</td>
                      <td className="p-3">7 years (mandated by Indian Income Tax Act)</td>
                      <td className="p-3 text-gray-500">Archived securely for statutory audit</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Credential Verification</td>
                      <td className="p-3">Retained while the issued credential remains valid</td>
                      <td className="p-3 text-gray-500">Maintained in master register</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Server Diagnostics Logs</td>
                      <td className="p-3">90 to 180 days</td>
                      <td className="p-3 text-gray-500">Automated log rotation purge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. User Rights */}
            <section id="user-rights" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">8.</span> Data Principal Rights (DPDP Act, 2023)
              </h2>
              <p>
                As a Data Principal under the DPDP Act 2023, you are entitled to exercise the following legal rights regarding your personal data processed by DAPTA:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50">
                  <h4 className="font-bold text-gray-900">Right to Access</h4>
                  <p className="text-gray-600 text-xs mt-1">Obtain a summary of personal data being processed and third parties with whom it was shared.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50">
                  <h4 className="font-bold text-gray-900">Right to Correction</h4>
                  <p className="text-gray-600 text-xs mt-1">Request rectification of inaccurate, incomplete, or outdated personal information.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50">
                  <h4 className="font-bold text-gray-900">Right to Erasure</h4>
                  <p className="text-gray-600 text-xs mt-1">Request deletion of personal data when the original processing purpose is complete.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50">
                  <h4 className="font-bold text-gray-900">Right of Grievance Redressal</h4>
                  <p className="text-gray-600 text-xs mt-1">Submit concerns to DAPTA&apos;s Grievance Officer and escalate to the Data Protection Board of India if unresolved.</p>
                </div>
              </div>
            </section>

            {/* 9. Grievance Redressal & Contact */}
            <section id="contact-grievance" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-sky-600">9.</span> Grievance Redressal & Contact Information
              </h2>
              <p>
                To exercise any of your data principal rights, request data correction or deletion, or lodge a privacy concern, please contact our designated Grievance Officer:
              </p>

              <div className="bg-sky-50/70 rounded-2xl p-6 border border-sky-200 space-y-3 text-sm">
                <div className="font-bold text-gray-900 text-base">
                  Grievance Redressal Officer — DAPTA
                </div>
                <div className="text-gray-700">
                  Development Agency for Poor and Tribal Awakening (DAPTA)
                </div>

                <div className="space-y-2 text-gray-600 pt-1">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-sky-700 flex-shrink-0 mt-0.5" />
                    <span>Near Love Dale School, Mandar Bagicha Para, Bhawanipatna, Dist – Kalahandi, Odisha, PIN - 766001, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-sky-700 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      <a href="mailto:daptaorissa@gmail.com" className="text-sky-700 hover:underline font-medium">daptaorissa@gmail.com</a>
                      <span>/</span>
                      <a href="mailto:dapta@rediffmail.com" className="text-sky-700 hover:underline font-medium">dapta@rediffmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-sky-700 flex-shrink-0" />
                    <a href="tel:+919437029124" className="text-gray-700 font-medium hover:underline">+91 9437029124</a>
                  </div>
                </div>

                <p className="text-xs text-gray-500 pt-2 border-t border-sky-200/60">
                  We acknowledge all formal privacy and data correction requests within 7 working days and aim to provide complete resolution within 30 days as prescribed under the DPDP Act 2023.
                </p>
              </div>
            </section>

          </main>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
