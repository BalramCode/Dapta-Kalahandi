import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle2, ShieldAlert, Award, HeartPulse, ExternalLink, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'acceptance', label: '1. Acceptance of Terms' },
    { id: 'platform-usage', label: '2. Acceptable Platform Usage' },
    { id: 'user-responsibilities', label: '3. User Responsibilities & Conduct' },
    { id: 'community-guidelines', label: '4. Community Guidelines' },
    { id: 'verification-terms', label: '5. Verification of Credentials' },
    { id: 'medical-disclaimer', label: '6. Medical & Healthcare Disclaimer' },
    { id: 'intellectual-property', label: '7. Intellectual Property & Content' },
    { id: 'service-limits', label: '8. Limitation of Liability & Warranty' },
    { id: 'governing-law', label: '9. Governing Law & Jurisdiction' },
    { id: 'legal-contact', label: '10. Contact Information' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-6xl my-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header Banner */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-100/60 via-sky-50/40 to-transparent rounded-bl-full pointer-events-none -z-0" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-4">
              <Scale className="w-3.5 h-3.5 text-amber-600" />
              <span>User Agreement & Terms of Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Terms & Conditions
            </h1>

            <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
              Welcome to the official website of the <strong>Development Agency for Poor and Tribal Awakening (DAPTA)</strong>. These Terms &amp; Conditions govern your access to and use of our digital portal, publications, certificate verification utilities, donation information, and community resources.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 mt-6 pt-6 border-t border-gray-100">
              <span><strong>Effective Date:</strong> October 2026</span>
              <span>•</span>
              <span><strong>Governing Jurisdiction:</strong> Odisha, India</span>
              <span>•</span>
              <span className="text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                Non-Profit Voluntary Service Portal
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
                  className="block px-3 py-2 rounded-lg text-gray-600 hover:text-amber-700 hover:bg-amber-50 font-medium transition-all"
                >
                  {sec.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
              <Link
                to="/privacy-policy"
                className="flex items-center justify-between text-xs font-bold text-sky-700 hover:text-sky-800 p-2.5 rounded-lg bg-sky-50/60 hover:bg-sky-50 transition-colors"
              >
                <span>Read Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-between text-xs font-bold text-gray-700 hover:text-gray-900 p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span>Contact Desk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* Legal Document Sections */}
          <main className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-10 shadow-sm space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">

            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">1.</span> Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, downloading materials, verifying credentials, or using any services provided on this website by the <strong>Development Agency for Poor and Tribal Awakening (DAPTA)</strong> (&quot;Organization&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you (&quot;User&quot; or &quot;Visitor&quot;) agree to be bound by these Terms &amp; Conditions and our accompanying <Link to="/privacy-policy" className="text-sky-600 font-semibold hover:underline">Privacy Policy</Link>.
              </p>
              <p>
                If you do not agree with any part of these terms, you should discontinue use of the website. If you are accessing this website on behalf of an institution, non-governmental partner, or donor agency, you represent that you have legal authority to bind that entity to these Terms.
              </p>
            </section>

            {/* 2. Acceptable Platform Usage */}
            <section id="platform-usage" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">2.</span> Acceptable Platform Usage
              </h2>
              <p>
                Our digital portal is dedicated to promoting tribal empowerment, poverty alleviation, rural water and sanitation infrastructure, sustainable livelihood generation, and community welfare in Kalahandi and across Odisha. Users must utilize our digital materials strictly for lawful, educational, research, philanthropic, and non-commercial informational purposes.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 space-y-2.5">
                <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-500" />
                  Prohibited Activities:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 list-disc list-inside">
                  <li>Engaging in automated scraping, bulk data harvesting, or extracting staff/beneficiary details without express written authorization.</li>
                  <li>Attempting to probe, scan, breach, or compromise server security, networks, or digital certificate verification databases.</li>
                  <li>Introducing viruses, malicious scripts, denial-of-service requests, or corrupt files that impair website stability.</li>
                  <li>Impersonating DAPTA founders, office bearers, field coordinators, or partner agencies.</li>
                  <li>Posting or distributing defamatory, abusive, obscene, or derogatory remarks regarding tribal, rural, or marginalized communities.</li>
                </ul>
              </div>
            </section>

            {/* 3. User Responsibilities & Conduct */}
            <section id="user-responsibilities" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">3.</span> User Responsibilities & Conduct
              </h2>
              <p>
                When submitting contact messages, donation declarations, or partnership inquiries:
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Truthful Information:</strong> You agree to provide accurate, genuine name, email, and telephone coordinates.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lawful Contributions:</strong> Any voluntary donations remitted to DAPTA via direct bank transfer or cheque must comply with Indian financial regulations (including Income Tax Act 1961 Section 80G and FCRA provisions where applicable).</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Beneficiary Dignity:</strong> You agree to respect the privacy, dignity, and cultural sensitivities of tribal beneficiaries and rural self-help group members featured across DAPTA programs.</span>
                </li>
              </ul>
            </section>

            {/* 4. Community Guidelines */}
            <section id="community-guidelines" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">4.</span> Community Guidelines
              </h2>
              <p>
                DAPTA is built upon the values of social justice, mutual respect, gender equality, and tribal self-determination. We maintain zero tolerance for discrimination based on caste, tribe, religion, gender, disability, or language.
              </p>
              <p>
                All interactions across our official website channels and social media profiles (LinkedIn, Facebook, Instagram) must remain constructive, civil, and aligned with public interest and child welfare standards.
              </p>
            </section>

            {/* 5. Verification of Credentials */}
            <section id="verification-terms" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">5.</span> Professional & Credential Verification Terms
              </h2>
              <p>
                DAPTA hosts an online certificate verification interface (at <code className="bg-gray-100 text-sky-700 px-1.5 py-0.5 rounded text-xs">/verify/:token</code>) allowing academic institutions, employers, and development partners to confirm the authenticity of training, volunteering, and capacity-building certificates issued by our organisation.
              </p>

              <div className="bg-sky-50/60 p-5 rounded-xl border border-sky-200 space-y-2">
                <h4 className="font-bold text-sky-950 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-700" />
                  Credential Verification Rules:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-sky-900 list-disc list-inside">
                  <li><strong>Authorized Verification Only:</strong> You may query certificate tokens only when voluntarily provided by the certificate holder for genuine verification purposes.</li>
                  <li><strong>Authenticity of Output:</strong> Verification results reflect DAPTA&apos;s records at the time of inquiry. An authentic result confirms issuance by DAPTA; it does not replace independent professional vetting or character background checks by third parties.</li>
                  <li><strong>Forgery & Misrepresentation:</strong> Any attempt to alter, duplicate, forge, or tamper with DAPTA certificates, verification tokens, or stamps constitutes criminal fraud and will be subject to civil prosecution and criminal reporting under the Indian Penal Code and Information Technology Act, 2000.</li>
                </ul>
              </div>
            </section>

            {/* 6. Medical & Healthcare Disclaimer */}
            <section id="medical-disclaimer" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">6.</span> Medical & Healthcare Disclaimer
              </h2>

              <div className="bg-amber-50/80 border-2 border-amber-300/80 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-900 font-bold text-base sm:text-lg">
                  <HeartPulse className="w-5 h-5 text-amber-700 flex-shrink-0" />
                  <span>Important Medical & Health Information Notice</span>
                </div>
                
                <p className="text-amber-900/90 text-sm sm:text-base leading-relaxed">
                  <strong>DAPTA conducts community health awareness, mother &amp; child nutrition initiatives, COVID relief distributions, and rural sanitation workshops in Kalahandi District. Information published on this website regarding health, nutrition, or hygiene is provided strictly for educational and community awareness purposes.</strong>
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-amber-900/80 pt-2 border-t border-amber-200">
                  <p>
                    • <strong>Not Medical Advice:</strong> Website content does not constitute professional medical advice, clinical diagnosis, therapeutic consultation, or prescription of medical treatments.
                  </p>
                  <p>
                    • <strong>Consult Qualified Healthcare Providers:</strong> Always consult a registered physician, medical doctor, or qualified healthcare professional for medical questions, clinical diagnosis, or treatment decisions.
                  </p>
                  <p>
                    • <strong>No Doctor-Patient Relationship:</strong> Accessing or reading materials on maternal healthcare, tribal nutrition, or sanitation programs does not create a doctor-patient relationship with DAPTA or any associated healthcare volunteer.
                  </p>
                  <p>
                    • <strong>Emergency Situations:</strong> If you or someone around you faces a medical emergency, contact your nearest government hospital, primary health center, or call emergency helpline 108 / 112 immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Intellectual Property & Content */}
            <section id="intellectual-property" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">7.</span> Intellectual Property & Content Rights
              </h2>
              <p>
                All materials published on this website — including research publications, project summaries, logos, field photographs, audio-visual records, infographics, and website design code — are the property of DAPTA or used under appropriate organizational license or fair community use.
              </p>
              <p>
                You may download, print, or quote informational excerpts (such as donation forms, project reports, or annual summaries) strictly for personal, non-commercial research, academic, or philanthropic reference, provided you cite <strong>Development Agency for Poor and Tribal Awakening (DAPTA)</strong> as the source. Commercial reproduction, distribution, or derivative monetization is strictly prohibited without prior written authorization.
              </p>
            </section>

            {/* 8. Limitation of Liability & Warranty */}
            <section id="service-limits" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">8.</span> Limitation of Liability & Limits of Service
              </h2>
              <p>
                This website and all associated materials are provided on an &quot;as is&quot; and &quot;as available&quot; basis without express or implied warranties of any kind. While DAPTA makes reasonable efforts to ensure accuracy and timely updates:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 list-disc list-inside">
                <li>We do not guarantee uninterrupted, error-free, or bug-free operation of digital services or server uptime.</li>
                <li>We are not responsible for any technical delays, connection errors, or third-party banking failures during donations or online communications.</li>
                <li>In no event shall DAPTA, its managing committee, trustees, staff, or voluntary workers be liable for any indirect, incidental, consequential, or punitive damages arising from the use or inability to use this platform.</li>
                <li>Third-party links (including external banking portals, Cloudinary CDN, YouTube embeds, Google Maps, or social networks) are governed by their respective terms; DAPTA assumes no responsibility for third-party practices or content.</li>
              </ul>
            </section>

            {/* 9. Governing Law & Jurisdiction */}
            <section id="governing-law" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">9.</span> Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the <strong>Republic of India</strong>, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023.
              </p>
              <p>
                Any dispute, claim, or controversy arising out of or in connection with the use of this website or DAPTA digital initiatives shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Bhawanipatna / Kalahandi District, Odisha, India</strong>.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section id="legal-contact" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
                <span className="text-amber-600">10.</span> Legal & Administrative Contact
              </h2>
              <p>
                If you have any questions, legal notices, or feedback regarding these Terms &amp; Conditions or our platform services, please reach out to our administrative team:
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 space-y-3 text-sm">
                <div className="font-bold text-gray-900 text-base">
                  Development Agency for Poor and Tribal Awakening (DAPTA)
                </div>

                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Near Love Dale School, Mandar Bagicha Para, Bhawanipatna, Dist – Kalahandi, Odisha, PIN - 766001, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      <a href="mailto:daptaorissa@gmail.com" className="text-sky-700 hover:underline font-medium">daptaorissa@gmail.com</a>
                      <span>/</span>
                      <a href="mailto:dapta@rediffmail.com" className="text-sky-700 hover:underline font-medium">dapta@rediffmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <a href="tel:+919437029124" className="text-gray-700 font-medium hover:underline">+91 9437029124</a>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200 text-xs text-gray-500">
                  For privacy notices, subject access, and DPDP Act rights, please refer directly to our <Link to="/privacy-policy" className="text-sky-600 font-semibold hover:underline">Privacy Policy</Link>.
                </div>
              </div>
            </section>

          </main>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
