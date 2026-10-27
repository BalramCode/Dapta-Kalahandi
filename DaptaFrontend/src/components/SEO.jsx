// src/components/SEO.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteSeo, DEFAULT_SEO } from '../seo/routesSeo';

function setMetaTag(selector, attrName, attrValue, content) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const seo = getRouteSeo(location.pathname);
    const title = seo.title || DEFAULT_SEO.title;
    const description = seo.description || DEFAULT_SEO.description;
    const image = seo.image || DEFAULT_SEO.image;
    const ogType = seo.ogType || DEFAULT_SEO.ogType;

    // Document Title
    document.title = title;

    // Meta Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);

    // Twitter Cards
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);
  }, [location.pathname]);

  return null;
};

export default SEO;
