export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'backend' | 'ai' | 'automation' | 'upcoming';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: string[];
  featured: boolean;
  isPlaceholder?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  techStack: string[];
  impactMetrics: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  badge?: string;
  experience?: string;
  context?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description?: string;
  skills: SkillItem[];
}

export interface Achievement {
  title: string;
  platform: string;
  detail: string;
  badge: string;
  icon: string;
  url?: string;
}

export const PERSONAL_INFO = {
  name: "Anwesh Patnaik",
  title: "Java Backend Developer & Quality Specialist",
  subTitle: "Enterprise Banking Systems | REST API Architectures | Prompt & Context Engineering",
  location: "Bangalore, India",
  phone: "+91-9040066266",
  email: "anwesh2523@gmail.com",
  github: "https://github.com/patnaikAnwesh",
  linkedin: "https://www.linkedin.com/in/anwesh-patnaik-8a175727b/",
  leetCode: "https://leetcode.com/u/anwesh_3/",
  codeChef: "https://www.codechef.com/users/anwesh_3",
  hackerRank: "https://www.hackerrank.com/profile/patnaikanwesh13",
  resumePdf: "/Anwesh_Patnaik_Resume.pdf",
  bio: "Java Backend Developer and Quality Specialist at TCS with hands-on experience building scalable backend services and transaction-processing logic for a large enterprise banking fraud-detection platform using Java, Spring Boot, and Docker. Skilled in REST API design, database query optimization, rule-based fraud alerting, test automation with Selenium and Cucumber BDD, and AI-assisted development through prompt and context engineering.",
  stats: [
    { label: "API Latency Reduction", value: "25%" },
    { label: "E2E Automated Scenarios", value: "150+" },
    { label: "HackerRank Java", value: "5-Star" },
    { label: "LeetCode Peak Rating", value: "1592" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Java Backend Developer & Quality Specialist",
    company: "Tata Consultancy Services (TCS)",
    location: "Bangalore, India",
    period: "Nov 2025 – Present",
    summary: "Working as a cross-functional Java backend developer and quality specialist on a large enterprise banking fraud-detection platform, engineering core transaction-processing services, business logic, and automated testing suites.",
    bullets: [
      "Built 5+ real-time transaction-monitoring microservices using Java, Spring Boot, Docker, and Kafka for credit card, debit card, and gift card processing.",
      "Developed backend transaction-flow logic applying rule-based fraud detection (Brainiac rules engine) across 10+ configurable rules with real-time alerts to merchants and users.",
      "Designed event-driven, asynchronous message processing pipelines for transaction flows, improving system throughput by 20% and decoupling service dependencies.",
      "Automated testing of transaction and fraud-alert flows using Selenium and Cucumber BDD, covering 150+ end-to-end test scenarios.",
      "Leverage GitHub Copilot for AI-assisted development, applying prompt-based engineering to build Copilot-driven automation workflows that cut manual coding effort by 50% per business requirements.",
      "Optimized backend SQL and PL/SQL queries with indexing, query execution plan tuning, and pagination, reducing API response times by 25%."
    ],
    techStack: ["Java", "Spring Boot", "Spring Security", "REST APIs", "SQL", "PL/SQL", "Docker", "Selenium", "Cucumber BDD", "GitHub Copilot"],
    impactMetrics: [
      { label: "API Latency Cut", value: "-25%" },
      { label: "Throughput Boost", value: "+20%" },
      { label: "Manual Effort Saved", value: "50%" },
      { label: "Automated E2E Tests", value: "150+" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "airport-cab-pooling",
    title: "Airport Cab Pooling System",
    subtitle: "Backend Shared Mobility Engine & Ride Matching",
    description: "Spring Boot backend that groups airport passengers into shared cabs using a greedy ride-matching algorithm, with demand-based dynamic pricing and a 30% pooling discount for shared rides.",
    longDescription: "Engineered a transactional ride-pooling backend with optimistic locking and automatic retries on booking-conflict, real-time cancellation that frees seats for reuse, and a global exception handler returning consistent error bodies with correct HTTP codes. Exposes a fully documented REST API via SpringDoc OpenAPI (Swagger UI).",
    category: "backend",
    tags: ["Java 17", "Spring Boot", "REST APIs", "SpringDoc OpenAPI", "Concurrency", "H2"],
    githubUrl: "https://github.com/patnaikAnwesh/Airport-Cab-Pooling",
    liveUrl: "https://airport-cab-pooling.onrender.com/swagger-ui/index.html",
    metrics: ["Greedy Ride Matching", "Dynamic Pricing + 30% Pooling Discount", "Concurrency-Safe Booking (Optimistic Locking)"],
    featured: true
  },
  {
    id: "banking-portal",
    title: "Banking Portal Platform",
    subtitle: "Enterprise Backend Financial Engine & RBAC",
    description: "Secure banking backend application engineered with Java, Spring Boot, JWT authentication, BCrypt password hashing, and role-based access control (RBAC) across 3+ user roles.",
    longDescription: "Built ACID-compliant transaction processing with concurrency control, ensuring 100% data consistency; improved backend database performance by 30% using indexed SQL queries and pagination.",
    category: "backend",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "JPA"],
    githubUrl: "https://github.com/patnaikAnwesh/Banking-Portal",
    metrics: ["100% Data Consistency", "30% Performance Boost", "RBAC Security"],
    featured: true
  },
  {
    id: "myntra-scraper-automation",
    title: "Myntra Scraper & Automation Framework",
    subtitle: "Java Web Scraping & BDD Data Validation",
    description: "Java-based web scraping and automation framework designed to extract and validate 200+ product records in under 2 minutes for data-quality testing.",
    longDescription: "Increased test automation coverage by 40% by implementing behavior-driven test scenarios with Cucumber BDD and Playwright for e-commerce data validation.",
    category: "automation",
    tags: ["Java", "Playwright", "Cucumber BDD", "Selenium", "Data QA"],
    githubUrl: "https://github.com/patnaikAnwesh/Myntra-Scrapper",
    metrics: ["200+ Records in <2 Mins", "+40% Test Coverage", "Automated Quality Assurance"],
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Engineering & Core Java",
    iconName: "Server",
    description: "Enterprise microservices, REST architectures, and multi-threaded JVM applications",
    skills: [
      { name: "Java 17 / Core Java", highlight: true, badge: "Enterprise Core", experience: "Daily Driver", context: "JVM internals, OOP, multi-threading" },
      { name: "Spring Boot", highlight: true, badge: "Production", experience: "Daily Driver", context: "Microservices, autowiring, actuators" },
      { name: "REST APIs", highlight: true, badge: "High-Throughput", experience: "Architecture", context: "RESTful contracts, JSON serialization" },
      { name: "Spring Security & JWT", badge: "Secured", experience: "Production", context: "Role-based authorization & tokens" },
      { name: "JPA / Hibernate", badge: "ORM", experience: "Advanced", context: "Entity mapping, cascades, caching" },
      { name: "Node.js & Express", badge: "Runtime", experience: "Proficient", context: "Asynchronous backend scripting" }
    ]
  },
  {
    title: "Databases & Performance Tuning",
    iconName: "Database",
    description: "Relational modeling, query plan optimization, indexing, and containerized deployment",
    skills: [
      { name: "MySQL & SQL", highlight: true, badge: "Optimized", experience: "Daily Driver", context: "Complex joins, views, schema design" },
      { name: "PL/SQL & Query Tuning", highlight: true, badge: "Tuned", experience: "Production", context: "Execution plans, stored procs, 25% latency cut" },
      { name: "Indexing & Pagination", highlight: true, badge: "Latency Cut", experience: "Advanced", context: "B-Tree indexing, cursor & offset pagination" },
      { name: "MongoDB", badge: "NoSQL", experience: "Proficient", context: "Document collections & aggregations" },
      { name: "Docker & Linux", badge: "DevOps", experience: "Production", context: "Containerization & bash scripting" }
    ]
  },
  {
    title: "Testing Automation & Quality Assurance",
    iconName: "CheckCircle",
    description: "Automated regression pipelines, BDD test runners, and end-to-end scenario coverage",
    skills: [
      { name: "Selenium WebDriver", highlight: true, badge: "Automation", experience: "Daily Driver", context: "Automated UI and workflow testing" },
      { name: "Cucumber BDD", highlight: true, badge: "Gherkin BDD", experience: "Daily Driver", context: "150+ automated feature scenarios" },
      { name: "End-to-End Test Automation", highlight: true, badge: "150+ Flows", experience: "Production", context: "Full transaction pipeline validation" },
      { name: "Playwright", badge: "Headless QA", experience: "Proficient", context: "Modern browser automation & assertions" }
    ]
  },
  {
    title: "AI Developer Tools & Context Engineering",
    iconName: "Cpu",
    description: "AI-assisted workflows, structured context injection, and agentic engineering",
    skills: [
      { name: "GitHub Copilot", highlight: true, badge: "Productivity", experience: "Daily Driver", context: "AI pair-programming & code generation" },
      { name: "Prompt Engineering & Design", highlight: true, badge: "Context Master", experience: "Advanced", context: "Zero/few-shot prompts, system constraints" },
      { name: "Context Engineering & Structuring", highlight: true, badge: "Agentic Flow", experience: "Advanced", context: "Token structuring & knowledge injection" },
      { name: "AI Dev Tools (Claude, Cursor, Antigravity)", badge: "Tooling", experience: "Advanced", context: "Modern AI IDEs & agent-driven coding" },
      { name: "Copilot-Driven Automation Workflows", badge: "50% Effort Saved", experience: "Production", context: "Accelerated development pipelines" }
    ]
  },
  {
    title: "Frontend Technologies",
    iconName: "Layout",
    description: "Interactive web applications, responsive user interfaces, and component architectures",
    skills: [
      { name: "React.js", highlight: true, badge: "UI Library", experience: "Proficient", context: "Hooks, state management, component tree" },
      { name: "TypeScript", highlight: true, badge: "Type Safe", experience: "Proficient", context: "Static typing, generics, interfaces" },
      { name: "HTML5 / CSS3 / Bootstrap", badge: "Responsive", experience: "Proficient", context: "Flexbox, Grid, semantic markup" },
      { name: "Angular", badge: "Framework", experience: "Familiar", context: "Components & two-way binding" }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "5-Star Java Proficiency",
    platform: "HackerRank",
    detail: "Attained 5-Star proficiency rating evaluating core Java syntax, OOP design, and problem solving.",
    badge: "5-Star",
    icon: "Star",
    url: "https://www.hackerrank.com/profile/patnaikanwesh13"
  },
  {
    title: "LeetCode Peak Rating 1592",
    platform: "LeetCode",
    detail: "Consistently solved data structures and algorithmic challenges across timed coding contests.",
    badge: "1592 Rating",
    icon: "Code",
    url: "https://leetcode.com/u/anwesh_3/"
  },
  {
    title: "CodeChef Peak Rating 1193",
    platform: "CodeChef",
    detail: "Active participant in rated competitive coding rounds in Division 3.",
    badge: "Div 3",
    icon: "Award",
    url: "https://www.codechef.com/users/anwesh_3"
  },
  {
    title: "Ranked #457 out of 5000+",
    platform: "Job-a-Thon 33",
    detail: "Achieved top 9% standing in competitive coding challenge focused on algorithms and data structures.",
    badge: "Top 9%",
    icon: "Trophy"
  },
  {
    title: "Qualified for HackOn with Amazon",
    platform: "Amazon - Season 4",
    detail: "Qualified for Amazon's national hackathon competition.",
    badge: "Qualified",
    icon: "Zap"
  }
];
