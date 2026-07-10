import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomeLayout from './components/Home/HomeLayout';
import CertificateVerification from './components/CertificateVerification';
// --- ABOUT IMPORTS ---
import AboutLayout from './components/About/AboutLayout';
import AboutUs from './components/About/AboutUs';
import FounderNote from './components/About/FounderNote';
import GovernmentBody from './components/About/GovernmentBody';
import LegalDocument from './components/About/LegalDocument';
import OrganizasionalProfit from './components/About/OrganizasionalProfit';
import Organogram from './components/About/Organogram';
import StrategyAndRoadmap from './components/About/StrategyAndRoadmap';

// --- ACTIVITIES IMPORTS ---
import HealthAndWellbeing from './components/Activities/Activities/HealthAndWellbeing';
import WomenParticipation from './components/Activities/Activities/WomenParticipation';
import EducationAndChildDevelopment from './components/Activities/Activities/EducationAndChildDevelopment';
import SustainableManagement from './components/Activities/Activities/SustainableManagement';
import EnvironmentalSustainability from './components/Activities/Activities/EnvironmentalSustainability';
import DisasterManagement from './components/Activities/Activities/DisasterManagement';
import NetworkingAndCapacityBuilding from './components/Activities/Activities/NetworkingAndCapacityBuilding';
import ExperienceAndHighlights from './components/Activities/ExperienceAndHighlights';
import DaptaRelief from './components/Activities/Activities/CovidRelief';

// --- REPORTS & REFLECTIONS IMPORTS ---
import AnnualReport from './components/ReportsAndReflections/Report/AnnaulReport';
import FinancialReport from './components/ReportsAndReflections/Report/FinancialReport';
import CaseStudies from './components/ReportsAndReflections/ImpactInsight/CaseStudies';
import Publications from './components/ReportsAndReflections/ImpactInsight/Publications';
import Learning from './components/ReportsAndReflections/ImpactInsight/Learning';
import Testimonials from './components/ReportsAndReflections/ImpactInsight/Testimonials';

// --- GET INVOLVED IMPORTS ---
import VolunteerOpportunities from './components/GetInvolved/VolunteerOpportunities';
import Partnership from './components/GetInvolved/Partnership';
import DonationInfo from './components/GetInvolved/DonationInfo';

// --- GALLERY IMPORTS ---
import CommunityInteractions from './components/Gallery/PhotoGallery/CommunityInterections';
import EventsPhotos from './components/Gallery/PhotoGallery/Events';
import ActivitiesPhotos from './components/Gallery/PhotoGallery/Activities';
import AwardsCertificates from './components/Gallery/PhotoGallery/AwardAndCertifications';
import ClubPhotos from './components/Gallery/PhotoGallery/ClubPhotos';
import VideoGallery from './components/Gallery/VideoGallery';
import SocialMedia from './components/Gallery/SocialMedia';

// --- CONTACT IMPORT ---
import Contact from './components/Contact';

const Placeholder = ({ title }) => (
  <div className="p-8 pt-24">
    <h2>{title} Page Coming Soon</h2>
  </div>
);

function App() {
  return (
    <Routes>
      {/* Shared Layout Framework */}
      <Route path="/" element={<Layout />}>

        {/* Index Page */}
        <Route index element={<HomeLayout />} />

        {/* ================= ABOUT ROUTES ================= */}
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<Navigate to="about-us" replace />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="profile" element={<OrganizasionalProfit />} />
          <Route path="governing-body" element={<GovernmentBody />} />
          <Route path="organogram" element={<Organogram />} />
          <Route path="legal-documents" element={<LegalDocument />} />
          <Route path="roadmap" element={<StrategyAndRoadmap />} />
          <Route path="founder-notes" element={<FounderNote />} />
        </Route>

        {/* ================= ACTIVITIES ROUTES ================= */}
        <Route path="activities">
          <Route index element={<Navigate to="all" replace />} />

          {/* Level 3 deep nested sub-routes under /activities/all/* */}
          <Route path="all">
            <Route index element={<Navigate to="health" replace />} />
            <Route path="health" element={<HealthAndWellbeing />} />
            <Route path="womens-governance" element={<WomenParticipation />} />
            <Route path="education" element={<EducationAndChildDevelopment />} />
            <Route path="covid-relief" element={<DaptaRelief />} />
            <Route path="sustainable-livelihoods" element={<SustainableManagement />} />
            <Route path="environmental-climate" element={<EnvironmentalSustainability />} />
            <Route path="disaster-inclusion" element={<DisasterManagement />} />
            <Route path="networking-capacity" element={<NetworkingAndCapacityBuilding />} />
          </Route>

          <Route path="highlights" element={<ExperienceAndHighlights />} />
        </Route>

        {/* ================= REPORTS & REFLECTIONS ROUTES ================= */}

        {/* <Route path="reports">
          <Route index element={<Navigate to="annual" replace />} />

          <Route path="all">
            <Route index element={<Navigate to="annual" replace />} />

            <Route path="annual" element={<AnnualReport />} />
            <Route path="financial" element={<FinancialReport />} />
          </Route>

          <Route path="impact">
            <Route index element={<Navigate to="case-studies" replace />} />

            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="publications" element={<Publications />} />
            <Route path="learning" element={<Learning />} />
            <Route path="testimonials" element={<Testimonials />} />
          </Route>
        </Route> */}


        <Route path="reports">
          <Route index element={<Navigate to="annual" replace />} />

          <Route path="annual" element={<AnnualReport />} />
          <Route path="financial" element={<FinancialReport />} />
        </Route>

        {/* ================= GET INVOLVED ROUTES ================= */}
        <Route path="get-involved">
          <Route index element={<Placeholder title="Get Involved Overview" />} />
          <Route path="volunteer" element={<VolunteerOpportunities />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="donation-info" element={<DonationInfo />} />
        </Route>

        {/* ================= GALLERY ROUTES ================= */}
        <Route path="gallery">
          <Route index element={<Navigate to="photos/community" replace />} />

          {/* Photo Gallery Layout Categories (/gallery/photos/*) */}
          <Route path="photos">
            <Route index element={<Navigate to="community" replace />} />

            <Route path="community" element={<CommunityInteractions />} />
            <Route path="events" element={<EventsPhotos />} />
            <Route path="activities" element={<ActivitiesPhotos />} />
            <Route path="awards-certificates" element={<AwardsCertificates />} />
            <Route path="club" element={<ClubPhotos />} />
          </Route>

          <Route path="videos" element={<VideoGallery />} />
          <Route path="social" element={<SocialMedia />} />
        </Route>

        {/* ================= CONTACT ROUTE ================= */}
        <Route path="contact" element={<Contact />} />
        <Route
          path="verify/:token"
          element={<CertificateVerification />}
        />
      </Route>
    </Routes>
  );
}

export default App;
