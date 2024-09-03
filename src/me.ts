import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaReact,
  FaAws,
  FaGit
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiPython,
  SiTypescript,
  SiMongodb,
  SiDjango
} from "react-icons/si";

import { IMe } from "./me.interface";

export const me = {
  name: "Akanksha Pawar",
  subtitle: "Full-stack & Front-End Developer",
  tagline:
    "I am a software developer who loves to build fun high quality experiences and continuously learn new things.",
  bigHeading: {
    black: "I make things",
    blue: "for the web",
  },
  about:
    "Experienced software developer with 3+ years in full-stack and frontend development. Skilled in React, Django, Node.js, JavaScript, TypeScript, Redux, HTML, CSS and AWS for building user-friendly web applications.",
  location: "Boston, MA",
  image: "/assets/portfolio.png",
  education: [
    {
      degree: "Masters of Science",
      major: "Computer Science",
      school: "Worcester Polyechnic Institute",
      graduation: "May 2024",
    },
    {
      degree: "Bachelor of Engineering",
      major: "Computer Engineering",
      school: "Savitribai Phule Pune University",
      graduation: "May 2021",
    },
  ],
  experience: [
    {
      company: "ProsperOn",
      location: "Boston, MA",
      position: "Frontend Developer",
      duration: "Feb 2024 - Present",
      bullets: [
        "Collaborated with 2 cross-functional teams to build a web app with React, TypeScript, and Material UI",
        "Created 30+ interfaces that improved user experience and ensured responsiveness across various screen sizes",
        "Integrated 15+ UIs with new RESTful APIs, enhancing data interaction, ensuring seamless backend connectivity",
        "Implemented React Hooks and Redux for efficient state management, and React Router for client-side routing",
        "Enhanced website performance by optimizing code and implementing lazy loading, resulting in a 20% reduction in page load times and a 15% increase in user satisfaction"
      ],
    },
    {
      company: "Ithaca Clean Energy",
      location: "Fairhaven, MA",
      position: "Application Developer Intern",
      duration: "Jun 2023 - May 2024",
      bullets: [
        "Collaborated with a team of 5 developers to build and maintain a dashboard for offshore wind developers using React, Node.js, JavaScript, AWS, and REST APIs",
        "Implemented secure user sign-in using OAuth 2.0 and JWT, ensuring proper authentication across the platform",
        "Enhanced the Android app’s UX by identifying bugs and using Kotlin for development and maintenance",
        "Ensured Android and iOS mobile app stability through rigorous testing and QA, resulting in a 96% satisfaction rate",
      ],
    },
    {
      company: "Worcester Polytechnic Institute",
      location: "Worcester, MA",
      position: "Research Assistant",
      duration: "Spring 2023",
      bullets: [
        "Led a project to automate the scoring of algorithm questions using advanced natural language processing (NLP) techniques",
        "Developed an automated scoring system, improving assessment accuracy and providing constructive feedback to students",
        "Increased scoring accuracy to 78%, significantly enhancing the reliability of algorithm question evaluations",
      ],
    },
    {
      company: "Accenture",
      location: "Pune, India",
      position: "Associate Software Engineer",
      duration: "Sep 2021 - Aug 2022",
      bullets: [
        "Collaborated with a team of 4 to maintain and enhance an internal tool using React and JavaScript, resulting in  improved user experience and increased system efficiency",
        "Assisted in migrating legacy code from jQuery to React, reducing technical debt and improving maintainability",
        "Conducted code reviews and unit testing, ensuring system stability and reducing defects by 15%",
        "Optimized system performance by 20% through MySQL query enhancements, resulting in faster data retrieval",
      ],
    },
    {
      company: "LinkCode Technologies",
      location: "Pune, India",
      position: "Fullstack Developer Intern",
      duration: "Feb 2021 – Aug 2021",
      bullets: [
        "Built and deployed a full-stack quiz application using Django/React for Computer Science students",
        "Designed 10+ wireframes and frontend screens with Figma, resulting in an intuitive, user-friendly interface",
        "Utilized MySQL for data management and enabled students to save quiz progress and review performance",
        "Integrated AWS, including EC2 hosting and S3 for managing static assets, enhancing the application’s scalability",
      ],
    },
  ],
  projects: [
    {
      name: "3D Robot Arm Manipulator ",
      description:
        "A robotic arm manipulator with 2 degrees of freedom, allowing users to manipulate the robot’s angles",
      contribution:
        "Created a dynamic and interactive 3D interface. Provided a user-friendly interface for controlling the robot arms in a virtual environment, showcasing precise angle manipulation and real-time visual feedback",
      technologies: [
        "ThreeJS",
        "React",
        "JavaScript",
        "NodeJS",
      ],
      links: [
        {
          name: "Website",
          uri: "https://akankshapawar1.github.io/mowito-assessment/",
        },
        {
          name: "Github",
          uri: "https://github.com/akankshapawar1/mowito-assessment",
        },
      ],
      image: "/assets/robotArm.png",
    },
    {
      name: "Consignment Shop",
      description:
        "An application for listing and purchasing computers",
      contribution:
        "Engineered the backend to interact with front-end. Integrated Store owner, Site Manager, Customer view, and implemented authentication.",
      technologies: [
        "Node.js",
        "JavaScript",
        "React",
        "Material UI",
        "AWS RDS",
        "AWS Lambda",
        "Amazon API Gateway",
      ],
      links: [
        {
          name: "Github",
          uri: "https://github.com/akankshapawar1/ConsignmentShop",
        },
      ],
      image: "/assets/ConsignmentStore.png",
    },
    {
      name: "2X2 Madness",
      description:
        "A Board Game",
      contribution:
        "Enabled players to clear the board by selecting and rotating color groups in one of three configurations",
      technologies: ["Node.js", "React", "JavaScript"],
      links: [
        {
          name: "Website",
          uri: "https://akankshapawar1.github.io/2X2Madness/",
        },
        {
          name: "Github",
          uri: "https://github.com/akankshapawar1/2X2Madness",
        },
      ],
      image: "/assets/2_2.png",
    },
    {
      name: "AnimeFlix",
      description:
        "Anime recommendor",
      contribution:
        "Designed the frontend. Trained the collaborative filtering model for recommendation. Linked frontend and backend.",
      image: "/assets/anime.png",
      technologies: ["React", "Django", "Python", "Flask", "PyTorch"],
      links: [
        {
          name: "Github",
          uri: "https://github.com/akankshapawar1/AnimeFlix",
        },
      ],
    },
    {
      name: "GoatSafe",
      description: "Medical Emergency Automated Notification System",
      contribution:
        "Used android's accelerometer to detect falls. Used GPS location to determine if user has entered an emergency room. Setup firebase database to store user's medical history.",
      technologies: ["Kotlin", 'Firebase'],
      links: [
        {
          name: "Github",
          uri: "https://github.com/akankshapawar1/Goat_Safe",
        },
      ],
      image: "/assets/Android_robot.png",
    },
    {
      name: "Online Bookstore Management System",
      description: "An application for listing and purchasing computers",
      contribution:
        "Designed and linked the database. Build the backend from scratch. Implemented stored procedures and optimized queries.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Amazon RDS", "Amazon QuickBase"],
      links: [
        {
          name: "Github",
          uri: "https://github.com/akankshapawar1/Online-BookStore",
        },
      ],
      image: "/assets/Php.png",
    },
  ],
  skills: [
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name:'Django',
      icon:SiDjango
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
    {
      name:"MongoDB",
      icon:SiMongodb,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name:"Git",
      icon:FaGit
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "AkankshaPawar.pdf",
      hover: {
        bg: ["red.500", "red.600"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/akankshapawar1",
      hover: {
        bg: ["gray.900", "gray.600"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/akankshapawar242/",
      hover: {
        bg: ["blue.400", "blue.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "akankshapawar42@gmail.com",
  },
} as IMe;
