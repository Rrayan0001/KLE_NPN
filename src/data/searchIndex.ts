export interface SearchItem {
  title: string;
  href: string;
  category: string;
  description: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  {
    title: "Home / Welcome Page",
    href: "/",
    category: "Navigation",
    description: "KLE G.I.Bagewadi College Nipani home page featuring admissions, stats, facilities, and placement partners.",
    keywords: ["home", "main", "welcome", "klenpn", "nipani", "college"]
  },
  {
    title: "Admissions 2026-27",
    href: "/admission",
    category: "Admission",
    description: "Apply online for undergraduate and postgraduate courses at G.I.Bagewadi College.",
    keywords: ["admission", "apply", "register", "ug", "pg", "course", "fees"]
  },
  {
    title: "Integrated Teacher Education Program (ITEP)",
    href: "/itep",
    category: "Programmes",
    description: "Specialized 4-year dual-degree ITEP program for future teachers.",
    keywords: ["itep", "teacher", "education", "dual degree", "bed", "admissions"]
  },
  {
    title: "NAAC Certificates",
    href: "/certificates",
    category: "NAAC",
    description: "View accreditation certificates from the 4th cycle of NAAC (A Grade, 3.10 CGPA).",
    keywords: ["naac", "accreditation", "certificate", "grade", "cgpa", "cycle 4"]
  },
  {
    title: "SSR (Self Study Report) Documents",
    href: "/ssr",
    category: "NAAC",
    description: "Self Study Report (SSR) files and metric links for NAAC evaluation.",
    keywords: ["ssr", "self study", "documents", "naac docs", "cycle 4"]
  },
  {
    title: "Placement Cell & Placement Details",
    href: "/placements",
    category: "Student Support",
    description: "Details of campus placement training, past records, and recruiting partners.",
    keywords: ["placements", "recruiters", "jobs", "careers", "placed students", "companies"]
  },
  {
    title: "Library & Information Center",
    href: "/library",
    category: "Infrastructure",
    description: "Access books, journals, referencing materials, and e-learning resources.",
    keywords: ["library", "books", "reading room", "study", "reference", "journals"]
  },
  {
    title: "About the College (History)",
    href: "/aboutclg",
    category: "About College",
    description: "Established in 1961, G.I.Bagewadi College Nipani provides high quality education in rural Belagavi.",
    keywords: ["about", "history", "establishment", "1961", "society", "bagewadi"]
  },
  {
    title: "Principal's Message",
    href: "/principal",
    category: "About College",
    description: "Read statement and welcoming words from the Principal of G.I.Bagewadi College.",
    keywords: ["principal", "message", "welcome", "head", "administration"]
  },
  {
    title: "Chairman's Message",
    href: "/chairman-msg",
    category: "KLE Society",
    description: "Greeting and vision statement from Shri Amit P. Kore, Chairman of KLE Society.",
    keywords: ["chairman", "amit kore", "prabhakar kore", "kle society", "message", "board"]
  },
  {
    title: "Vision & Mission Statement",
    href: "/vismis",
    category: "About College",
    description: "Explore the academic vision, mission statements, and core quality policies.",
    keywords: ["vision", "mission", "motto", "quality policy", "objectives"]
  },
  {
    title: "Bachelor of Arts (B.A.)",
    href: "/ba",
    category: "Programmes",
    description: "Undergraduate curriculum and options in humanities and social sciences.",
    keywords: ["ba", "arts", "humanities", "history", "political science", "languages"]
  },
  {
    title: "Bachelor of Science (B.Sc.)",
    href: "/bsc",
    category: "Programmes",
    description: "Undergraduate course details for physics, chemistry, mathematics, botany, and zoology.",
    keywords: ["bsc", "science", "physics", "chemistry", "mathematics", "botany", "zoology"]
  },
  {
    title: "Bachelor of Commerce (B.Com.)",
    href: "/comm",
    category: "Programmes",
    description: "Curriculum and subject details for accounting, finance, taxation, and management.",
    keywords: ["bcom", "commerce", "accounts", "finance", "business"]
  },
  {
    title: "Master of Commerce (M.Com.)",
    href: "/mcom",
    category: "Programmes",
    description: "Postgraduate courses in advanced business, accounting, and financial management.",
    keywords: ["mcom", "master", "commerce pg", "finance", "corporate"]
  },
  {
    title: "Master of Science (M.Sc. Mathematics)",
    href: "/msc",
    category: "Programmes",
    description: "Postgraduate degree in higher mathematics and scientific computing.",
    keywords: ["msc", "maths", "mathematics pg", "algebra", "calculus"]
  },
  {
    title: "Master of Arts (M.A. English)",
    href: "/ma",
    category: "Programmes",
    description: "Postgraduate course covering English literature, criticism, and linguistics.",
    keywords: ["ma", "english", "literature", "linguistics", "criticism"]
  },
  {
    title: "IQAC Composition & Working Committee",
    href: "/iqacworkingcomittee",
    category: "IQAC",
    description: "Internal Quality Assurance Cell composition, structure, and coordinator details.",
    keywords: ["iqac", "quality", "committee", "coordinator", "composition"]
  },
  {
    title: "NSS (National Service Scheme)",
    href: "/nss",
    category: "Student Support",
    description: "Social service, camps, and community development activities by NSS units.",
    keywords: ["nss", "service", "camp", "social work", "volunteers"]
  },
  {
    title: "NCC (National Cadet Corps)",
    href: "/ncc",
    category: "Student Support",
    description: "Defence and cadet training details, camps, certificates, and achievements.",
    keywords: ["ncc", "cadets", "training", "army", "b certificate", "c certificate"]
  },
  {
    title: "Sports & Physical Education",
    href: "/sports",
    category: "Student Support",
    description: "Indoor games, athletic tracks, gym, and inter-collegiate sports championship records.",
    keywords: ["sports", "gymkhana", "games", "athletics", "swimming", "tournaments"]
  },
  {
    title: "Photo Gallery & Events",
    href: "/gallery",
    category: "In Focus",
    description: "Explore photos of campus, cultural events, laboratories, and student activities.",
    keywords: ["gallery", "photos", "images", "events", "celebrations", "campus life"]
  }
];
