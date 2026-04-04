import crimeAnalysisCard from '../assets/projects/crime-analysis-card.svg';
import heshelCard from '../assets/projects/heshel-card.svg';
import scaapeCard from '../assets/projects/scaape-card.svg';
import siteMasterCard from '../assets/projects/sitemaster-card.svg';

const placeholder =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==';

const data = [
  {
    id: '1',
    title: 'SiteMaster - Construction & Interior Project Management Platform',
    tagline: 'Full-stack product engineering',
    role: 'Software Engineer | Jul 2025 - Present',
    description:
      'Built end-to-end workflows across frontend and backend for field teams handling updates, approvals, procurement, and operational data at scale.',
    impact:
      'Improved module load times by 35%, streamlined bulk Excel-based workflows, and designed scalable backend APIs for procurement and design management operations.',
    summary:
      'At SiteMaster, I work across mobile, web, and backend systems to support real-time construction and field operations workflows. My focus has been on building reliable user flows, scalable APIs, faster data-heavy modules, and automation features that reduce manual effort for teams on the ground and vendors.',
    highlights: [
      'Developed cross platform mobile application using React Native and Expo. Shipped to both Play Store and Apple App Store.',
      'Developed push notification handling, deep linking, and background event processing for real-time project updates.',
      'Engineered Excel upload and download workflows with validation for materials, tasks, personnel, and financial records.',
      'Designed and developed REST APIs using Django REST Framework for procurement and design management workflows.',
      'Integrated WhatsApp Business API for automated RFQ invitations and purchase order receipt generation for vendors.',
      'Led peer code reviews and mentored 4 junior developers while collaborating across a 5-person engineering team.',
    ],
    image: {
      src: siteMasterCard,
      placeholderSrc: placeholder,
    },
    links: {
      site: 'https://sitemaster.ai',
    },
    technologies: [
      '#react-native',
      '#react',
      '#django-rest-framework',
      '#react-query',
      '#excel workflows',
      '#deep linking',
      '#push notifications',
      '#api design',
      '#whatsapp-business-api',
      '#workflow automation',
    ],
  },
  {
    id: '2',
    title: 'Heshel AI',
    tagline: 'AI-powered cooking companion',
    role: 'Product project | 2026',
    description:
      'Turned saved food inspiration into actionable meal decisions with ingredient detection, recipe parsing, and swipe-based recommendations.',
    impact:
      'Combined AI pipelines, subscriptions, and a polished React Native UX into a consumer product concept.',
    summary:
      'Heshel AI explores how AI can make everyday cooking decisions simpler. I worked on the product from the mobile experience through the backend pipelines that transform messy food inspiration into structured, usable recommendations.',
    highlights: [
      'Built Python and FastAPI pipelines for ingredient detection, recipe parsing, and normalization across cuisines.',
      'Designed swipe-based recommendation flows that account for pantry items, dietary preferences, and missing ingredients.',
      'Integrated RevenueCat subscriptions with a React Native frontend backed by PostgreSQL and Supabase.',
    ],
    image: {
      src: heshelCard,
      placeholderSrc: placeholder,
    },
    links: {
      project: 'https://devpost.com/software/heshel-ai',
      testflight: 'https://testflight.apple.com/join/uqrK3Jxy',
      repo:'https://github.com/Smran-app/rork-heshel-ai-app'
    },
    technologies: [
      '#react-native',
      '#fastapi',
      '#python',
      '#postgresql',
      '#supabase',
      '#revenuecat',
    ],
  },
  {
    id: '3',
    title: 'Scaape Event Platform',
    tagline: 'Social event discovery app',
    role: 'Mobile product | Jan 2025 - Apr 2025',
    description:
      'Built a location-aware mobile app that helps users discover local activities, join seamlessly, and chat in real time.',
    impact:
      'Firebase based real-time messaging, and animated mobile flows from polished Figma designs.',
    summary:
      'Scaape was built as a cross-platform mobile app for social event discovery. The product combined discovery, payments, messaging, and premium-feeling UX patterns in one mobile-first experience.',
    highlights: [
      'Developed the app with React Native and Expo for Android and iOS.',
      'Integrated Razorpay for secure event transactions and Firebase RTDB for real-time group messaging.',
      'Implemented responsive UI components, custom animations, and gesture-based navigation from Figma specs.',
    ],
    image: {
      src: scaapeCard,
      placeholderSrc: placeholder,
    },
    links: {
      site: 'https://scaape.app',
      playstore:'https://play.google.com/store/apps/details?id=com.scaape.app',
      appstore:'https://apps.apple.com/in/app/scaape/id6745342417'
    },
    technologies: [
      '#react-native',
      '#expo',
      '#firebase',
      '#razorpay',
      '#realtime messaging',
      '#animations',
    ],
  },
  {
    id: '4',
    title: 'Predictive Crime Analysis',
    tagline: 'Data and machine learning case study',
    role: 'Datathon project | 2024',
    description:
      'Analyzed 500k+ records to surface crime patterns and forecast high-risk periods for smarter operational planning.',
    impact:
      'Produced 15+ actionable insights and a predictive model for hourly crime risk forecasting.',
    summary:
      'This project combined exploratory data analysis, visualization, and machine learning to understand crime behavior at scale. The goal was to turn raw public data into clearer operational signals for deployment planning.',
    highlights: [
      'Processed 500k+ records with Python and Power BI to uncover spatial and socio-economic crime patterns.',
      'Delivered 15+ insights spanning crime types, demographics, and temporal trends.',
      'Built a machine learning model to predict hourly crime rates and highlight high-risk periods.',
    ],
    image: {
      src: crimeAnalysisCard,
      placeholderSrc: placeholder,
    },
    links: {
      project: 'https://www.youtube.com/watch?v=HqCY7XO_fow',
      repo: 'https://github.com/apru02/KSP_FRONTEND',
    },
    technologies: [
      '#python',
      '#power-bi',
      '#machine learning',
      '#data analysis',
      '#tensorflow',
      '#scikit-learn',
    ],
  },
];

export default data;
