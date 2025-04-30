import { color } from "framer-motion";
import {
  aws,
  express,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  firebase,
  meta,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  metamask,
  gitub,
  socialmedia,
  whatsapp,
  gossipapp,
  github,
  linkedin,
  insta,
  twitter,
  oscode,
  Saathi,
  nokia,
  samiksha,
  pathik,
  nth,
  harsh,
  photoshop,
  erpapp,
  paraTalks,
  chaitanya,
  sayanatan,
  yash,
  bewell,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "React-Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "git",
    icon: gitub,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "flutter",
    icon: flutter,
  },

];

const experiences = [
  {
    title: "Web Developer",
    company_name: "CodeClause",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Developed and deployed a portfolio, blogging app, URL shortener, and Note-taking Application using HTML, CSS, JavaScript, MongoDB, Node.js, and Render.",
      "Experienced with front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and MongoDB.",
      "Gained hands-on experience in fully integrating front-end and back-end systems, ensuring real-time content updates for live users."

    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Haughty Innovations",
    icon: tesla,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Developed responsive web applications using HTML, CSS, and React.js, ensuring consistent performance across all devices and screen sizes",
      "Built cross-platform mobile applications with React Native, delivering seamless user experiences on both Android and iOS platforms.",
      "Designed and implemented reusable React components with Hooks to create dynamic, high-performance user interfaces."
    ]
  },
  {
    title: "Software Developer",
    company_name: "OSCode",
    icon: oscode,
    iconBg: "#E6DEDD",
    date: "August 2023 - June 2024",
    points: [
     "Led backend development for a school management desktop app and educational mobile app using TypeScript, enhancing reliability and reducing load time by 40% for 1,500+ users",
     "Developed real-time PDF generation in the backend, creating dynamic templates that automatically populate with live data via API calls.",
     "Configured and deployed a backend project on AWS EC2, utilizing PM2 for process management and service monitoring.",
     "Configured and deployed Nginx as a reverse proxy for load balancing, multi-route traffic handling, and static file serving, improving performance",
    ],
  },
  {
    title: "Backend Mentor/Developer",
    company_name: "Nth Space Solutions",
    icon: nth,
    iconBg: "#E6DEDD",
    date: "February 2024 - April 2024",
    points: [
      "Mentored developers on backend development using Node.js, Express, and database management techniques.",
      "Provided guidance on route handling, authentication strategies, and implementing secure REST APIs.",
      "Taught best practices for database schema design, real-time updates, and optimizing backend performance."
    ]
  },
  {
    title: "Backend Developer",
    company_name: "ParaTalks",
    icon: paraTalks,
    iconBg: "#383E56",
    date: "June 2024 - September",
    points: [
      "Architected and developed backend services for Para Expert and User apps, ensuring robust and scalable solutions for seamless cross-platform functionality.",
      "Managed AWS infrastructure, including EC2 instances, S3 buckets, and containerization, optimizing storage, scalability, and deployment for both the app and admin dashboard.",
      "Developed a RESTful API backend using Node.js, Express, and TypeScript, enabling smooth integration across Android and iOS platforms",
      "Implemented real-time features like an automated mailing system, live notifications, and a backend queue system to boost performance and user engagement."
    ]

  },
  {
    title: "Software Developer",
    company_name: "Saathi",
    icon: Saathi,
    iconBg: "#383E56",
    date: "November 2024 - current",
    points: [
      "Designed and deployed two enhanced versions of the Sathi App using Flutter, optimizing the Trip Planner feature by improving trip logic, increasing app performance, and reducing unnecessary API calls.",
      "Led the end-to-end deployment process for both Play Store and App Store, ensuring seamless releases and enhanced app stability across Android and iOS.",
      "Developed V1 of an AI-powered Travel Research Assistant using React, Flask, and Node.js, enabling smart itinerary generation with an intelligent AI assistant for personalized travel planning."
    ]

  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "Working with Ganesh was a pleasure. His quick understanding and agile execution ensured smooth project delivery and high-quality results.",
  //   name: "Chaitanya Pandit",
  //   designation: "Founders office",
  //   company: "Jericho Ventures",
  //   image: chaitanya,
  //   linkedin: "https://www.linkedin.com/in/chaitanya-pandit-mumbai/"
  // },
  {
    testimonial:
      "Impressed by Amar's dedication and strong determination to deliver quality work, which ensured the project met all expectations.",
    name: "Yash Rajan Shukla",
    designation: "CTO",
    company: "ParaTalks",
    image: yash,
    linkedin: "https://www.linkedin.com/in/yash-rajan-shukla-269476154/"
  },
  // {
  //   testimonial:
  //     "Ganesh effectively delivered the website on time, meeting our regulatory needs and setting the stage for future expansion.",
  //   name: "Sayantan Datta",
  //   designation: "Co-founder",
  //   company: "Bsides Kolkata",
  //   image: sayanatan,
  //   linkedin: "https://www.linkedin.com/in/sayantan/"
  // },
  // {
  //   testimonial:
  //     "Throughout their internship, Ganesh's proficiency in web development shone brightly, delivering high-quality code with precision and creativity.",
  //   name: "Samiksha Taru",
  //   designation: "Founder",
  //   company: "HaraayDesignStudio",
  //   image: samiksha,
  //   linkedin: "https://www.linkedin.com/in/samiksha-taru-8393621a1/"
  // },
  // {
  //   testimonial:
  //     "Ganesh demonstrated exceptional teamwork and adaptability, making valuable contributions to our projects throughout their internship.",
  //   name: "Pathik Patel",
  //   designation: "Senior Software Developer",
  //   company: "GT Pvt. Ltd",
  //   image: pathik,
  //   linkedin: "https://www.linkedin.com/in/pathik-patel-in/"
  // },
  {
    testimonial:
      "As a Software intern, Amar consistently demonstrated their knack for problem-solving and innovative solutions, enhancing our team's productivity",
    name: "Harsh Kumar",
    designation: "Co-founder",
    company: "OSCode",
    image: harsh,
  },
];

const projects = [
  {
    name: "School Management System",
    description:
      "Used by hundreds of teachers and students, our School Management System simplifies academic tasks. Teachers manage attendance, assignments, and exams, while students track attendance, view results, access learning materials and more.",
    tags: [
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "text-orange-500",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
      {
        name: "MongoDB",
        color: "red-text-gradient"
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient"
      },
      {
        name: "AWS EC2",
        color: "text-purple-500"
      },
      {
        name: "GoDaddy",
        color: "text-red-500"
      },
      {
        name: "Nginx",
        color: "text-gray-500"
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
  
    ],
    image: erpapp,
    source_code_link: "#",
  },
  {
    name: "Social Media web app",
    description:
      "A secure and interactive social media platform similar to Twitter, built with Next.js and Express. It features JWT authentication for secure access, Prisma for efficient database management, and TailwindCSS for a modern UI. Users can share posts, upload media, and personalize profiles with cover images, enhancing engagement and connectivity",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "text-orange-500",
      },
      {
        name: "Prisma",
        color: "red-text-gradient",
      },
      {
        name: "Nextauth",
        color: "blue-text-gradient"
      },
      {
        name: "TypeScript",
        color: "text-purple-500"
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/amaranand360/twitter-app",
  },
  {
    name: "Amazon Clone",
    description:
      "A dynamic e-commerce platform built with React and JavaScript, featuring Redux and useContext for efficient state management. Integrated Firebase authentication for secure user login, along with product filtering, cart management, and seamless payment processing for an enhanced shopping experience.",
      tags: [
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "text-yellow-500",
        },
        {
          name: "react-router",
          color: "blue-text-gradient"
        },
        {
          name: "css",
          color: "text-purple-500"
        },
    
      ],
    image: photoshop,
    source_code_link:
      "https://github.com/amaranand360/Ecom-amazon-react-app-project",
  },
  {
    name: "ADVENTURE Time",
    description:
      "A visually engaging web experience leveraging advanced CSS techniques to create dynamic scrolling effects. Implements smooth background transitions and responsive media queries, ensuring seamless performance and adaptability across all devices.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "css-grid",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/amaranand360/ADVENTURE-TIME",
  },
  {
    name: "Ecommerce App",
    description:
      "MERN Ecommerce: A robust, full-stack application combining MongoDB, Express, React, and Node.js. Features include user authentication, product management, and secure payments via Braintree, all wrapped in a responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "#",
  },
  {
    name: "Todo Application",
    description:
      "A MERN stack To-Do app designed for efficient task management, featuring a secure JWT-based authentication system. Built with Express.js for server-side logic, MongoDB for data storage, and a dynamic React frontend, enabling users to add, edit, and delete tasks seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },  
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "text-orange-500",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gossipapp,
    source_code_link: "https://github.com/amaranand360/Todoappclientside",
  },
];

const socilaLinks = [
  {
    name: "https://github.com/amaranand360",
    icon: github,
  },
  {
    name: "https://www.linkedin.com/in/dev-amar-kumar/",
    icon: linkedin,
  },
  {
    name: "https://www.instagram.com/amar_kumar_30/",
    icon: insta,
  },
  {
    name: "https://x.com/AmarEngcs0030",
    icon: twitter,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socilaLinks,
};
