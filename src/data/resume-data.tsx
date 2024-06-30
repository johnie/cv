import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Johnie Hjelm",
  initials: "JH",
  location: "Solna, Stockholm, Sweden",
  locationLink: "https://www.google.com/maps/place/Solna,+Stockholm,+Sweden",
  about: "Committed to developing individuals and teams for success.",
  summary:
    "Results-driven professional with a track record of success in leading innovative projects and building high-performance, diverse teams. Expertise in fostering inclusive work environments, driving innovation, and implementing effective project management strategies. Passionate about creating positive impact through meaningful change and advancing diversity initiatives. Seeking opportunities to leverage my skills in [specific industry/role] to contribute to organizational growth and societal progress.",
  avatarUrl: "https://avatars.githubusercontent.com/u/864992?v=4",
  personalWebsiteUrl: "https://johnie.se",
  contact: {
    email: "johnie@hjelm.im",
    tel: "0735127321",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/johnie",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/johniehjelm",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/johniehjelm",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Arlandagymnasiet",
      degree:
        "IT, Web Page, Digital/Multimedia, and Information Resources Design",
      start: "2008",
      end: "2011",
    },
  ],
  work: [
    {
      company: "SEB",
      link: "https://seb.se",
      badges: ["Hybrid"],
      title: "Senior Fullstack Developer",
      start: "November 2023",
      end: null,
      description:
        "Designing, developing, and maintaining an advanced self-service portal for ordering monitoring on systems for the bank's IT infrastructure and applications. Contributing to team improvement and developer experience, including Scrum Master duties.",
    },
    {
      company: "Wired In",
      link: "https://johnie.se",
      badges: ["Remote"],
      title: "Founder",
      start: "October 2007",
      end: null,
      description:
        "A versatile role across graphic and digital design, front and backend development, product management, strategic planning, and API design.",
    },
    {
      company: "Bambuser",
      link: "https://bambuser.com",
      badges: ["Remote"],
      title: "Technical Lead Manager",
      start: "January 2021",
      end: "November 2023",
      description:
        "Managing a team of engineers and designers, focusing on creating an inclusive work environment and enhancing live video solutions.",
    },
    {
      company: "Crip in Tech",
      link: "https://crip.io",
      badges: ["Remote"],
      title: "Co-founder",
      start: "May 2018",
      end: null,
      description:
        "Building websites, creating videos, producing podcasts, and developing applications with a focus on fostering an inclusive environment and bridging the digital divide.",
    },
    {
      company: "William Hill",
      link: "https://williamhill.com",
      badges: ["On-site"],
      title: "Fullstack Developer & Tech Lead in Team Green Gaming",
      start: "Mar 2018",
      end: "November 2020",
      description:
        "Enhancing Green Gaming tools, compliance management, and overseeing site maintenance and enhancement.",
    },
    {
      company: "Cloud Nine AB",
      link: "https://cloudnine.com",
      badges: [],
      title: "Fullstack Developer",
      start: "September 2016",
      end: "February 2018",
      description:
        "Tech Lead for multiple projects, focusing on frontend and backend development, React Native app creation, and microservices development.",
    },
    {
      company: "Symbio",
      link: "https://symbio.com",
      badges: [],
      title: "Software Engineer",
      start: "August 2013",
      end: "August 2016",
      description:
        "Developing client projects using WordPress and React technology stack.",
    },
  ],
  skills: [
    "Google Cloud Platform (GCP)",
    "AWS",
    "Supabase",
    "Firebase",
    "Openshift",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "GraphQL",
    "RESTful APIs",
    "PHP",
    "Golang",
    "Microservices Architecture",
    "SQL/NoSQL Databases",
    "Redis",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Cloud Computing",
    "HTML5",
    "CSS3",
    "Testing Libraries (Jest, Mocha, Chai)",
    "TDD/BDD",
    "Agile Methodologies",
    "UX/UI Design",
    "Adobe Creative Suite",
    "Figma",
  ],
  projects: [
    {
      title: "Crip in Tech",
      techStack: ["Co-founder", "React.js", "Firebase"],
      description:
        "Building websites, creating videos, producing podcasts, and developing applications with a focus on fostering an inclusive environment and bridging the digital divide.",
      link: {
        label: "crip.io",
        href: "https://crip.io/",
      },
    },
  ],
} as const;
