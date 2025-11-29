import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  react,
  python,
  laravel,
  mern,
  food,
  buyit,
  playlist
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer(Training)",
    company_name: "SEED IT SOLUTIONS",
    icon: react,
    iconBg: "#383E56",
    date: "August 2023",
    points: [
      "Completed an intensive React.js training course, focusing on modern web development practices.",
      "Gained hands-on experience with React.js and related technologies, building and maintaining web applications.",
      "Collaborated with other course participants in group projects to create high-quality web apps.",
      "Learned to implement responsive design and ensure cross-browser compatibility.",
    ],
  },
  {
    title: "Python Developer (Training)",
    company_name: "Udemy (Online Course)",
    icon: python,
    iconBg: "#E6DEDD",
    date: "March 2024",
    points: [
      "Completed an intensive Python training program, mastering core programming concepts.",
    "Gained hands-on experience with Python for data processing, web development, and automation.",
    "Worked on projects involving libraries like **Pandas**, **NumPy**, and **Flask**.",
    "Learned to write efficient, scalable Python code for real-world applications.",
    "Participated in interactive coding exercises to solidify knowledge and improve problem-solving skills."
    ],
  },
  {
    title: "Backend Development Cource",
    company_name: "PW Skills (Online Course)",
    icon: mern,
    iconBg: "#383E56",
    date: "August 2024",
    points: [
      "Completed an intensive **Backend Development** course, focusing on server-side programming.",
    "Gained hands-on experience with **Node.js**, **Express.js**, and **Databases** like **MySQL**.",
    "Learned to build scalable and efficient backend systems for web applications.",
    "Collaborated with course peers on projects to build real-world backend solutions.",
    "Improved skills in API development, authentication, and database management."
    ],
  },
  {
    title: "Laravel Developer (Training)",
    company_name: "SEED IT SOLUTIONS",
    icon: laravel,
    iconBg: "#E6DEDD",
    date: "SEPTEMBER 2023",
    points: [
     "Completed an intensive Laravel training program, learning backend web development with PHP.",
      "Gained hands-on experience in building dynamic web applications using Laravel and MySQL.",
      "Learned to implement responsive design and ensure cross-browser compatibility.",
      "Participated in code reviews and received constructive feedback to enhance coding practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have successfully completed my 10th standard from Government Higher Secondary School Tohda, affiliated with the Chhattisgarh Board of Secondary Education (CGBSE), with a commendable percentage of 79.86%.",
    designation: "Secondary School Degree",
    company: "Govt. Hr. Sec School Tohda",
    
  },
  {
    testimonial:
      "I have successfully completed my 12th standard (higher secondary) from Government Higher Secondary School Tohda, affiliated with the Chhattisgarh Board of Secondary Education (CGBSE), with an outstanding percentage of 90.6%.",
      designation: "Secondary School Degree",
      company: "Govt. Hr. Sec School Tohda",
  },
  {
    testimonial:
      "Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science, in my 8th semester. Passionate about web development, AI, and software engineering, with hands-on experience in building full-stack applications and machine learning projects.",
    designation: "Graduction(Appearing)",
    company: "Shri Shankaracharya Professional University",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "A full-stack eCommerce website built using Laravel (backend) with a MySQL database. Features include user authentication, product listings, shopping cart, order management, invoice generation, and email verification. Designed with Bootstrap and CSS for a responsive and interactive user experience.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: buyit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Delivery",
    description:
      "A food delivery application built with the MERN stack (MongoDB, Express, React, Node.js) where users can browse and select food items from a menu and place orders. The app focuses on providing a simple and efficient way for customers to choose their food and complete their order",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/",
  },
  {
    name: "Playlist Downloader",
    description:
      "A full-stack YouTube playlist downloader built with Flask (backend) using yt-dlp and FFmpeg. Features include multi-quality downloads, resumable downloads, multi-threading for speed, and aria2c integration. Designed with a simple web interface for seamless bulk video management.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: playlist,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
