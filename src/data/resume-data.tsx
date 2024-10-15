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
  name: "DENİZ İNEÇ",
  initials: "DI",
  location: "Ataşehir, İstanbul",
  locationLink: "https://www.google.com/maps/place/Ataşehir",
  about:
    "Detail-oriented Full Stack Java Developer dedicated to building high-quality products.",
  summary:
    "I am a self-taught programmer with immense curiosity, not only a learner but also a lover of learning. I've been learning & coding Java through my education in university and I am very interested in them Java EE ecosystem. I'm a fast and self-learner. I can learn and complete tasks quickly with minimal supervision, even if I have no background. I love learning and using new technologies.So I focus on time-efficient and clean code and I follow best practices. I use the latest technologies and the latest versions of them. I can describe myself as a competitive person. I still seek knowledge and try to learn new stuff in every front. I love being solution-oriented.",
  avatarUrl: "",
  personalWebsiteUrl: "https://www.denizinec.com",
  contact: {
    email: "denizinec9@gmail.com",
    tel: "+905340771588",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/denizinec",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/denizinec/",
        icon: LinkedInIcon,
      },
      
    ],
  },
  education: [
    {
      school: "Trakya University",
      degree: "Bachelor's Degree in Computer Science and Information Systems / Computer Science.",
      description: "Due my school's needs, almost all my lectures were practical and less theoratical. I got plenthora of lectures about programming languages and their technologies.",
      gpa: "GPA: 3.1/4.0",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Medkem",
      link: "https://www.medkemtekstil.com/",
      badges: ["Avcılar, Istanbul"],
      title: "Software Developer Intern",
      start: "06/2023",
      location: "Sxd",
      end: "09/2023",
      description:
        "Implemented Python-based solutions for specific company needs in the textile industry." +
        " Built and maintained web applications utilizing Django and Rest Framework."
    },
    {
      company: "PALACE Entertainment",
      link: "https://www.palaceentertainment.com/",
      badges: ["Wisconsin, USA"],
      title: "Admissions",
      start: "06/2022",
      end: "09/2022",
      description:
        "Collaborated with a diverse team to manage high volumes of foot traffic, demonstrating strong communication, improved English and teamwork skills. IT maintenance.",
    },

  ],
  skills: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Python",
    "Django",
    "React/Next.js/Remix",
    "TypeScript",
    "JavaScript",
    "Agile",
    "GraphQL",
    "Git",
    "SQL",
    "Docker",
  ],
  skills2: [
    "Communication",
    "Problem-solving",
    "Stress Management",
    "Openness to criticism",
  ],
  language: [
    "English: Writing/C1 (Working Proficiency), Speaking/B2 (Advanced)",
    "Deutsch: A1 (Beginner)",
  ],
  
  projects: [
    {
      title: "Book Reviews",
      techStack: [
        "Full Stack",
        "TypeScript",
        "Spring Boot",
        "React",
        "0Auth",
      ],
      description:
        "Simple Book Review App using Spring Boot/ReactJS",
      link: {
        href: "https://github.com/denizinec/fullstack-springboot-react-app",
      },
    },
    {
      title: "Unit-Testing",
      techStack: [
        "Spring Boot",
        "Unit Testing",

      ],
      description:
        "Spring Boot, JUnit5, Mockito, AssertJ, JsonAssert, JsonPath",
      link: {
        href: "https://github.com/denizinec/unit-testing",
      },
    },
    {
      title: "WebSocket Chat App",
      techStack: [
        "Side Project",
        "JavaScript",
        "React",
        "Spring Boot",
      ],
      description: "A real-time chat application built with Spring Boot and WebSocket on the backend and React on the frontend.",
      link: {
        href: "https://github.com/denizinec/react-ws-springboot-chatapp",
      },
    },
    {
      title: "Job Portal",
      techStack: ["Side Project", "MVC","Java Spring Boot","Thymeleaf","MySQL"],
      description:
        "End-to-end Spring MVC, Thymeleaf, Spring Security, JPA, Hibernate and MySQL Project",
      link: {
        href: "https://github.com/denizinec/spring-mvc-job-search-app",
      },
    },
    {
      title: "bstakademi.com",
      techStack: ["School Project", "MVT","Django","Phyton","SQLite","JavaScript","Bootstrap"],
      description:
        "A project where students can upload their final theses and course projects and can be followed by the course instructor on a weekly basis.",
      link: {
        href: "https://github.com/denizinec/bstakademi-django",
      },
    },
  ],
} as const;
