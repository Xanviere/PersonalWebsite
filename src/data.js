export const personalInfo = {
  name: "Utkarsh Srivastava",
  title: "Undergraduate Researcher",
  about: "I am a Bachelor's student deeply curious about the underlying mechanics of our world. My academic focus lies at the intersection of theoretical research and practical application. I am actively seeking opportunities to contribute to impactful lab research and pursue graduate studies.",
  email: "utkarsh.srivastava2023@vitstudent.ac.in",
  linkedin: "https://www.linkedin.com/in/utkarsh-srivastava-0a88a6219/",
  cv: "/resume.pdf"
};

export const education = [
  {
    id: 1,
    degree: "B.Tech. in Computer Science and Engineering (Bioinformatics)",
    institution: "Vellore Institute of Technology",
    duration: "2023 - 2027",
    gpa: "9.1/10",
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
    link: "/papers/adaptive-security-iot-linucb.pdf",
    links: [
      { label: "Paper (PDF)", url: "/papers/adaptive-security-iot-linucb.pdf", type: "pdf" }
    ]
  }
];

export const interests = [
  "Theoretical Computer Science",
  "Machine Learning",
  "Systems Biology",
  "Computational Biology"
];

export const achievements = [
  {
    id: 1,
    title: "Merit List",
    organization: "Vellore Institute of Technology",
    year: "2025 - 2026",
    description: "Awarded for ranking 6th of the academic cohort."
  }
];
