# Dapta Frontend

Dapta Frontend is a React single-page application built with Vite. It defines the public website interface for Dapta, including the home page, about pages, activity sections, reports and reflections, gallery pages, get-involved pages, and contact routing.

The app uses React Router for page navigation, Tailwind CSS for styling, and shared layout components for the navbar, main content area, and footer.

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- Lucide React and React Icons
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
DaptaFrontend/
|-- public/                         # Static public assets served by Vite
|-- src/
|   |-- assets/                     # General bundled assets
|   |   |-- hero.png
|   |   |-- react.svg
|   |   `-- vite.svg
|   |-- components/
|   |   |-- About/                  # About section pages and nested layout
|   |   |   |-- AboutLayout.jsx
|   |   |   |-- AboutUs.jsx
|   |   |   |-- FounderNote.jsx
|   |   |   |-- GovernmentBody.jsx
|   |   |   |-- LegalDocument.jsx
|   |   |   |-- OrganizasionalProfit.jsx
|   |   |   |-- Organogram.jsx
|   |   |   `-- StrategyAndRoadmap.jsx
|   |   |-- Activities/             # Activity pages and category pages
|   |   |   |-- Activities/
|   |   |   |   |-- DisasterManagement.jsx
|   |   |   |   |-- EducationAndChildDevelopment.jsx
|   |   |   |   |-- EnvironmentalSustainability.jsx
|   |   |   |   |-- HealthAndWellbeing.jsx
|   |   |   |   |-- NetworkingAndCapacityBuilding.jsx
|   |   |   |   |-- SustainableManagement.jsx
|   |   |   |   `-- WomenParticipation.jsx
|   |   |   `-- ExperienceAndHighlights.jsx
|   |   |-- Gallery/                # Gallery pages
|   |   |   |-- PhotoGallery/
|   |   |   |-- SocialMedia.jsx
|   |   |   `-- VideoGallery.jsx
|   |   |-- GetInvolved/            # Donation, partnership, and volunteer pages
|   |   |-- Home/                   # Home page sections
|   |   |-- ReportsAndReflections/  # Report and impact insight pages
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Layout.jsx              # Shared page wrapper with navbar, outlet, footer
|   |   `-- Navbar.jsx
|   |-- img/                        # Website image assets
|   |-- App.css
|   |-- App.jsx                     # Main route configuration
|   |-- index.css
|   `-- main.jsx                    # React app entry point
|-- eslint.config.js                # ESLint configuration
|-- index.html                      # Vite HTML entry file
|-- package.json                    # Scripts and dependencies
|-- package-lock.json
|-- vite.config.js                  # Vite, React, and Tailwind plugin setup
`-- README.md
```

## Main Routes

Routes are configured in `src/App.jsx` and rendered inside the shared `Layout` component.

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/about/about-us` | About Dapta |
| `/about/profile` | Organizational profile |
| `/about/governing-body` | Governing body |
| `/about/organogram` | Organogram |
| `/about/legal-documents` | Legal documents |
| `/about/roadmap` | Strategy and roadmap |
| `/about/founder-notes` | Founder note |
| `/activities/all` | Activities overview |
| `/activities/highlights` | Experience and highlights |
| `/reports` | Reports overview |
| `/reports/all/annual` | Annual report |
| `/reports/all/financial` | Financial report |
| `/reports/impact/case-studies` | Case studies |
| `/reports/impact/publications` | Publications |
| `/reports/impact/learning` | Learning |
| `/reports/impact/testimonials` | Testimonials |
| `/get-involved` | Get involved overview |
| `/get-involved/volunteer` | Volunteer opportunities |
| `/get-involved/partnership` | Partnership |
| `/get-involved/donation-info` | Donation information |
| `/gallery` | Gallery overview |
| `/gallery/photos/...` | Photo gallery categories |
| `/gallery/videos` | Video gallery |
| `/gallery/social` | Social media |
| `/contact` | Contact page |

Some routes currently render placeholder content until their final page components are connected.

## Application Flow

1. `src/main.jsx` mounts the React app into `index.html`.
2. `BrowserRouter` enables client-side routing.
3. `src/App.jsx` defines the route tree.
4. `src/components/Layout.jsx` wraps all pages with the shared `Navbar`, dynamic `Outlet`, and `Footer`.
5. Page-specific components live under `src/components/` by website section.

## Development Notes

- Add new pages inside the relevant section folder under `src/components/`.
- Register new routes in `src/App.jsx`.
- Place reusable layout-level UI in `src/components/`.
- Place image files in `src/img/` or `src/assets/` depending on how they are imported and used.
- Keep route paths and navbar links in sync when adding or renaming pages.
