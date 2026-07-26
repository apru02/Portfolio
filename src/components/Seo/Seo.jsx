import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_IMAGE,
  SITE_URL,
  buildStructuredData,
  getRouteMetadata,
  normalizePath,
} from '../../seo/siteMetadata.mjs';

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
};

const Seo = () => {
  const location = useLocation();

  useEffect(() => {
    const path = normalizePath(location.pathname);
    const metadata = getRouteMetadata(path);
    const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`;

    document.title = metadata.title;
    setMeta('meta[name="description"]', {
      name: 'description',
      content: metadata.description,
    });
    setMeta('meta[name="robots"]', {
      name: 'robots',
      content: metadata.noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large',
    });
    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: metadata.title,
    });
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.description,
    });
    setMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    setMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: DEFAULT_IMAGE,
    });
    setMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    setMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: metadata.title,
    });
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.description,
    });
    setMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: DEFAULT_IMAGE,
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let schema = document.head.querySelector(
      'script[data-seo-structured-data]',
    );
    if (!schema) {
      schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.dataset.seoStructuredData = 'true';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(buildStructuredData(path));
  }, [location.pathname]);

  return null;
};

export default Seo;
