export const SITE_URL = 'https://www.apratim.tech';
export const SITE_NAME = 'Apratim Dutta';
export const DEFAULT_IMAGE = `${SITE_URL}/og.png`;

export const profileLinks = [
  'https://github.com/apru02',
  'https://www.linkedin.com/in/apru02/',
  'https://codeforces.com/profile/apru_02',
  'https://devpost.com/software/heshel-ai',
];

export const personSchema = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#apratim-dutta`,
  name: 'Apratim Dutta',
  url: SITE_URL,
  image: `${SITE_URL}/icons/512.png`,
  jobTitle: 'React Native and Full-Stack Developer',
  description:
    'Apratim Dutta is a React Native and full-stack developer in Kolkata, India, building production mobile apps, React web applications, APIs, and AI-assisted products.',
  homeLocation: {
    '@type': 'Place',
    name: 'Kolkata, West Bengal, India',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Indian Institute of Engineering Science and Technology, Shibpur',
    alternateName: 'IIEST Shibpur',
    url: 'https://www.iiests.ac.in/',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'SiteMaster',
    url: 'https://sitemaster.ai/',
  },
  knowsAbout: [
    'React Native',
    'React',
    'Expo',
    'JavaScript',
    'Node.js',
    'Django REST Framework',
    'FastAPI',
    'Mobile application development',
    'Web application development',
    'API integration',
  ],
  sameAs: profileLinks,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: 'Apratim Dutta Portfolio',
  description:
    'Portfolio and technical work of Apratim Dutta, a React Native and full-stack developer in Kolkata.',
  publisher: {
    '@id': `${SITE_URL}/#apratim-dutta`,
  },
  inLanguage: 'en-IN',
};

export const routeMetadata = {
  '/': {
    title: 'Apratim Dutta | React Native & Full-Stack Developer in Kolkata',
    description:
      'Apratim Dutta is a React Native and full-stack developer in Kolkata, building production mobile apps, React web apps, APIs, and AI products.',
    keywords: [
      'Apratim Dutta',
      'React Native developer Kolkata',
      'full-stack developer Kolkata',
      'mobile app developer Kolkata',
      'React developer Kolkata',
    ],
    schemaType: 'ProfilePage',
  },
  '/about': {
    title: 'About Apratim Dutta | Software Engineer & IIEST Shibpur Alumnus',
    description:
      'Meet Apratim Dutta, a Kolkata-based software engineer and IIEST Shibpur alumnus focused on React Native, React, APIs, and product engineering.',
    keywords: [
      'Apratim Dutta IIEST Shibpur',
      'IIEST Shibpur software engineer',
      'Apratim Dutta Kolkata',
      'developer from IIEST Shibpur',
    ],
    schemaType: 'ProfilePage',
  },
  '/projects': {
    title: 'React Native, Web & AI Projects | Apratim Dutta',
    description:
      'Explore production React Native, React, API, AI, payments, real-time messaging, and performance case studies by Apratim Dutta.',
    keywords: [
      'Apratim Dutta projects',
      'React Native portfolio Kolkata',
      'mobile app developer portfolio',
      'React developer projects',
    ],
    schemaType: 'CollectionPage',
  },
  '/resume': {
    title: 'Apratim Dutta Resume | React Native & Full-Stack Developer',
    description:
      'View or download Apratim Dutta’s latest software engineering resume covering React Native, React, backend APIs, AI products, and mobile delivery.',
    keywords: [
      'Apratim Dutta resume',
      'React Native developer resume',
      'full-stack developer Kolkata resume',
    ],
    noIndex: true,
    schemaType: 'WebPage',
  },
  '/react-native-developer-kolkata': {
    title: 'React Native Developer in Kolkata | Apratim Dutta',
    description:
      'Hire Apratim Dutta, a React Native developer in Kolkata building polished Android and iOS apps with Expo, APIs, payments, notifications, and real-time features.',
    keywords: [
      'React Native developer Kolkata',
      'freelance React Native developer Kolkata',
      'hire React Native developer Kolkata',
      'Expo developer Kolkata',
      'mobile app developer Kolkata',
      'cross-platform app developer Kolkata',
    ],
    schemaType: 'Service',
  },
  '/web-app-developer-kolkata': {
    title: 'Web App Developer in Kolkata | React & Full-Stack Development',
    description:
      'Work with Apratim Dutta, a web app developer in Kolkata building fast React interfaces, scalable APIs, real-time workflows, and AI-assisted products.',
    keywords: [
      'web developer Kolkata',
      'React developer Kolkata',
      'full-stack developer Kolkata',
      'web app developer Kolkata',
      'Node.js developer Kolkata',
      'Django REST developer Kolkata',
    ],
    schemaType: 'Service',
  },
  '/projects/sitemaster-react-native-case-study': {
    title: 'SiteMaster React Native Case Study | Apratim Dutta',
    description:
      'How Apratim Dutta shipped React Native, React, Django API, notification, deep-linking, Excel, and workflow improvements for SiteMaster.',
    keywords: [
      'React Native performance case study',
      'React Native push notifications developer',
      'React Native deep linking developer',
      'Django REST React developer',
    ],
    schemaType: 'CreativeWork',
  },
  '/projects/heshel-ai-mobile-app': {
    title: 'Heshel AI Mobile App Case Study | React Native & FastAPI',
    description:
      'A React Native and FastAPI AI product case study covering ingredient recognition, recipe extraction, PostgreSQL, Supabase, and RevenueCat.',
    keywords: [
      'AI mobile app developer',
      'React Native FastAPI developer',
      'RevenueCat React Native developer',
      'AI app case study',
    ],
    schemaType: 'CreativeWork',
  },
  '/projects/scaape-react-native-event-app': {
    title: 'Scaape React Native App Case Study | Firebase & Razorpay',
    description:
      'A production React Native event app case study featuring Expo, Firebase real-time messaging, Razorpay payments, animations, Android, and iOS.',
    keywords: [
      'Razorpay React Native developer',
      'Firebase React Native developer',
      'real-time mobile app developer',
      'Expo app case study',
    ],
    schemaType: 'CreativeWork',
  },
  '/projects/predictive-crime-analysis': {
    title: 'Predictive Crime Analysis Case Study | Apratim Dutta',
    description:
      'A data and machine-learning case study using 500,000+ records, Python, Power BI, TensorFlow, and scikit-learn to forecast crime risk.',
    keywords: [
      'predictive analytics case study',
      'Python machine learning portfolio',
      'Power BI crime analysis',
    ],
    schemaType: 'CreativeWork',
  },
};

export const indexableRoutes = Object.entries(routeMetadata)
  .filter(([, metadata]) => !metadata.noIndex)
  .map(([path]) => path);

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return `/${pathname.split('?')[0].split('#')[0].replace(/^\/|\/$/g, '')}`;
}

export function getRouteMetadata(pathname) {
  const normalizedPath = normalizePath(pathname);
  return routeMetadata[normalizedPath] || {
    title: `Page not found | ${SITE_NAME}`,
    description:
      'The requested page could not be found. Explore Apratim Dutta’s React Native, web, and full-stack engineering work.',
    noIndex: true,
    schemaType: 'WebPage',
  };
}

export function buildStructuredData(pathname) {
  const path = normalizePath(pathname);
  const metadata = getRouteMetadata(path);
  const pageUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
  const pageNode = {
    '@type': metadata.schemaType,
    '@id': `${pageUrl}#page`,
    url: pageUrl,
    name: metadata.title,
    description: metadata.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#apratim-dutta`,
    },
    inLanguage: 'en-IN',
  };

  if (metadata.schemaType === 'ProfilePage') {
    pageNode.mainEntity = {
      '@id': `${SITE_URL}/#apratim-dutta`,
    };
  }

  if (metadata.schemaType === 'Service') {
    pageNode.provider = {
      '@id': `${SITE_URL}/#apratim-dutta`,
    };
    pageNode.areaServed = [
      {
        '@type': 'City',
        name: 'Kolkata',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ];
  }

  if (metadata.schemaType === 'CreativeWork') {
    pageNode.creator = {
      '@id': `${SITE_URL}/#apratim-dutta`,
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [websiteSchema, personSchema, pageNode],
  };
}
