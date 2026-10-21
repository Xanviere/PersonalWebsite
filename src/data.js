export const personalInfo = {
  name: "Utkarsh Srivastava",
  title: "Undergraduate Researcher · Theoretical Computer Science",
  tagline: "Undergraduate researcher interested in theoretical computer science and chasing new, interesting problems.",
  about: "I am an undergraduate at Vellore Institute of Technology interested in theoretical computer science. My research has primarily focused on multi-armed bandits and sequential decision-making, along with some empirical work on multi-agent LLM systems.\n\nMy primary focus is theoretical CS, but I won't say no to any problem as long as it's interesting. I am currently preparing for PhD applications.",
  email: "utkarsh.srivastava.1602@gmail.com",
  institutionalEmail: "utkarsh.srivastava2023@vitstudent.ac.in",
  linkedin: "https://www.linkedin.com/in/utkarsh-srivastava-0a88a6219/",
  github: "/github",
  orcid: "https://orcid.org/0009-0000-7044-8781",
  cv: "/resume.pdf",
  university: "Vellore Institute of Technology"
};

export const education = [
  {
    id: 1,
    degree: "B.Tech. in Computer Science and Engineering (Bioinformatics)",
    institution: "Vellore Institute of Technology, Vellore",
    duration: "2023 – 2027",
    gpa: "9.1 / 10.0",
    rank: "Rank 6 / 150",
    honors: "Recipient of the VIT Merit Scholarship (2025–2026) for academic excellence, ranking 6th out of 150 in the cohort."
  }
];

export const research = [
  {
    id: 1,
    topic: "On Non-Stationary Constrained Multi-Armed Bandits",
    shortTitle: "On Non-Stationary Constrained Multi-Armed Bandits",
    shortVenue: "TMLR",
    duration: "2025 – 2026",
    authors: [
      { name: "Utkarsh Srivastava", isSelf: true },
      { name: "Ashish R. Hota", affiliation: "IIT Kharagpur" }
    ],
    description: "Formulated two adaptive variants of the Constraint Lower Confidence Bound algorithm—sliding-window (SW-CON-LCB) and exponentially discounted (D-CON-LCB)—for piecewise-stationary environments with abrupt shifts in reward and constraint distributions. Derived finite-time theoretical upper bounds on expected suboptimal and infeasible arm selections, proving O(T^((1+v)/2)) regret growth under O(T^v) breakpoints, and validated the guarantees on clinical antimicrobial resistance (AMR) datasets.",
    status: "Under Review",
    statusNote: "3 reviews received · Rebuttals submitted",
    venue: "Transactions on Machine Learning Research (TMLR)",
    tags: ["Constrained Bandits", "Non-Stationary Environments", "Finite-Time Regret Bounds"],
    link: "https://openreview.net/pdf?id=Hi6Jwtya6x",
    links: [
      { label: "Paper (PDF)", url: "https://openreview.net/pdf?id=Hi6Jwtya6x", type: "pdf" },
      { label: "OpenReview Forum", url: "https://openreview.net/forum?id=Hi6Jwtya6x", type: "external" }
    ]
  },
  {
    id: 2,
    topic: "Robustness of LLM Committees to Byzantine Persuasion and Sleeper Agents",
    shortTitle: "Robustness of LLM Committees to Byzantine Persuasion and Sleeper Agents",
    shortVenue: "IEEE OJ-CS",
    duration: "2026",
    authors: [
      { name: "Utkarsh Srivastava", isSelf: true },
      { name: "Avidha Halder" },
      { name: "Kathiravan Srinivasan" }
    ],
    description: "Investigated multi-agent deliberation committees' vulnerability to application-layer Byzantine insider persuasion and sleeper defectors across paired benchmark evaluations on MATH-500, LiveCodeBench, and HumanEval+. Formalized a causal counterfactual branching framework (AAE = AER - CCR) on frozen Round 0 anchors, demonstrating that native test-time reasoning buffers models against deceptive rhetoric, while standard instruction-tuned panels suffer acute susceptibility. Evaluated multi-attacker collusion dynamics, pre-consensus execution-verifier gates, and longitudinal Bayesian trust filtering.",
    status: "Under Review",
    venue: "IEEE Open Journal of the Computer Society (OJ-CS)",
    tags: ["Byzantine Fault Tolerance", "Multi-Agent Deliberation", "Persuasion Attacks", "Bayesian Trust Filtering"],
    link: "/papers/byzantine-persuasion-sleeper-agents.pdf",
    links: [
      { label: "Paper (PDF)", url: "/papers/byzantine-persuasion-sleeper-agents.pdf", type: "pdf" },
      { label: "Code (GitHub)", url: "/github?repo=Robustness-of-LLM-Committees-to-Static-and-Trust-Building-Byzantine-Agents", type: "external" }
    ]
  },
  {
    id: 3,
    topic: "An Adaptive Security Selection Framework for Resource-Constrained IoT Devices Using the LinUCB Algorithm",
    shortTitle: "Adaptive Security Selection in IoT via LinUCB",
    shortVenue: "IEEE INDISCON 2026",
    duration: "2026",
    authors: [
      { name: "Utkarsh Srivastava", isSelf: true },
      { name: "Avidha Halder" },
      { name: "Selvi M" }
    ],
    description: "Modeled adaptive cryptographic cipher selection on resource-constrained microcontrollers as a contextual multi-armed bandit. Designed a hardware-efficient LinUCB policy using O(d²) Sherman-Morrison rank-1 inverse covariance updates to learn a first-order linear approximation of non-linear battery depletion and threat dynamics, achieving 97.2% of Oracle cumulative reward efficiency.",
    status: "Published",
    venue: "IEEE INDISCON 2026",
    tags: ["Contextual Bandits", "LinUCB", "Sherman-Morrison Updates"],
    link: "/papers/adaptive-security-iot-linucb.pdf",
    links: [
      { label: "Paper (PDF)", url: "/papers/adaptive-security-iot-linucb.pdf", type: "pdf" }
    ]
  }
];
