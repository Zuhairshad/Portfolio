import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `
I'm a dedicated Full Stack Developer with a strong passion for crafting modern, responsive, and scalable web applications.

Specialized in the MERN stack (MongoDB, Express.js, React.js, and Node.js), I focus on turning complex ideas into functional and user-friendly solutions. Whether it's building secure APIs, designing clean user interfaces, or deploying full-scale applications — I bring creativity, performance, and precision to every project.

Let's connect and build something impactful.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Software Engineer Intern (MERN Stack)",
    company: "DevClub",
    description: `Collaborated with a team of developers to build and maintain scalable web applications using the MERN stack. Developed dynamic frontend components with React and Tailwind CSS, and integrated them with backend APIs. Worked with MongoDB for data modeling and implemented authentication and secure data handling.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    year: "2023",
    role: "Software Engineer Intern (MERN Stack)",
    company: "IT Beasts",
    description: `Collaborated with a team of developers to build and maintain scalable web applications using the MERN stack. Developed dynamic frontend components with React and Tailwind CSS, and integrated them with backend APIs. Worked with MongoDB for data modeling and implemented authentication and secure data handling.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Next.js", "Node.js"],
  },
];

export const CERTIFICATIONS = [
  {
    year: "2023",
    title: "Full Stack Web Development Bootcamp",
    provider: "Udemy",
    description:
      "Completed a comprehensive program covering frontend and backend technologies including React, Node.js, MongoDB, and Express. Built projects like e-commerce platforms, task trackers, and authentication systems. Learned Git/GitHub workflows, jQuery, and responsive UI development.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Git",
      "GitHub",
      "jQuery",
    ],
  },
  {
    year: "2023",
    title: "The MERN Stack Guide",
    provider: "Udemy",
    description:
      "Focused exclusively on mastering the MERN stack. Built full-stack apps using modular architecture. Learned advanced React patterns, backend API design with Express, and secure data handling with MongoDB. Covered environment configuration, deployment with Vercel, and API integration techniques. Emphasis on JWT authentication, protected routes, and real-world app architecture.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Vercel",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A full e-commerce platform with product listings, authentication, shopping cart, order placement, and admin dashboard. Backend APIs built with Express.js and MongoDB, frontend with React and Tailwind CSS.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
  },
  {
    title: "Client Portfolio Website",
    image: project3,
    description:
      "A responsive portfolio website for a freelance client. Includes smooth scrolling, project gallery, contact form with email integration, and mobile-first design. Built with HTML, CSS, and Bootstrap.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+12 4555 666 00",
  email: "me@example.com",
};
