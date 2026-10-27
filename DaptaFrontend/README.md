# Dapta Frontend

Dapta Frontend is a React single-page application (SPA) built with Vite. It defines the public website interface for Dapta, including the home page, about pages, activity sections, reports and reflections, gallery pages, get-involved pages, and contact routing.

The app uses React Router for page navigation, Tailwind CSS for styling, and shared layout components for the navbar, main content area, and footer.

---

## Tech Stack

- **React 19**
- **Vite 8**
- **React Router DOM 7**
- **Tailwind CSS 4**
- **Lucide React & React Icons**
- **ESLint**

---

## Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Build for production (includes static route prerendering)
```bash
npm run build
```
This builds the client production bundle, compiles the server entry, prerenders all 35 public routes into `dist/<route>/index.html` with route-specific metadata and static HTML for search engines and link preview crawlers, and cleans up temporary build artifacts.

### 4. Generate or update sitemap with production domain
```bash
npm run sitemap
# Or with explicit production domain:
node scripts/generate-sitemap.js https://www.dapta.org
```

### 5. Preview production build locally
```bash
npm run preview
```

### 6. Run lint checks
```bash
npm run lint
```

---

## Deploying to Netlify

This project is fully pre-configured for Netlify with [`netlify.toml`](./netlify.toml) and [`public/_redirects`](./public/_redirects) to prevent 404 errors on page refresh/direct route navigation.

Here are the 3 ways you can deploy this project to Netlify:

### Method 1: Git-based Continuous Deployment (Recommended)

This automatically builds and deploys your site whenever you push changes to GitHub / GitLab / Bitbucket.

1. **Push your code to GitHub / GitLab**:
   ```bash
   git add .
   git commit -m "Deploy Dapta frontend to Netlify"
   git push origin main
   ```

2. **Log in to Netlify**:
   - Go to [Netlify](https://app.netlify.com/) and sign in.

3. **Import Existing Project**:
   - Click **"Add new site"** > **"Import an existing project"**.
   - Select your Git provider (e.g., **GitHub**) and authorize Netlify.
   - Choose your `DaptaFrontend` repository.

4. **Confirm Build Settings**:
   Netlify will automatically detect the settings from `netlify.toml`:
   - **Base directory**: *(leave blank or `/`)*
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

5. **Deploy Site**:
   - Click **"Deploy Dapta"**.
   - Within 1–2 minutes, your site will be live at a custom `*.netlify.app` URL!

---

### Method 2: Netlify Drop (Manual Drag & Drop — Quickest)

If you don't want to connect Git yet, you can directly upload your production build:

1. **Build the production bundle locally**:
   ```bash
   npm run build
   ```
   This generates the production-ready files inside the `dist/` folder.

2. **Open Netlify Drop**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop).

3. **Upload the `dist` folder**:
   - Drag and drop your **`dist`** folder (located inside `DaptaFrontend/dist`) into the upload zone.
   - Your site will deploy instantly!

---

### Method 3: Netlify CLI

You can also deploy directly from your terminal using the Netlify CLI:

1. **Install Netlify CLI globally**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Log in to your Netlify account**:
   ```bash
   netlify login
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Deploy to production**:
   ```bash
   netlify deploy --prod --dir=dist
   ```

---

## Netlify Routing & 404 Prevention

Because this application uses React Router (SPA client-side routing), direct URL visits or page refreshes (e.g. `/about/about-us` or `/contact`) need to be rewritten to `/index.html` with an HTTP `200` status.

This repository handles this in two ways:
1. **`netlify.toml`** at the project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
2. **`public/_redirects`**:
   ```text
   /*    /index.html   200
   ```
   Vite copies this file directly into `dist/` on build, ensuring SPA redirects work even with manual folder deployments.

---

## Project Structure

```text
DaptaFrontend/
|-- netlify.toml                    # Netlify build and redirect configuration
|-- public/                         # Static public assets served by Vite
|   |-- _redirects                  # Netlify SPA redirect rules (copied to dist)
|   |-- Images/
|   |-- ReportPDF/
|   |-- certificates/
|   |-- documents/
|   |-- icons.svg
|   |-- logo.png                    # Official DAPTA public logo & favicon source
|   |-- robots.txt                  # Search engine crawler instructions
|   `-- sitemap.xml                 # XML sitemap covering all 35 public routes
|-- scripts/
|   |-- generate-sitemap.js         # Configurable sitemap generator
|   `-- prerender.js                # Build-time static HTML & metadata prerenderer
|-- src/
|   |-- assets/                     # General bundled assets
|   |-- components/
|   |   |-- About/                  # About section pages and nested layout
|   |   |-- Activities/             # Activity and highlight pages
|   |   |-- Gallery/                # Photo and video gallery pages
|   |   |-- GetInvolved/            # Donation, partnership, volunteer pages
|   |   |-- Home/                   # Home page sections
|   |   |-- Legal/                  # Privacy policy and terms
|   |   |-- ReportsAndReflections/  # Reports, reflections, publications
|   |   |-- Contact.jsx             # Contact page
|   |   |-- Footer.jsx              # Footer component
|   |   |-- Layout.jsx              # Shared page wrapper with Navbar, Outlet, Footer
|   |   |-- Navbar.jsx              # Responsive navigation bar
|   |   `-- SEO.jsx                 # Client-side dynamic metadata synchronizer
|   |-- img/                        # Website image assets
|   |-- seo/
|   |   `-- routesSeo.js            # Central metadata dictionary for all public routes
|   |-- App.css
|   |-- App.jsx                     # Main route configuration
|   |-- entry-server.jsx            # Server entry for build-time static prerendering
|   |-- index.css
|   `-- main.jsx                    # React app entry point
|-- eslint.config.js                # ESLint configuration
|-- index.html                      # Vite HTML entry file with default OG & Schema
|-- package.json                    # Scripts and dependencies
|-- package-lock.json
|-- vite.config.js                  # Vite, React, and Tailwind plugin setup
`-- README.md
```

---

## SEO & Prerendering Architecture

1. **Pre-rendered Static HTML**:
   During `npm run build`, Vite builds the production bundle and an SSR bundle (`src/entry-server.jsx`), then `scripts/prerender.js` renders all 35 public routes into static HTML files under `dist/<route>/index.html`.
   - Social media and link-preview crawlers (Facebook, LinkedIn, Twitter/X, WhatsApp, Slack, Telegram) do not execute JavaScript; they receive fully rendered static HTML with page-specific titles, descriptions, and Open Graph / Twitter Card tags.
   - Search engines (Googlebot, Bingbot) get immediate full-text HTML content for fast indexation.

2. **Client-Side Metadata Synchronizer (`src/components/SEO.jsx`)**:
   When users navigate between pages within the React SPA, `<SEO />` in `Layout.jsx` dynamically updates `document.title` and meta tags using `src/seo/routesSeo.js`.

3. **Verified Organization Structured Data**:
   `index.html` embeds Schema.org JSON-LD structured data for the NGO using verified repository details (name, founding year 1989, headquarters in Bhawanipatna, phone, email, and social profiles).

4. **Sitemap & Robots**:
   - `public/robots.txt` instructs search crawlers on allowed paths and disallows private verification paths.
   - `scripts/generate-sitemap.js` generates `sitemap.xml` for all 35 public routes. Once the production domain is confirmed, run:
     ```bash
     node scripts/generate-sitemap.js https://<production-domain>
     ```

5. **Netlify Deployment Compatibility**:
   Netlify serves existing static pre-rendered route files first, falling back to `/index.html` via `netlify.toml` and `public/_redirects` for dynamic routes like `/verify/:token`.

---

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
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms & Conditions |

---

## Application Flow

1. `src/main.jsx` mounts the React app into `index.html`.
2. `BrowserRouter` enables client-side routing.
3. `src/App.jsx` defines the route tree.
4. `src/components/Layout.jsx` wraps all pages with the shared `Navbar`, dynamic `Outlet`, and `Footer`.
5. Page-specific components live under `src/components/` by website section.

---

## Development Notes

- Add new pages inside the relevant section folder under `src/components/`.
- Register new routes in `src/App.jsx`.
- Place reusable layout-level UI in `src/components/`.
- Place static assets in `public/` or imported assets in `src/assets/`.
- Keep route paths and navbar links in sync when adding or renaming pages.
