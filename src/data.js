export const personalInfo = {
  name: "Utkarsh Srivastava",
  title: "Undergraduate Researcher & Prospective PhD Applicant",
  tagline: "I research theoretical machine learning and sequential decision-making under uncertainty, with applications to complex dynamical and biological systems.",
  about: "I am an undergraduate researcher at Vellore Institute of Technology focused on theoretical machine learning and sequential decision-making. My work centers on formulating principled algorithms with provable finite-time guarantees—spanning non-stationary & constrained multi-armed bandits, Markov Decision Processes, and dynamical biological networks. I am actively preparing for PhD studies, aiming to develop mathematically rigorous learning frameworks that address fundamental challenges in uncertainty, adaptation, and complex real-world dynamics.",
  email: "utkarsh.srivastava.1602@gmail.com",
  institutionalEmail: "utkarsh.srivastava2023@vitstudent.ac.in",
  linkedin: "https://www.linkedin.com/in/utkarsh-srivastava-0a88a6219/",
  cv: "/resume.pdf",
  university: "Vellore Institute of Technology"
};

export const highlights = [
  {
    badge: "Published",
    venue: "IEEE INDISCON 2026",
    title: "Adaptive Security Selection in IoT using LinUCB",
    link: "#research"
  },
  {
    badge: "Under Review",
    venue: "TMLR",
    title: "Non-Stationary Constrained Bandits",
    link: "#research"
  }
];

export const education = [
  {
    id: 1,
    degree: "B.Tech. in Computer Science and Engineering (Bioinformatics)",
    institution: "Vellore Institute of Technology",
    duration: "2023 - 2027",
    gpa: "9.1 / 10.0",
    details: "Focusing on advanced coursework including Advanced Research Methods, Statistical Analysis, and Capstone Seminar."
  }
];

export const research = [
  {
    id: 1,
    topic: "On Non-Stationary Constrained Multi-Armed Bandits",
    duration: "Fall 2025 - Present",
    pi: "Dr. Ashish R. Hota",
    description: "Investigating the constrained multi-armed bandit problem in non-stationary environments with abrupt changes in reward and constraint distributions. Proposed adaptive extensions of the Constraint Lower Confidence Bound (CLCB) algorithm (sliding-window and exponentially discounted variants) with theoretical sublinear regret bounds and real-world evaluation on clinical microbiology datasets.",
    status: "Under Review at TMLR",
    statusNote: "2 reviews received",
    venue: "Transactions on Machine Learning Research (TMLR)",
    tags: ["Constrained Bandits", "Non-Stationary Environments", "Sublinear Regret Bounds"],
    link: "https://openreview.net/pdf?id=Hi6Jwtya6x",
    links: [
      { label: "Paper (PDF)", url: "https://openreview.net/pdf?id=Hi6Jwtya6x", type: "pdf" },
      { label: "OpenReview Forum", url: "https://openreview.net/forum?id=Hi6Jwtya6x", type: "external" }
    ]
  },
  {
    id: 2,
    topic: "An Adaptive Security Selection Framework for Resource-Constrained IoT Devices Using the LinUCB Algorithm",
    duration: "Winter 2026",
    pi: "Dr. Selvi M",
    coauthors: "Avidha Halder, Selvi M",
    description: "Formulated adaptive cryptographic cipher selection in resource-constrained IoT devices as a contextual multi-armed bandit. Designed a hardware-efficient LinUCB policy using Sherman-Morrison matrix updates to dynamically navigate security-energy trade-offs under continuous non-stationary threat spikes and battery depletion.",
    status: "Published at IEEE INDISCON 2026",
    venue: "IEEE INDISCON 2026",
    tags: ["LinUCB", "Sherman-Morrison Updates", "Edge Microcontrollers", "IoT Security"],
    link: "/papers/adaptive-security-iot-linucb.pdf",
    links: [
      { label: "Read Paper (PDF)", url: "/papers/adaptive-security-iot-linucb.pdf", type: "pdf" }
    ]
  }
];

export const interests = [
  {
    title: "Theoretical Computer Science",
    subtitle: "Stochastic Optimization & Regret Bounds",
    description: "Formulating finite-time regret guarantees, lower bounds, and algorithm complexity for sequential decision-making."
  },
  {
    title: "Machine Learning",
    subtitle: "Bandits, MDPs & Online Learning",
    description: "Designing adaptive algorithms for non-stationary environments, contextual exploration-exploitation trade-offs, and constrained policies."
  },
  {
    title: "Systems Biology",
    subtitle: "Gene Networks & Cell State Transitions",
    description: "Modeling high-dimensional transcriptional dynamics, stochastic cellular state transitions, and biological regulatory feedback."
  },
  {
    title: "Computational Biology",
    subtitle: "Algorithmic Genomics & Biophysics",
    description: "Translating statistical physics and machine learning methods into robust computational models for biological discovery."
  }
];

export const achievements = [
  {
    id: 1,
    title: "Merit Scholarship",
    organization: "Vellore Institute of Technology",
    year: "2025 - 2026",
    description: "Awarded for academic excellence, ranking 6th across the academic cohort."
  }
];
