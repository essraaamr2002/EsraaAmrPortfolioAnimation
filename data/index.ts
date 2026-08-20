export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Front-End Developer specializing in React.js & Next.js, building responsive, high-performance apps.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },

    {
      id: 5,
      title: "Also building cross-platform mobile apps with React Native & Expo",
      description: "And deploying to the cloud with Vercel & Azure",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-50 text-center ",
      // img: "../public/car.jpg",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "IDEA BUSINESS - SaaS Investment Platform",
      des: "A SaaS platform connecting entrepreneurs with investors: AI-powered KYC, project valuation & dynamic share pricing, risk assessment, secure payments/wallets, and a secondary market for trading shares.",
      img: "/p1.svg",
      iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/c.svg", "/fm.svg"],
      link: "https://bs-idea.com/",
    },
    {
      id: 2,
      title: "The TBS Club - Web Management System",
      des: "Responsive admin & operations platform for a multi-branch café chain, with modules for users, clients, baristas, branches, catalogs, offers, and dedicated Barista/Cashier workflows.",
      img: "https://tbs-staging-app.vercel.app/images/logo.svg",
      iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/c.svg"],
      link: "https://tbs-staging-app.vercel.app/apps/barista/Cashier/cashier-code/",
    },
    {
      id: 3,
      title: "Edara - Inventory Management System",
      des: "Full-stack inventory management system built as team leader, using React, Node.js, Express, and MySQL.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/ts.svg", "/c.svg"],
      link: "https://github.com/essraaamr2002",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      des: "Scalable e-commerce platform with secure user authentication, Redux for state management, RESTful APIs, and MongoDB for data storage.",
      img: "/p4.svg",
      iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
      link: "https://github.com/essraaamr2002/e-commerce",
    },
    {
      id: 5,
      title: "Movie Web Application",
      des: "Movie Explorer platform with an intuitive interface and personalized recommendations, built with React, Node.js, and MongoDB.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/c.svg", "/ts.svg"],
      link: "https://github.com/essraaamr2002/es-movie",
    },
    {
      id: 6,
      title: "Portfolio Website",
      des: "Personal portfolio showcasing UI animations and professional projects, built with React.js, Next.js, and TailwindCSS.",
      img: "/p2.svg",
      iconLists: ["/re.svg", "/next.svg", "/tail.svg"],
      link: "https://esraa-amr-portfolioanimation.vercel.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "نحن شركة ضخمة متعددة الفروع تحتوي على اكثر من 60 موظف اداري ونمتلك سلسه ومجموعه من المواقع الداخلية والمنصات الخارجيه وتم الاتفاق مع المهندسه اسراء على تنفيذ المشاريع رغم ضخامه المشاريع الا انها اتقنت عمل كل شي، انصح بالتعامل معها خبره عريقه واتقان وجوده واحتراف. كل الشكر والتقدير نيابه عني وعن زملائي.",
      name: "Abdulaziz A.",
      title: "Client via Khamsat (خمسات) — 5.0 ★",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Front End Developer, TDS",
      desc: "Building responsive web apps with React.js & Next.js, integrating RESTful APIs, and transitioning legacy systems to Redux & Recoil since 09/2024.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Front End Developer & CRM Specialist, Digital",
      desc: "Freelance role (11/2024 – 05/2025) building interactive UIs with HTML5/CSS3/JS and supporting marketing campaigns and content management.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Team Lead, Edara (Inventory Management System)",
      desc: "Led development of a full-stack inventory management system using React, Node.js, Express, and MySQL.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Freelance Portfolio Project, Saudi Arabia",
      desc: "Built a fully responsive portfolio website with React.js & Material-UI tailored to the client's brand identity (11/2024 – 12/2024).",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];

  export const instructorExperience = [
    {
      id: 1,
      title: "3+ Years Teaching Programming",
      desc: "Beyond development, I have over 3 years of experience teaching programming to kids and teens across multiple platforms — including iSchool, eYouth, Magarty, Digital School, and AI School — covering Scratch, HTML/CSS, JavaScript, and core CS concepts.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Coding Instructor, Ischool",
      desc: "06/2024 – 12/2025 | Cairo, Egypt. Affiliated with Egypt's Ministry of Communications & Information Technology (MCIT). Taught online & offline Computer Science courses to students aged 12-16 across four groups of 14-16 students, combining core CS concepts with hands-on activities. Achieved a 4.45/5 instructor rating.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 3,
      title: "Coding Instructor, Freelance & Digital School by Berlitz",
      desc: "03/2026 – Present. Teaching programming basics (Scratch, HTML/CSS, JavaScript) to children aged 12-16 through online and offline workshops, and developing coding curricula with Digital School.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 4,
      title: "Coding Instructor, eYouth, Magarty & AI School",
      desc: "Additional coding instructor experience across eYouth, Magarty, and AI School platforms, teaching programming fundamentals and problem-solving to young learners.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
  ];

  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/essraaamr2002",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/esraa-amr/",
    },
    {
      id: 3,
      img: "/wha.svg",
      link: "https://wa.me/201284451436",
    },
  ];

  export const contactInfo = {
    email: "esraa.elfaky46@gmail.com",
    phone: "+201284451436",
    location: "Cairo, Egypt",
    github: "https://github.com/essraaamr2002",
    linkedin: "https://www.linkedin.com/in/esraa-amr/",
    resume: "/resume.pdf",
  };

  export const skillGroups = [
    {
      title: "Front-End",
      row: [
        "HTML5", "CSS3", "SASS", "TailwindCSS", "Bootstrap",
        "JavaScript", "TypeScript",
        "React.js", "Next.js", "Redux", "Redux Toolkit", "Recoil", "Zustand",
      ],
    },
    {
      title: "Back-End & Data",
      row: [
        "Node.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB", "RESTful APIs",
      ],
    },
    {
      title: "Tools & Deployment",
      row: [
        "Git", "GitHub", "GitLab", "Docker", "Vercel", "Netlify",
        "Postman", "Power BI", "Jira", "Trello", "Webpack", "Babel",
      ],
    },
  ];