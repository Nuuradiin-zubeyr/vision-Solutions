export const pillars = [
  {
    n: "01",
    title: "Consultation & Advisory Services",
    body:
      "Expert IT consulting and advisory that helps organizations optimize their technology, strengthen cybersecurity, enhance data management and adopt modern digital solutions — through tailored strategies aligned with your business goals.",
  },
  {
    n: "02",
    title: "AI Integration",
    body:
      "Empower your business with intelligent AI solutions that automate workflows, enhance decision-making, improve customer experiences and accelerate digital transformation — seamlessly integrated into your existing systems.",
  },
  {
    n: "03",
    title: "Software Development",
    body:
      "We design, develop, deploy and maintain high-quality software — web & mobile apps, SaaS platforms, AI-powered systems and custom enterprise solutions — with seamless integration and scalable performance.",
  },
  {
    n: "04",
    title: "Help-Desk Support & Maintenance",
    body:
      "Reliable IT support and maintenance — proactive monitoring, cybersecurity, cloud hosting, data backup and system updates — keeping your infrastructure secure, scalable, compliant and optimized.",
  },
];

export const services = [
  {
    eyebrow: "AI Integration",
    title: "Artificial intelligence, woven into your business.",
    body:
      "We seamlessly integrate Artificial Intelligence into your existing systems — automating workflows, enhancing decision-making and improving customer experiences — to enable smarter operations, greater efficiency and sustainable business growth.",
    points: [
      "Workflow automation",
      "Smarter, data-driven decisions",
      "AI-powered customer experiences",
    ],
    caption: "Automate · Optimize · Grow",
  },
  {
    eyebrow: "Consultation & Advisory",
    title: "Turnkey ICT consultation.",
    body:
      "We offer expert IT consulting and advisory services to help businesses streamline their technology strategy — assessing your current infrastructure and goals, then planning a future-proof IT strategy aligned with your growth objectives.",
    points: [
      "Cloud adoption & migration",
      "Network & cybersecurity improvements",
      "Data quality assurance & management",
    ],
    caption: "Strategy → Execution",
    reverse: true,
  },
  {
    eyebrow: "Software Development",
    title: "Full-stack system development.",
    body:
      "From infrastructure setup to complete system integration, we develop, deploy and maintain enterprise-level software — SaaS, web & mobile apps, PWAs, AI-powered systems and custom solutions — with minimal disruption and maximum performance.",
    points: [
      "Web & mobile apps, SaaS platforms",
      "AI-powered & PWA systems",
      "Custom enterprise solutions",
    ],
    caption: "Design → Deploy",
  },
  {
    eyebrow: "Support & Maintenance",
    title: "Ongoing support & maintenance.",
    body:
      "Technology needs continuous attention. We provide proactive monitoring, rapid troubleshooting and regular maintenance — plus 24/7 support, updates, patches and cybersecurity — keeping your infrastructure secure, scalable and compliant.",
    points: [
      "Proactive monitoring & troubleshooting",
      "Updates, patches & cybersecurity",
      "Cloud hosting, backup & network security",
    ],
    caption: "Secure · Scalable · Compliant",
    reverse: true,
  },
];

export const projects = [
  {
    client: "Odoros",
    tag: "Data platform · Dashboard",
    title: "Somalia Drought Monitoring Dashboard",
    body:
      "A live geospatial dashboard that tracks and visualizes drought conditions across Somalia — turning environmental data into clear, actionable insight for faster response.",
    status: "Live",
    stats: [["Nationwide", "Drought coverage"], ["Live", "Real-time data"]],
    grad: "from-navy-950 via-royal-700 to-teal",
    link: "https://odoros-dashboard.vercel.app/",
    featured: true,
  },
  {
    client: "Regional Retailer",
    tag: "E-commerce · Mobile",
    title: "Online Store & Delivery App",
    body:
      "A mobile-first e-commerce platform with order tracking and local payment integration for a growing retail brand.",
    status: "Completed",
    stats: [["10k+", "Orders processed"], ["2", "Platforms (iOS/Android)"]],
    grad: "from-teal via-royal-500 to-navy-900",
    kind: "cart",
  },
  {
    client: "Community Health Network",
    tag: "Health · Records",
    title: "Clinic Records & Appointments System",
    body:
      "A secure patient-records and appointment system for clinics, built to work reliably in low-connectivity settings.",
    status: "Completed",
    stats: [["6", "Clinics onboarded"], ["Offline", "First"]],
    grad: "from-royal-700 to-teal",
    kind: "health",
  },
  {
    client: "Education Partner",
    tag: "EdTech · LMS",
    title: "E-Learning & Exams Platform",
    body:
      "A learning management system with course delivery, online exams and progress analytics for students and teachers.",
    status: "Completed",
    stats: [["5k+", "Students"], ["120+", "Courses"]],
    grad: "from-navy-900 via-royal-500 to-lime",
    kind: "edu",
  },
  {
    client: "Logistics Operator",
    tag: "Logistics · GPS",
    title: "Fleet Tracking & Dispatch System",
    body:
      "A GPS fleet-tracking and dispatch platform giving operators live vehicle locations, routes and delivery status.",
    status: "Completed",
    stats: [["150+", "Vehicles tracked"], ["24/7", "Monitoring"]],
    grad: "from-navy-950 via-teal to-lime",
    kind: "truck",
  },
];

export const partners = [
  { name: "Hormuud Salaam Foundation", logo: "/logos/hsf.png" },
  { name: "Save the Children", logo: "/logos/save-the-children.png" },
  { name: "Asal Institute of Agriculture", logo: "/logos/aia.png" },
  { name: "Titanium Construction & Real Estate", logo: "/logos/titanium.png" },
  { name: "BlueXpress Technologies", logo: "/logos/bluexpress.png" },
  { name: "Dekedda Muqdisho (MPA)", logo: "/logos/mpa.png" },
  { name: "Tropikal", logo: "/logos/tropikal.png" },
  { name: "Ecozen", logo: "/logos/ecozen.png" },
];

// To use real photos: drop the image in client/public/team/ (e.g. ceo.jpg) and set
// its path in `photo` below (e.g. photo: "/team/ceo.jpg"). Leave "" to use the avatar.
export const team = [
  { slug: "ceo", name: "Cabdiraxmaan Yuusuf", role: "Founder & CEO", photo: "/team/ceo.jpg" },
  { slug: "cto", name: "Hodan Cabdi", role: "Chief Technology Officer", photo: "/team/cto.jpg" },
  { slug: "eng", name: "Maxamed Faarax", role: "Head of Software Engineering", photo: "/team/eng.jpg" },
  { slug: "cloud", name: "Fadumo Aadan", role: "AI & Data Lead", photo: "/team/cloud.jpg" },
  { slug: "sec", name: "Cabdullahi Xasan", role: "Cybersecurity Lead", photo: "/team/sec.jpg" },
  { slug: "cx", name: "Sagal Maxamuud", role: "Head of Client Solutions", photo: "/team/cx.jpg" },
];
