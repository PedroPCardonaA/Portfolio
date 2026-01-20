export const site = {
  name: "Pedro Cardona",
  role: "Software Engineer / AI MSc",
  location: "Norway",
  tagline: "I build pragmatic AI-powered products and robust backends.",
  description:
    "Portfolio showcasing selected projects, experience, and ways to get in touch.",
  email: "you@example.com",
  social: [
    { label: "GitHub", href: "https://github.com/PedroPCardonaA" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
  ],
};

export const highlights = [
  "AI/ML: recommendation systems, embeddings, evaluation",
  "Backend: Node.js, APIs, databases, real-time (Socket.IO)",
  "Cloud & DevOps: Docker, CI, production readiness",
];

export const skills = [
  "Python",
  "TypeScript / Node.js",
  "SQL (BigQuery/MySQL)",
  "Docker",
  "TensorFlow / Keras",
  "Rust",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  highlights?: string[];
  year?: string | number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "News Recommender (Content-Based + Hybrid)",
    description:
      "Built and evaluated recommenders using embeddings and user-article interactions, optimizing for accuracy/diversity.",
    tags: ["Recommenders", "Embeddings", "Evaluation"],
    links: [{ label: "Repo", href: "https://github.com/your/repo" }],
  },
  {
    title: "Real-time Rooms & File Sharing (Socket.IO)",
    description:
      "Room/user lifecycle, disconnections, and file uploads in a structured per-room folder layout.",
    tags: ["Node.js", "Socket.IO", "Backend"],
    links: [{ label: "Repo", href: "https://github.com/your/repo" }],
  },
  {
    title: "CSP Scheduling / Match Distribution",
    description:
      "Constraint satisfaction approach with domain rules and backtracking/consistency checks.",
    tags: ["CSP", "Search", "Rust"],
  },
];

export const experience = [
  {
    title: "AI / Data Engineering (Summer Job)",
    org: "—",
    period: "2024",
    bullets: [
      "Translated natural language into SQL against BigQuery datasets.",
      "Implemented prompt patterns for analysis workflows and reliability.",
    ],
  },
  {
    title: "MSc Computer Science (AI Specialization)",
    org: "—",
    period: "Ongoing",
    bullets: [
      "Deep learning, clustering, RL environments, explainability (SHAP).",
      "Hands-on projects across Python/Rust/TypeScript stacks.",
    ],
  },
];
