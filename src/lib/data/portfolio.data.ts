import {ProjectItem} from "@lib/models/project.model";
import {PortfolioModel} from "@lib/models/portfolio.model";
import pic from '@images/my-pic.jpg';
import sparkPulse from '@images/spark-pulse.jpg';
import agrovet_bms from '@images/agrovet_bms.jpg';
import ecommerce from '@images/ecommerce.jpg';
import pos from '@images/pointitpos-dashboard.jpg';
import lunarAirtime from '@images/lunar-airtime.jpg';
import craftAutoFlow from '@images/craftautoflow.png';

export const portfolioData: PortfolioModel = {
    email: {
        address: 'isaacrichu399@gmail.com'
    },
    navbar: {
        about: 'About',
        experience: 'Experiences',
        projects: 'Projects',
        contact: 'Contact',
        resume: {
            name: 'Resume',
            link: '../../pf/resume.pdf'
        }
    },
    introduction: {
        title: 'Isaac Richu Karanja',
        subTitle: ['Founder @ Nexavalan Tech Solutions', 'I Am A FullStack Developer', 'I Am Frontend Developer', 'I Am A Backend Developer', 'I Am An Ethical Hacker'],
        content: "I'm a Founder of Nexavalan Tech Solutions. Primarily interested in Web Development, Mobile Development, and Cyber Security. I enjoy building real-world SaaS products, cross-platform apps, and scalable digital solutions!",
        button: 'Get In Touch',
        button_link: 'mailto:isaacrichu399@gmail.com'
    },
    about: {
        title: 'About Me',
        content: getAboutContent(),
        activities: ['Coding', 'Problem Solving', 'Mentoring', 'Crafting', 'Team Management', 'Reading'],
        image: pic
    },
    experience: {
        title: "Where've Worked",
        experience_list: getExperiences(),
        content: "<h1>Home</h1>",
    },
    projects: {
        title: "Some Things I've Built",
        list: getProjects(),
        priority: 5,
        showButton: 'Show More',
    },
    contact: {
        title: "What's next?",
        subTitle: 'Get In Touch',
        content: "My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.",
        button: {
            name: 'Mail Me',
            link: 'mailto:isaacrichu399@gmail.com'
        },
        socials: {
            linkedIn: 'https://www.linkedin.com/in/isaac-richu-ba07a42b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            twitter: 'https://twiter.com',
            instagram: 'https://instagram.com/isaaczack8/',
            github: 'https://github.com/AvalanEngineer',
        }
    },
    footer: {
        content: 'Designed & Built by Isaac Richu Karanja +254793540705'
    }
};

function getProjects(): ProjectItem[] {
    const projects: ProjectItem[] = [];
    projects.push(new ProjectItem(
        'PointIt POS SaaS Platform',
        'Featured Project',
        "Developed a multi-tenant Point of Sale (POS) SaaS system equipped with robust offline capability ensuring uninterrupted sales processing during network outages. Built with Next.js on the frontend and Java Spring Boot on the backend.",
        ['Next.js', 'Java Spring Boot', 'SaaS', 'Offline First'],
        'https://github.com/AvalanEngineer',
        'https://pointitpos.com',
        pos,
        'web'
    ));
    projects.push(new ProjectItem(
        'Craft Auto Flow',
        'Featured Project',
        "Developed a platform where digital creators monetize their talent and automate content creation workflows. Built using Next.js for the user interface and Spring Boot for backend microservices.",
        ['Next.js', 'Java Spring Boot', 'Tailwind CSS'],
        'https://github.com/AvalanEngineer',
        'https://craftautoflow.com',
        craftAutoFlow,
        'web'
    ));
    projects.push(new ProjectItem(
        'Lunar Airtime',
        'Featured Project',
        "Built a fintech mobile solution that enables seamless conversion of airtime to cash while offering discounted mobile data bundles to users.",
        ['Kotlin', 'Java Spring Boot', 'Fintech'],
        'https://github.com/AvalanEngineer',
        'https://play.google.com/store/apps/details?id=com.lunartech.lunarairtime&hl=en&pli=1',
        lunarAirtime,
        'app'
    ));
    projects.push(new ProjectItem(
        'Music Player and Downloader Mobile Application',
        'Featured Project',
        "Leveraged multithreading in Flutter to enhance user experience without blocking the main thread.Implemented AI-based search to improve search efficiency and productivity.Designed an intuitive, user-friendly interface.Applied Component-Based Software Engineering principles for reusable and maintainable code.",
        ['java', 'java spring boot (backend)'],
        'https://avalanengineer.github.io/spark_pulse/',
        'https://drive.google.com/file/d/1-3twUlC6itVnX_b89QqQ5-ibC0w9XPue/view?usp=drivesdk',
        sparkPulse,
        'app'
    ));
    projects.push(new ProjectItem(
        'Agrovet Business Management System Mobile Application',
        'Featured Project',
        "Leveraged Real time updates to enhance accuracy of the solds products and available products, also applied aysnchronous execution to improve user experience without blocking the main thread.Implemented AI-based search to improve search efficiency and productivity.Designed an intuitive, user-friendly interface.Structured the app in a way that will be easy to maintain the code.",
        ['flutter', 'java spring boot (backend)'],
        'https://github.com/flutter',
        'https://drive.google.com/file/d/183jGf9_TugIInF25FjkPazEIt7mmOPmr/view?usp=drivesdk',
        agrovet_bms,
        'app'
    ));
    projects.push(new ProjectItem(
        'E-commerce Mobile Application',
        'Featured Project',
        "Built using Flutter (Dart) for the frontend and Spring Boot (Java) for the backend.Integrated user authentication, CORS configuration, and geolocation-based delivery cost estimation.Enhanced efficiency with optimized search, pagination, and AI-driven user queries.Ensured data security through encryption and customized an M-Pesa payment gateway.Applied data analysis for personalized user experiences.",
        ['futter(dart) -frontend', 'Java SpringBoot -backend', 'PostgressSQL'],
        'https://github.com',
        'https://drive.google.com/file/d/1-7Pg_TGpeEgBFVpzMTCpoqTvGPUQiVKF/view?usp=drivesdk',
        ecommerce,
        'app'
    ));
    projects.push(new ProjectItem(
        'Eboard Management App',
        'Featured Project',
        "Co-developed an enterprise board and meeting management solution streamlining corporate governance, meeting scheduling, and document management across platforms.",
        ['Kotlin Multiplatform (KMP)', 'NestJS', 'TypeScript'],
        'https://github.com/AvalanEngineer',
        'https://github.com/AvalanEngineer',
        ecommerce,
        'app'
    ));
    return projects;
}

function getAboutContent(): string[] {
    return [
        "Hello! I'm Isaac Richu Karanja, from Nakuru, Kenya, renowned for its vibrant culture, diverse economy, and beautiful landscapes.",
        "I am the founder of Nexavalan Tech Solutions, an enterprise tech firm dedicated to building high-impact software products.",
        "I am a creative, punctual, dedicated, and goal-oriented software engineer with strong moral values, excellent communication skills, and meticulous attention to detail.",
        "I am pursuing my Bachelor of Science in Software Engineering from Kirinyaga University.",
        "I am an active member of the Mobile Development Student Club at Kirinyaga University.",
        "Here are a few of the other activities that I love to do!"
    ];
}

function getExperiences(): {
    tab: string;
    content: {
        title: string;
        subTitle: string;
        paragraphs: string[];
    };
}[] {
    return [
        {
            tab: 'Nexavalan Tech Solutions',
            content: {
                title: 'Nexavalan Tech Solutions',
                subTitle: 'Founder & Lead Software Engineer',
                paragraphs: [
                    '2025 - Present',
                    "Founded and led Nexavalan Tech Solutions, an enterprise technology software startup.",
                    "Architected and deployed PointIt POS SaaS platform featuring offline-first capability using Next.js and Spring Boot.",
                    "Engineered Craft Auto Flow to empower digital creators with talent monetization and workflow automation.",
                    "Developed Lunar Airtime fintech utilities and co-engineered cross-platform corporate applications like the Eboard Management app."
                ],
            },
        },
        {
            tab: 'Thales Software LTD',
            content: {
                title: 'Thales Software LTD',
                subTitle: 'Attache, Mobile Development (flutter)',
                paragraphs: [
                    'June 2024 - August 2024',
                    "Directed and shaped a backend structure of an employee management system",
                    "Developed UI design using plain XML code applying interactive designs.",
                    "Helped in designing and deployed 2 e-learning portals, and 2 e-commerce platforms using Bootstrap.",
                    "Modeled a Learning Management System during a 2-month coding attachment"
                ],
            },
        },
        {
            tab: 'Kirinyaga University',
            content: {
                title: 'Kirinyaga University',
                subTitle: 'Mobile Development Club member',
                paragraphs: [
                    'June 2023 - April 2026',
                    "Promoted Team Unity",
                    "Create presentations on hot topics like AI in mobile apps, augmented reality, or responsive design, which could spark discussions and inspire new ideas.",
                    "Mentor and Support New Members",
                    "Organize members into small teams to tackle different aspects of a project, such as front-end development, backend integration, and testing.",
                    "Building an online presence can attract new members and create a lasting digital portfolio for the club.",
                ],
            },
        },
    ];
}