interface SocialMedia {
  name: string;
  url: string;
}

interface NavLink {
  name: string;
  url: string;
}

interface Colors {
  green: string;
  navy: string;
  darkNavy: string;
}

interface ScrollRevealConfig {
  origin: string;
  distance: string;
  duration: number;
  delay: number;
  rotate: { x: number; y: number; z: number };
  opacity: number;
  scale: number;
  easing: string;
  mobile: boolean;
  reset: boolean;
  useDelay: string;
  viewFactor: number;
  viewOffset: { top: number; right: number; bottom: number; left: number };
}

interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  siteKeywords: string;
  siteUrl: string;
  siteLanguage: string;
  googleAnalyticsID: string;
  googleVerification: string;
  name: string;
  location: string;
  email: string;
  github: string;
  twitterHandle: string;
  socialMedia: SocialMedia[];
  navLinks: NavLink[];
  navHeight: number;
  colors: Colors;
  srConfig: (delay?: number) => ScrollRevealConfig;
}

const config: SiteConfig = {
  siteTitle: 'Isaac Richu Karanja',
  siteDescription:
      'Isaac Richu Karanja is a Software Engineer and Founder of Nexavalan Tech Solutions, based in Kenya, dedicated to building scalable Web & Mobile applications.',
  siteKeywords:
      'Isaac Richu Karanja, Isaac Richu, software engineer, fullstack developer, web developer, mobile developer, Nexavalan Tech Solutions, PointIt POS, Kenya, Flutter, Spring Boot, Next.js',
  siteUrl: 'https://avalanengineer.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Isaac Richu Karanja',
  location: 'Nakuru, Kenya',
  email: 'isaacrichu399@gmail.com',
  github: 'https://github.com/AvalanEngineer',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AvalanEngineer',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/isaac-richu-ba07a42b5',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/isaaczack8/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  navHeight: 100,
  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },
  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export default config;