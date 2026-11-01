export const profile = {
  name: "Amit Kumar Tiwari",
  first: "Amit Kumar",
  last: "Tiwari",
  designation: "Database Architect  |  Senior Backend Engineer",
  roleLine: "Database architect",
  location: "Indore, Madhya Pradesh, India",
  email: "mailamittiwari@gmail.com",
  phone: "+91-89898-33330",
  phoneHref: "tel:+918989833330",
  linkedin: "https://www.linkedin.com/in/amit-tiwari-9a7b5b12b/",
  linkedinLabel: "linkedin.com/in/amit-tiwari-9a7b5b12b",
  availability: "Open to remote, hybrid, and on-site opportunities",
  languages: ["English", "Hindi"],
  systems: "Linux (Red Hat, CentOS, Fedora, SUSE), Windows",
  resumePdf: "/Amit-Kumar-Tiwari-Resume.pdf",
  resumeDocx: "/Amit-Kumar-Tiwari-Resume.docx",
} as const;

export const summary = [
  "Database architect and senior backend engineer with 20+ years of hands-on experience designing, optimizing, and operating large-scale enterprise and financial systems.",
  "Deep expertise in PostgreSQL performance engineering, wallet and ledger architectures, high-volume transaction platforms, and cloud-hosted backend services on Google Cloud and AWS.",
  "Proven delivery of reliable, secure, and scalable data platforms — production databases exceeding 450GB, complex financial workflows, and mission-critical operations.",
];

export const nav = [
  { href: "#overview", id: "overview", label: "Overview" },
  { href: "#expertise", id: "expertise", label: "Expertise" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#solutions", id: "solutions", label: "Solutions" },
  { href: "#resume", id: "resume", label: "Résumé" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const facts = [
  "20+ years",
  "450GB+ production databases",
  "Google Cloud and AWS",
  "Wallets, ledgers, ERP",
] as const;

export const highlights = [
  {
    value: 20,
    unit: "+",
    accent: false,
    label: "Years",
    note: "Hands-on practice across enterprise software and financial systems.",
  },
  {
    value: 450,
    unit: "GB+",
    accent: true,
    label: "Production data",
    note: "Database engineering on systems that grew past this size.",
  },
  {
    value: 2,
    unit: "",
    accent: false,
    label: "Clouds",
    note: "Production delivery on Google Cloud and Amazon Web Services.",
  },
  {
    value: 14,
    unit: "yr",
    accent: true,
    label: "At Elbiz",
    note: "September 2005 to July 2019, then ESP Softtech to the present.",
  },
] as const;

export const ribbon = [
  "Nginx",
  "Ledgers",
  "Wallets",
  "ETL",
  "PITR",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Oracle",
  "PL/pgSQL",
  "Node.js",
  "PHP",
  "REST",
  "Cloud SQL",
  "GKE",
  "Cloud Run",
  "AWS RDS",
  "Aurora",
  "Docker",
] as const;

export const arc = [
  { year: "1999", title: "B.Com", detail: "Devi Ahilya Vishwavidyalaya" },
  { year: "2001", title: "M.Com & Diploma", detail: "DAVV · C-DAC Pace" },
  { year: "2005", title: "Elbiz Systems", detail: "ERP, e-governance, migrations" },
  { year: "2019", title: "ESP Softtech", detail: "Wallets, ledgers, cloud" },
  { year: "Now", title: "Available", detail: "Remote, hybrid, or on-site" },
] as const;

export const layers = [
  {
    id: "edge",
    index: "01",
    label: "Service edge",
    title: "APIs that can be retried without double-posting.",
    body: "Node.js and PHP/CodeIgniter REST services in front of financial writes. Idempotency, access control, and audit trails sit on the path before a balance ever changes.",
    chips: ["Node.js", "PHP / CodeIgniter", "REST", "Idempotency", "Access control"],
    trace: "POST /withdrawals   idempotency-key   begin",
  },
  {
    id: "ledger",
    index: "02",
    label: "Ledger core",
    title: "Money movement with a state you can explain later.",
    body: "Wallet balances, double-entry ledgers, subscription lifecycles, commission engines, vesting, and payout approvals — with settlement records and reconciliation, not just a displayed number.",
    chips: ["Wallets", "Double-entry", "Subscriptions", "Payouts", "Audit"],
    trace: "debit 100   credit 100   ref=wd_1842   status=settled",
  },
  {
    id: "postgres",
    index: "03",
    label: "PostgreSQL",
    title: "The database does the work that has to stay correct.",
    body: "PL/pgSQL functions and triggers for referral trees, staking, vesting, matching, and rewards. Partial indexes, large-table tuning, and role permissions scoped to the job — including production databases beyond 450GB.",
    chips: ["PL/pgSQL", "Partial indexes", "Triggers", "Roles", "450GB+"],
    trace: "walk_referral_tree()   partial index   role=ledger_writer",
  },
  {
    id: "cloud",
    index: "04",
    label: "Cloud plane",
    title: "GCP and AWS, kept reachable when something breaks.",
    body: "Compute Engine, Cloud SQL, GKE, Cloud Run, Cloud Build, and the AWS side: EC2, RDS, Aurora, App Runner, S3, SES. Docker, Nginx, PM2, Cloudflare, backups, and incident response on the Linux edge.",
    chips: ["GCP", "AWS", "Docker", "Nginx", "CI/CD"],
    trace: "cloud sql   pitr   nginx   cloudflare   backup ok",
  },
] as const;

export const expertise = [
  {
    index: "01",
    title: "Databases & data engineering",
    summary:
      "Schema design, query performance, and recovery — PostgreSQL at the centre, with the other engines the migrations required.",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Oracle (migration)",
      "PL/pgSQL",
      "Stored functions & triggers",
      "Indexing strategies",
      "Query optimization",
      "Schema design",
      "Replication",
      "ETL & data validation",
      "Point-in-time recovery",
    ],
  },
  {
    index: "02",
    title: "Architecture & backend",
    summary: "Service boundaries and transaction behaviour where a write has to be traceable, repeatable, and safe to retry.",
    items: [
      "System & API architecture",
      "Transaction workflows",
      "Idempotency patterns",
      "Reliability engineering",
      "Access control",
      "Audit trails",
      "REST APIs",
      "Node.js",
      "PHP / CodeIgniter",
    ],
  },
  {
    index: "03",
    title: "Cloud & infrastructure",
    summary: "Production hosting, delivery pipelines, and the Linux edge in front of the databases.",
    items: [
      "Compute Engine, Cloud SQL",
      "GKE, Cloud Run, Cloud Build",
      "Cloud Storage, IAM, Monitoring",
      "EC2, RDS, Aurora",
      "App Runner, S3, SES",
      "Docker & Linux",
      "Nginx & PM2",
      "CI/CD, Cloudflare, SSL/TLS",
    ],
  },
  {
    index: "04",
    title: "Domain expertise",
    summary: "The subject matter the schemas were built to carry — money movement, payouts, and large operational systems.",
    items: [
      "Fintech wallets & ledgers",
      "Subscription & commission engines",
      "Vesting & payout systems",
      "Blockchain-integrated workflows",
      "Fantasy sports platforms",
      "ERP & e-governance",
    ],
  },
] as const;

export const roles = [
  {
    id: "esp",
    range: "2019 — Present",
    dates: "November 2019 – Present",
    status: "Current",
    title: "Senior Software Engineer & Database Analyst",
    org: "ESP Softtech Pvt. Ltd.",
    place: "Indore",
    points: [
      "Architect and maintain high-performance PostgreSQL and MySQL schemas, data access layers, and Node.js REST services powering transaction-intensive financial and web platforms.",
      "Designed and implemented end-to-end wallet balances, double-entry ledger systems, subscription lifecycles, payout and withdrawal approval workflows, audit trails, and reconciliation processes.",
      "Developed complex database functions, triggers, scheduled jobs, partial indexes, and role-based security controls supporting referral trees, staking, vesting, matching, and reward calculation engines.",
      "Engineered and operated production workloads on Google Cloud — Compute Engine, Cloud SQL, GKE, Cloud Run, and Cloud Build — including IAM, service connectivity, automated backups, and monitoring.",
      "Managed AWS and Linux-based production services using Docker, Nginx, PM2, Cloudflare, and CI/CD; diagnosed deployment, networking, and dependency issues under production pressure.",
      "Contributed to blockchain-integrated digital-asset platforms covering token subscription records, virtual rewards, wallet accounting, and secure withdrawal processing.",
      "Built backend systems for fantasy sports contests including scoring, leaderboards, and settlement workflows, while supporting multi-level referral structures and commission payout cycles.",
      "Strengthened reliability through transaction controls, idempotency patterns, access restrictions, backup strategies, and continuous SQL performance tuning.",
    ],
  },
  {
    id: "elbiz",
    range: "2005 — 2019",
    dates: "September 2005 – July 2019",
    status: "Previous",
    title: "Senior Software Engineer",
    org: "Elbiz Systems Pvt. Ltd.",
    place: "",
    points: [
      "Led database architecture and engineering for large-scale enterprise ERP, e-governance, and citizen-service platforms, including production databases exceeding 450GB.",
      "Planned and executed complex data migrations across PostgreSQL, Oracle, SQL Server, MySQL, MS Access, and Excel using ETL, reconciliation, and data-integrity validation.",
      "Designed reporting frameworks and backend integrations; implemented replication, backup strategies, disaster recovery planning, and SQL performance optimization for high-availability environments.",
      "Modernized legacy data models and applications while supporting payment processing and municipal service workflows across government and enterprise clients.",
    ],
  },
] as const;

export const systems = [
  {
    name: "Digital asset platforms",
    kind: "Blockchain-integrated",
    note: "Token subscription records, virtual rewards, wallet accounting, and secure withdrawal processing.",
  },
  {
    name: "Fantasy sports",
    kind: "Contest platform",
    note: "Scoring, leaderboards, and settlement workflows on the same transaction discipline as the ledgers.",
  },
  {
    name: "Referral & commission",
    kind: "Referral networks",
    note: "Referral-tree traversal, matching, staking, vesting, and commission payout cycles.",
  },
  {
    name: "ERP & e-governance",
    kind: "Elbiz, 2005–2019",
    note: "Citizen-service and enterprise platforms, migrations, and production databases beyond 450GB.",
  },
] as const;

export const solutions = [
  {
    index: "01",
    title: "Financial platform architecture",
    summary:
      "Wallet and transaction ledger systems with clear payout state transitions, credit and burn flows, settlement records, and full auditability.",
    points: [
      "Wallet balances and double-entry ledger design",
      "Subscription lifecycles and commission structures",
      "Payout and withdrawal approval workflows",
      "Credit and burn flows, with settlement records",
      "Idempotency and transaction controls on financial writes",
    ],
  },
  {
    index: "02",
    title: "PostgreSQL engineering",
    summary:
      "Complex stored functions for referral-tree traversal and reward calculations, partial indexes, large-table tuning, and tightly scoped database roles.",
    points: [
      "PL/pgSQL functions, triggers, and scheduled jobs",
      "Referral trees, staking, vesting, matching, and rewards",
      "Partial indexes and large-table query tuning",
      "Schema design across PostgreSQL and MySQL",
      "Tightly scoped database role permissions",
    ],
  },
  {
    index: "03",
    title: "Cloud delivery & operations",
    summary: "Automated build-to-VM pipelines, Nginx reverse proxies, and production incident response across GCP and AWS.",
    points: [
      "Compute Engine, Cloud SQL, GKE, Cloud Run, Cloud Build",
      "IAM, monitoring, automated backups, service connectivity",
      "EC2, RDS, Aurora, App Runner, S3, and SES",
      "Docker, Linux, Nginx, PM2, Cloudflare, and CI/CD",
      "GCP networking and reverse-proxy incidents",
    ],
  },
  {
    index: "04",
    title: "Data lifecycle & security",
    summary: "Backup and retention, point-in-time recovery, migration validation gates, and database security controls.",
    points: [
      "Backup strategy, retention, and disaster-recovery planning",
      "Replication and point-in-time recovery",
      "Migrations across PostgreSQL, Oracle, SQL Server, MySQL, Access, and Excel",
      "ETL, reconciliation, and migration validation gates",
      "Access restrictions and database security controls",
    ],
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "Reliability",
    body: "Transaction controls, idempotency, and production incident response for systems that cannot drop a financial event.",
  },
  {
    index: "02",
    title: "Data integrity",
    body: "Reconciliation, migration validation, and audit trails, so a balance can be explained rather than merely displayed.",
  },
  {
    index: "03",
    title: "Performance",
    body: "Query tuning, partial indexes, and large-table technique — including on production databases beyond 450GB.",
  },
  {
    index: "04",
    title: "Security",
    body: "Role-scoped database permissions, access control, and withdrawal and payout paths that stay restricted.",
  },
  {
    index: "05",
    title: "Scalability",
    body: "Schema and service design for high-volume transaction platforms hosted on Google Cloud and AWS.",
  },
  {
    index: "06",
    title: "Maintainability",
    body: "Stored functions, clear payout state transitions, and data models an operations team can keep running.",
  },
  {
    index: "07",
    title: "Operational excellence",
    body: "Backups, replication, monitoring, and build-to-VM pipelines treated as part of the design, not an afterthought.",
  },
] as const;

export const education = [
  {
    year: "2001",
    credential: "Diploma in Computer Programming",
    school: "C-DAC Pace",
  },
  {
    year: "2001",
    credential: "Master of Commerce (M.Com)",
    school: "Devi Ahilya Vishwavidyalaya (DAVV)",
  },
  {
    year: "1999",
    credential: "Bachelor of Commerce (B.Com)",
    school: "Devi Ahilya Vishwavidyalaya (DAVV)",
  },
] as const;

export const practiceAreas = [
  "Enterprise database architecture",
  "High-performance PostgreSQL engineering",
  "Financial transaction systems",
  "Backend and API architecture",
  "Cloud infrastructure on GCP and AWS",
  "Production reliability and recovery",
  "Database security and optimisation",
] as const;
