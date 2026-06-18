export const navigationLinks = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certification", href: "#certifications" },
  { label: "Contact Details", href: "#contact" },
];

export const heroStats = [
  { value: "5+", label: "Years building products" },
  { value: "20+", label: "Projects shipped" },
  { value: "8", label: "Core technologies" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/bipasha0086" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bipasha-rehan-6b3a0528a" },
  { label: "Email", href: "mailto:rehanbipasha0086@gmail.com" },
];

export const aboutTimeline = [
  {
    year: "2021",
    title: "Entered the craft",
    description:
      "Built a foundation in frontend engineering, design systems, and product thinking while shipping small but polished experiences.",
  },
  {
    year: "2023",
    title: "Expanded into full-stack work",
    description:
      "Worked across APIs, data flows, and deployment pipelines to connect product polish with operational reliability.",
  },
  {
    year: "2026",
    title: "Focused on premium experiences",
    description:
      "Designing interfaces that feel calm, fast, and unmistakably high-end across desktop and mobile.",
  },
];

export const aboutHighlights = [
  {
    title: "Product-minded",
    description: "Balances user goals, business metrics, and engineering quality.",
  },
  {
    title: "Detail-driven",
    description: "Sweats spacing, rhythm, motion, and accessibility semantics.",
  },
  {
    title: "Performance-aware",
    description: "Prefers lean component boundaries and intentional motion.",
  },
];

export const aboutMetrics = [
  { value: "99%", label: "Accessibility intent" },
  { value: "60fps", label: "Motion target" },
  { value: "24h", label: "Typical prototype cycle" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages for logic and performance.",
    items: [
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "SQL", level: 95 }
    ],
  },
  {
    title: "Machine Learning & Data",
    description: "Building intelligent models and insights.",
    items: [
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "NLTK", level: 80 },
      { name: "Data Analysis", level: 92 }
    ],
  },
  {
    title: "Web Development",
    description: "Frontend and backend frameworks.",
    items: [
      { name: "React", level: 70 },
      { name: "JSP", level: 70 },
      { name: "Hibernate", level: 70 },
      { name: "REST APIs", level: 70 }
    ],
  },
  {
    title: "Databases",
    description: "Structured data storage and querying.",
    items: [
      { name: "MySQL", level: 90 },
      { name: "SQL", level: 95 },
      { name: "MongoDB", level: 85 }
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development environments and workflow.",
    items: [
      { name: "GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Canva", level: 85 },
      { name: "GitHub Copilot", level: 92 }
    ],
  },
];

export const experienceEntries = [
  {
    role: "Class Representative",
    company: "Chandigarh University",
    period: "Jan 2026",
    summary:
      "Serving as a trusted voice for students and promoting a collaborative academic environment. Dedicated to strengthening communication, supporting student success, and fostering a positive classroom culture where ideas, concerns, and achievements are effectively represented.",
    details: [],
  },
  {
    role: "Joint Secretary",
    company: "IEI Student Chapter, Chandigarh University",
    period: "Apr 2026",
    summary:
      "Driving student engagement through technical and professional initiatives while helping cultivate a strong engineering community. Passionate about creating opportunities for knowledge sharing, innovation, and collaboration that inspire students to explore emerging technologies and expand their horizons.",
    details: [],
  },
  {
    role: "Campus Ambassador",
    company: "OSEN",
    period: "Apr 2026",
    summary:
      "Contributing to a culture of innovation and student empowerment by connecting peers with growth opportunities, industry insights, and collaborative initiatives. Actively fostering engagement, building meaningful professional networks, and encouraging participation in activities that support personal and career development.",
    details: [],
  },
];

export const industrialTrainingEntries = [
  {
    role: "Industrial Training – Core Concepts of Java Programming",
    company: "Chandigarh University",
    period: "May 2025 – June 2025",
    summary:
      "Completed industry-oriented training in Core Java and OOP concepts. Built Java-based applications and practiced data structures, exception handling, and collections. Enhanced problem-solving and software development skills through hands-on projects.",
    details: [],
  },
];

export const projectFilters = ["All", "AI & ML", "Web App", "Platform", "Analytics", "Productivity"];

export const projects = [
  {
    id: 1,
    name: "Aarogini",
    category: "AI & ML",
    featured: true,
    description: "A healthcare platform designed to provide intelligent health support, symptom guidance, wellness recommendations, and user-centric healthcare assistance. The project focuses on leveraging AI to improve healthcare accessibility and promote preventive care.",
    technologies: ["Python", "Machine Learning", "AI", "Web Development"],
    github: "https://github.com/bipasha0086/Aarogini",
    demo: "#",
    image: "/projects/Aarogini.png",
    bannerGradient: "from-rose-500/20 to-orange-500/20"
  },
  {
    id: 2,
    name: "MindHealix",
    category: "AI & ML",
    featured: false,
    description: "An intelligent mental health solution that helps users monitor stress levels, track emotional well-being, and access personalized wellness resources. The platform aims to encourage proactive mental health management through AI-driven insights.",
    technologies: ["Python", "Machine Learning", "AI", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/bipasha0086/MindHealix_bip",
    demo: "#",
    image: "/projects/MindHealix.png",
    bannerGradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    name: "Real-Time Analytics Dashboard",
    category: "Analytics",
    featured: false,
    description: "Developed a real-time analytics dashboard that transforms complex datasets into meaningful visual insights using interactive charts, KPIs, and performance metrics. Enables faster and data-driven decision-making.",
    technologies: ["Power BI", "Python", "SQL", "Data Analytics"],
    github: "https://github.com/bipasha0086/Realtime-analytics",
    demo: "#",
    image: "/projects/Realtime_analytics.png",
    bannerGradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 4,
    name: "Spam Detection Using ML",
    category: "AI & ML",
    featured: false,
    description: "Built a machine learning model capable of identifying and filtering spam messages using Natural Language Processing techniques. The system enhances communication security by accurately classifying messages as spam or legitimate.",
    technologies: ["Python", "Scikit-Learn", "NLP", "Machine Learning"],
    github: "https://colab.research.google.com/drive/12wfU7S_9-sON8zVlkEeKh0O5F6nDNBRc?usp=sharing",
    demo: "#",
    bannerGradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 5,
    name: "Handwritten Digit Recognition",
    category: "AI & ML",
    featured: false,
    description: "Developed an image recognition system that accurately identifies handwritten digits using neural networks and image processing techniques. The project demonstrates practical applications of deep learning in computer vision.",
    technologies: ["TensorFlow", "Keras", "OpenCV", "Python"],
    github: "https://colab.research.google.com/drive/1GaZvlzUFbFrrGfgyulASNAMELoscxX3T?usp=sharing",
    demo: "#",
    bannerGradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: 6,
    name: "ShopNexal",
    category: "Web App",
    featured: false,
    description: "A feature-rich online shopping application that allows users to browse products, manage shopping carts, place orders, and enjoy a seamless shopping experience through a responsive and user-friendly interface.",
    technologies: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/bipasha0086/online-shopping-cart",
    demo: "#",
    image: "/projects/ShopNexal.png",
    bannerGradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 7,
    name: "EventLink",
    category: "Platform",
    featured: false,
    description: "Designed a centralized platform that simplifies event discovery, registration, booking, and management. The application helps users connect with events while enabling organizers to efficiently manage attendees.",
    technologies: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/bipasha0086/EVENT_LINK",
    demo: "#",
    image: "/projects/Event_Link.png",
    bannerGradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 8,
    name: "EducoLink",
    category: "Platform",
    featured: false,
    description: "An educational platform that connects students with learning resources, study materials, and collaborative opportunities. The project promotes accessible learning and knowledge sharing through technology.",
    technologies: ["Java", "MySQL", "Web Technologies"],
    github: "https://github.com/bipasha0086/Educolink",
    demo: "#",
    image: "/projects/EducoLink.png",
    bannerGradient: "from-fuchsia-500/20 to-rose-500/20"
  },
  {
    id: 9,
    name: "EventCalendar",
    category: "Productivity",
    featured: false,
    description: "A calendar-based productivity tool that allows users to organize, schedule, and track events efficiently. The platform offers a streamlined experience for managing personal and professional schedules.",
    technologies: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/bipasha0086/java-project",
    demo: "#",
    image: "/projects/Event_Calendar.png",
    bannerGradient: "from-teal-500/20 to-emerald-500/20"
  },
  {
    id: 10,
    name: "PCOS Prediction using ML",
    category: "AI & ML",
    featured: false,
    description: "A machine learning model developed to predict the likelihood of Polycystic Ovary Syndrome (PCOS) based on clinical data. This project leverages data analysis and predictive modeling to assist in early detection and diagnosis.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-Learn"],
    github: "https://colab.research.google.com/drive/1Txcl_9I592_cf0grgvC_D2ge26UAXrMR?usp=sharing",
    demo: "#",
    bannerGradient: "from-pink-500/20 to-rose-500/20"
  }
];

export const achievements = [
  {
    title: "Gen AI Hackathon 2025",
    icon: "🥇",
    position: "Top 10 Finalist",
    date: "December 2025",
    project: "AArogini",
    detail: "Recognized among the Top 10 finalists for developing Arogini, an AI-powered Women platform that leveraged Generative AI to address real-world challenges and improve user accessibility.",
  },
  {
    title: "Build for Bharat 2026 (National Level)",
    icon: "🥉",
    position: "2nd Runner-Up",
    date: "January 2026",
    prize: "₹5,000",
    project: "Meditatv",
    detail: "Secured 2nd Runner-Up position at the national-level Build for Bharat 2026 competition. Developed Meditatv, an AI-driven medicinenot wasted focused on meditation guidance , and user well-being.",
  },
  {
    title: "Samsung Innovation Campus 2026",
    icon: "🤖",
    position: "AI Category Project Showcase",
    date: "March 2026",
    project: "MindHealix",
    detail: "Selected under the Artificial Intelligence category for developing MindHealix, an intelligent mental health support platform utilizing AI to provide personalized wellness assistance and insights.",
  },
  {
    title: "Bharat Tech Xperience 2026",
    icon: "🏆",
    position: "Winner – Industry Ready Deployment Category",
    date: "April 2026",
    prize: "₹5,100",
    project: "EducoLink",
    detail: "Won the Industry Ready Deployment category for EducoLink, an education technology platform designed for practical implementation and real-world impact. Recognized for innovation, scalability, and deployment readiness.",
  }
];

export const certifications = [
  {
    title: "Frontend Specialization",
    issuer: "Professional Academy",
    year: "2025",
    verify: "https://example.com",
  },
  {
    title: "Cloud Fundamentals",
    issuer: "Cloud Training",
    year: "2024",
    verify: "https://example.com",
  },
  {
    title: "Accessibility Essentials",
    issuer: "Inclusive Design Lab",
    year: "2024",
    verify: "https://example.com",
  },
];

export const resumeHighlights = [
  "End-to-end product delivery across frontend and backend layers.",
  "Premium interaction design with a strong accessibility baseline.",
  "Practical experience shipping maintainable, component-driven systems.",
];

export const testimonials = [
  {
    quote:
      "The work was thoughtful, fast, and surprisingly polished. The interface felt like a mature product from day one.",
    author: "Product Lead",
    role: "Cross-functional partner",
  },
  {
    quote:
      "A rare mix of visual taste and engineering discipline. The details were handled with genuine care.",
    author: "Engineering Manager",
    role: "Team lead",
  },
  {
    quote:
      "Communication was clear, decisions were well reasoned, and the final experience felt premium and dependable.",
    author: "Design Partner",
    role: "UX collaborator",
  },
];

export const contactChannels = [
  { label: "GitHub", href: "https://github.com/your-handle" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "Email", href: "mailto:hello@yourdomain.com" },
];

export const educationEntries = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    school: "🎓 Chandigarh University",
    period: "2023 – 2027",
    details: [
      "Computer Science and Engineering with a strong focus on Artificial Intelligence, Machine Learning, Software Development,",
      "CGPA: 8.68/10"
    ]
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    school: "🏫 Shanti Devi Senior Secondary School, Dinanagar",
    period: "2022 – 2023",
    details: [
      "Completed higher secondary education with distinction, demonstrating strong academic performance and a solid foundation in science and mathematics.",
      "Score: 93.8%"
    ]
  },
  {
    degree: "Secondary Education (Class X)",
    school: "🏫 Little Flower Convent School, Dinanagar",
    period: "2020 – 2021",
    details: [
      "Successfully completed secondary education with excellent academic achievement and consistent performance across subjects.",
      "Score: 91.7%"
    ]
  }
];

export const interpersonalSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Communication", level: 90 },
  { name: "Team Collaboration", level: 95 },
  { name: "Leadership", level: 85 },
  { name: "Critical Thinking", level: 90 },
  { name: "Adaptability", level: 95 },
  { name: "Time Management", level: 88 }
];

export const languages = [
  { name: "English", proficiency: "Native or Bilingual", level: 100 },
  { name: "Hindi", proficiency: "Native or Bilingual", level: 100 },
  { name: "Punjabi", proficiency: "Native or Bilingual", level: 100 },
];

export const photos = [
  { id: 1, src: "/gallery/Screenshot 2026-06-16 224147.png", alt: "Gallery Screenshot 1" },
  { id: 2, src: "/gallery/Screenshot 2026-06-16 224158.png", alt: "Gallery Screenshot 2" },
  { id: 3, src: "/gallery/Screenshot 2026-06-16 224217.png", alt: "Gallery Screenshot 3" },
  { id: 4, src: "/gallery/Screenshot 2026-06-16 224329.png", alt: "Gallery Screenshot 4" },
  { id: 5, src: "/gallery/Screenshot 2026-06-16 224350.png", alt: "Gallery Screenshot 5" },
  { id: 6, src: "/gallery/Screenshot 2026-06-16 224422.png", alt: "Gallery Screenshot 6" },
  { id: 7, src: "/gallery/Screenshot 2026-06-16 224436.png", alt: "Gallery Screenshot 7" },
  { id: 8, src: "/gallery/Screenshot 2026-06-16 224455.png", alt: "Gallery Screenshot 8" },
  { id: 9, src: "/gallery/Screenshot 2026-06-16 224509.png", alt: "Gallery Screenshot 9" },
  { id: 10, src: "/gallery/Screenshot 2026-06-16 224524.png", alt: "Gallery Screenshot 10" },
  { id: 11, src: "/gallery/Screenshot 2026-06-16 224546.png", alt: "Gallery Screenshot 11" },
  { id: 12, src: "/gallery/Screenshot 2026-06-16 224607.png", alt: "Gallery Screenshot 12" },
  { id: 13, src: "/gallery/Screenshot 2026-06-16 224615.png", alt: "Gallery Screenshot 13" },
  { id: 14, src: "/gallery/Screenshot 2026-06-16 224622.png", alt: "Gallery Screenshot 14" },
  { id: 15, src: "/gallery/Screenshot 2026-06-16 224749.png", alt: "Gallery Screenshot 15" },
  { id: 16, src: "/gallery/Screenshot 2026-06-16 224756.png", alt: "Gallery Screenshot 16" },
  { id: 17, src: "/gallery/Screenshot 2026-06-16 225010.png", alt: "Gallery Screenshot 17" },
  { id: 18, src: "/gallery/Screenshot 2026-06-16 225018.png", alt: "Gallery Screenshot 18" },
  { id: 19, src: "/gallery/Screenshot 2026-06-16 225053.png", alt: "Gallery Screenshot 19" },
  { id: 20, src: "/gallery/Screenshot 2026-06-16 225059.png", alt: "Gallery Screenshot 20" },
  { id: 21, src: "/gallery/Screenshot 2026-06-17 185301.png", alt: "Gallery Screenshot 21" },
  { id: 22, src: "/gallery/Screenshot 2026-06-17 185309.png", alt: "Gallery Screenshot 22" },
  { id: 23, src: "/gallery/Screenshot 2026-06-17 185315.png", alt: "Gallery Screenshot 23" },
  { id: 24, src: "/gallery/Screenshot 2026-06-17 185322.png", alt: "Gallery Screenshot 24" },
  { id: 25, src: "/gallery/Screenshot 2026-06-17 185334.png", alt: "Gallery Screenshot 25" },
  { id: 26, src: "/gallery/Screenshot 2026-06-17 185358.png", alt: "Gallery Screenshot 26" },
  { id: 27, src: "/gallery/Screenshot 2026-06-17 185404.png", alt: "Gallery Screenshot 27" },
  { id: 28, src: "/gallery/Screenshot 2026-06-17 185411.png", alt: "Gallery Screenshot 28" },
  { id: 29, src: "/gallery/Screenshot 2026-06-17 185416.png", alt: "Gallery Screenshot 29" },
  { id: 30, src: "/gallery/Screenshot 2026-06-17 185422.png", alt: "Gallery Screenshot 30" },
  { id: 31, src: "/gallery/Screenshot 2026-06-17 185429.png", alt: "Gallery Screenshot 31" },
  { id: 32, src: "/gallery/Screenshot 2026-06-17 185434.png", alt: "Gallery Screenshot 32" },
  { id: 33, src: "/gallery/Screenshot 2026-06-17 185443.png", alt: "Gallery Screenshot 33" },
  { id: 34, src: "/gallery/Screenshot 2026-06-17 185448.png", alt: "Gallery Screenshot 34" },
  { id: 35, src: "/gallery/Screenshot 2026-06-17 185453.png", alt: "Gallery Screenshot 35" },
  { id: 36, src: "/gallery/Screenshot 2026-06-17 185500.png", alt: "Gallery Screenshot 36" },
  { id: 37, src: "/gallery/Screenshot 2026-06-17 185506.png", alt: "Gallery Screenshot 37" },
  { id: 38, src: "/gallery/Screenshot 2026-06-17 185513.png", alt: "Gallery Screenshot 38" },
  { id: 39, src: "/gallery/Screenshot 2026-06-17 185521.png", alt: "Gallery Screenshot 39" },
  { id: 40, src: "/gallery/Screenshot 2026-06-17 185533.png", alt: "Gallery Screenshot 40" },
  { id: 41, src: "/gallery/Screenshot 2026-06-17 185538.png", alt: "Gallery Screenshot 41" },
  { id: 42, src: "/gallery/Screenshot 2026-06-17 185541.png", alt: "Gallery Screenshot 42" },
  { id: 43, src: "/gallery/Screenshot 2026-06-17 185547.png", alt: "Gallery Screenshot 43" },
  { id: 44, src: "/gallery/Screenshot 2026-06-17 185551.png", alt: "Gallery Screenshot 44" },
  { id: 45, src: "/gallery/Screenshot 2026-06-17 185555.png", alt: "Gallery Screenshot 45" },
  { id: 46, src: "/gallery/Screenshot 2026-06-17 185559.png", alt: "Gallery Screenshot 46" }
];


export const courseeraCertificates = [
  { id: 1, name: "courseera2", src: "/certificates/courseera2.pdf", type: "pdf" },
  { id: 2, name: "Coursera 10", src: "/certificates/Coursera 10.pdf", type: "pdf" },
  { id: 3, name: "Coursera 11", src: "/certificates/Coursera 11.pdf", type: "pdf" },
  { id: 4, name: "Coursera 12", src: "/certificates/Coursera 12.pdf", type: "pdf" },
  { id: 5, name: "Coursera 13", src: "/certificates/Coursera 13.pdf", type: "pdf" },
  { id: 6, name: "Coursera 14", src: "/certificates/Coursera 14.pdf", type: "pdf" },
  { id: 7, name: "Coursera 15", src: "/certificates/Coursera 15.pdf", type: "pdf" },
  { id: 8, name: "Coursera 16", src: "/certificates/Coursera 16.pdf", type: "pdf" },
  { id: 9, name: "Coursera 17", src: "/certificates/Coursera 17.pdf", type: "pdf" },
  { id: 10, name: "Coursera 18", src: "/certificates/Coursera 18.pdf", type: "pdf" },
  { id: 11, name: "Coursera 19", src: "/certificates/Coursera 19.pdf", type: "pdf" },
  { id: 12, name: "Coursera 20", src: "/certificates/Coursera 20.pdf", type: "pdf" },
  { id: 13, name: "Coursera 21", src: "/certificates/Coursera 21.pdf", type: "pdf" },
  { id: 14, name: "Coursera 22", src: "/certificates/Coursera 22.pdf", type: "pdf" },
  { id: 15, name: "Coursera 23", src: "/certificates/Coursera 23.pdf", type: "pdf" },
  { id: 16, name: "Coursera 24", src: "/certificates/Coursera 24.pdf", type: "pdf" },
  { id: 17, name: "Coursera 25", src: "/certificates/Coursera 25.pdf", type: "pdf" },
  { id: 18, name: "Coursera 26", src: "/certificates/Coursera 26.pdf", type: "pdf" },
  { id: 19, name: "Coursera 27", src: "/certificates/Coursera 27.pdf", type: "pdf" },
  { id: 20, name: "Coursera 28", src: "/certificates/Coursera 28.pdf", type: "pdf" },
  { id: 21, name: "Coursera 29", src: "/certificates/Coursera 29.pdf", type: "pdf" },
  { id: 22, name: "Coursera 3", src: "/certificates/Coursera 3.pdf", type: "pdf" },
  { id: 23, name: "Coursera 30", src: "/certificates/Coursera 30.pdf", type: "pdf" },
  { id: 24, name: "Coursera 31", src: "/certificates/Coursera 31.pdf", type: "pdf" },
  { id: 25, name: "Coursera 32", src: "/certificates/Coursera 32.pdf", type: "pdf" },
  { id: 26, name: "Coursera 33", src: "/certificates/Coursera 33.pdf", type: "pdf" },
  { id: 27, name: "Coursera 34", src: "/certificates/Coursera 34.pdf", type: "pdf" },
  { id: 28, name: "Coursera 35", src: "/certificates/Coursera 35.pdf", type: "pdf" },
  { id: 29, name: "Coursera 4", src: "/certificates/Coursera 4.pdf", type: "pdf" },
  { id: 30, name: "Coursera 5", src: "/certificates/Coursera 5.pdf", type: "pdf" },
  { id: 31, name: "Coursera 6", src: "/certificates/Coursera 6.pdf", type: "pdf" },
  { id: 32, name: "Coursera 7", src: "/certificates/Coursera 7.pdf", type: "pdf" },
  { id: 33, name: "Coursera 8", src: "/certificates/Coursera 8.pdf", type: "pdf" },
  { id: 34, name: "Coursera 9", src: "/certificates/Coursera 9.pdf", type: "pdf" },
  { id: 35, name: "Coursera1", src: "/certificates/Coursera1.pdf", type: "pdf" },
  { id: 36, name: "Samsung", src: "/certificates/Samsung.jpeg", type: "image" },
  { id: 37, name: "Screenshot 2026-06-16 224126", src: "/certificates/Screenshot 2026-06-16 224126.png", type: "image" },
  { id: 38, name: "Screenshot 2026-06-16 224246", src: "/certificates/Screenshot 2026-06-16 224246.png", type: "image" },
  { id: 39, name: "Screenshot 2026-06-16 224258", src: "/certificates/Screenshot 2026-06-16 224258.png", type: "image" },
  { id: 40, name: "Screenshot 2026-06-16 224637", src: "/certificates/Screenshot 2026-06-16 224637.png", type: "image" },
  { id: 41, name: "Screenshot 2026-06-16 224644", src: "/certificates/Screenshot 2026-06-16 224644.png", type: "image" },
  { id: 42, name: "Screenshot 2026-06-16 224712", src: "/certificates/Screenshot 2026-06-16 224712.png", type: "image" },
  { id: 43, name: "Screenshot 2026-06-16 224720", src: "/certificates/Screenshot 2026-06-16 224720.png", type: "image" },
  { id: 44, name: "Screenshot 2026-06-16 224817", src: "/certificates/Screenshot 2026-06-16 224817.png", type: "image" },
  { id: 45, name: "Screenshot 2026-06-16 224914", src: "/certificates/Screenshot 2026-06-16 224914.png", type: "image" },
  { id: 46, name: "Screenshot 2026-06-16 224937", src: "/certificates/Screenshot 2026-06-16 224937.png", type: "image" },
  { id: 47, name: "Screenshot 2026-06-16 224948", src: "/certificates/Screenshot 2026-06-16 224948.png", type: "image" },
  { id: 48, name: "Screenshot 2026-06-16 224958", src: "/certificates/Screenshot 2026-06-16 224958.png", type: "image" },
  { id: 49, name: "Screenshot 2026-06-16 225031", src: "/certificates/Screenshot 2026-06-16 225031.png", type: "image" },
  { id: 50, name: "Screenshot 2026-06-16 225041", src: "/certificates/Screenshot 2026-06-16 225041.png", type: "image" },
  { id: 51, name: "Screenshot 2026-06-16 225059", src: "/certificates/Screenshot 2026-06-16 225059.png", type: "image" },
  { id: 52, name: "Screenshot 2026-06-16 225119", src: "/certificates/Screenshot 2026-06-16 225119.png", type: "image" },
  { id: 53, name: "Screenshot 2026-06-16 225130", src: "/certificates/Screenshot 2026-06-16 225130.png", type: "image" },
  { id: 54, name: "Screenshot 2026-06-17 185322", src: "/certificates/Screenshot 2026-06-17 185322.png", type: "image" },
  { id: 55, name: "Screenshot 2026-06-17 185429", src: "/certificates/Screenshot 2026-06-17 185429.png", type: "image" },
  { id: 56, name: "Screenshot 2026-06-17 185443", src: "/certificates/Screenshot 2026-06-17 185443.png", type: "image" },
  { id: 57, name: "Screenshot 2026-06-17 213843", src: "/certificates/Screenshot 2026-06-17 213843.png", type: "image" },
  { id: 58, name: "Screenshot 2026-06-17 213850", src: "/certificates/Screenshot 2026-06-17 213850.png", type: "image" },
  { id: 59, name: "upstop 10", src: "/certificates/upstop 10.pdf", type: "pdf" },
  { id: 60, name: "upstop 6", src: "/certificates/upstop 6.pdf", type: "pdf" },
  { id: 61, name: "upstop 7", src: "/certificates/upstop 7.pdf", type: "pdf" },
  { id: 62, name: "upstop 8", src: "/certificates/upstop 8.pdf", type: "pdf" },
  { id: 63, name: "upstop 9", src: "/certificates/upstop 9.pdf", type: "pdf" },
  { id: 64, name: "upstop1", src: "/certificates/upstop1.pdf", type: "pdf" },
  { id: 65, name: "upstop2", src: "/certificates/upstop2.pdf", type: "pdf" },
  { id: 66, name: "upstop3", src: "/certificates/upstop3.pdf", type: "pdf" },
  { id: 67, name: "upstop4", src: "/certificates/upstop4.pdf", type: "pdf" },
  { id: 68, name: "upstop5", src: "/certificates/upstop5.pdf", type: "pdf" },
  { id: 69, name: "WhatsApp Image 2026-06-16 at 11.14.04 PM", src: "/certificates/WhatsApp Image 2026-06-16 at 11.14.04 PM.jpeg", type: "image" },
  { id: 70, name: "WhatsApp Image 2026-06-16 at 11.14.06 PM", src: "/certificates/WhatsApp Image 2026-06-16 at 11.14.06 PM.jpeg", type: "image" },
  { id: 71, name: "WhatsApp Image 2026-06-16 at 11.14.23 PM", src: "/certificates/WhatsApp Image 2026-06-16 at 11.14.23 PM.jpeg", type: "image" },
];
