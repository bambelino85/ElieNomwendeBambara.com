const PROJECTS = [
  {
    title: "TicketWave – Event Ticket Management System",
    category: "Database Management",
    description: "Role-based ticket booking system with admin, organizer, and customer functionality.",
    tech: ["C++", "SQL", "PHP", "MySQL"],
    image: "../Images/projects/ticketwave.png",
    links: { github: "https://github.com/bambelino85", live: "" }
  },
  {
    title: "University Management System",
    category: "Data Structures",
    description: "Console-based system designed with efficient data storage and operations (vector-based records, search, update, and reporting).",
    tech: ["C++", "Data Structures", "STL"],
    image: "../Images/projects/university-management.png",
    links: { github: "https://github.com/bambelino85", live: "" }
  },
  {
    title: "Process Scheduling Simulator",
    category: "Operating Systems",
    description: "Implemented Round Robin, MLFQ, and EDF algorithms in C++ with multithreading to analyze scheduling behavior and CPU utilization.",
    tech: ["C++", "Multithreading", "OS Scheduling"],
    image: "../Images/projects/process-scheduling.png",
    links: { github: "https://github.com/bambelino85", live: "" }
  },
  {
    title: "Serverless Metadata Extraction System",
    category: "Cloud / AWS",
    description: "Event-driven AWS pipeline for ingesting files, extracting metadata, and storing results for search and reporting.",
    tech: ["AWS", "S3", "Lambda", "EventBridge", "DynamoDB"],
    image: "../Images/projects/serverless-metadata.png",
    links: { github: "https://github.com/bambelino85", live: "" }
  },
  {
    title: "SBOM Generator (Senior Design)",
    category: "Cloud / Security",
    description: "Tool to analyze software dependencies and generate standardized SBOM outputs for security and compliance.",
    tech: ["Python", "CycloneDX", "SPDX", "Git"],
    image: "../Images/projects/sbom-generator.png",
    links: { github: "https://github.com/bambelino85", live: "" }
  }
];

const POSTS = [
  {
    id: "post-1",
    date: "March 2026",
    category: "Achievement",
    title: "Wrapped up my AWS Cloud Support internship",
    caption: "Replace this with your own recap — what you built, what you learned, and who helped along the way.",
    image: "../Images/updates/placeholder-1.svg",
    tags: ["AWS", "Internship"],
    linkedinUrl: ""
  },
  {
    id: "post-2",
    date: "January 2026",
    category: "Event",
    title: "Presented at a Senior Design showcase",
    caption: "Swap in a photo from the event and a short caption about what you presented.",
    image: "../Images/updates/placeholder-2.svg",
    tags: ["Senior Design", "SBOM"],
    linkedinUrl: ""
  },
  {
    id: "post-3",
    date: "November 2025",
    category: "Certification",
    title: "Started studying for AWS Solutions Architect",
    caption: "A quick update post — study milestones, resources used, or a certification badge photo work great here.",
    image: "../Images/updates/placeholder-3.svg",
    tags: ["AWS", "Certification"],
    linkedinUrl: ""
  },
  {
    id: "post-4",
    date: "September 2025",
    category: "Milestone",
    title: "Started the Fall semester at PVAMU",
    caption: "Use this space for career milestones, conference photos, hackathons, or volunteer work.",
    image: "../Images/updates/placeholder-4.svg",
    tags: ["PVAMU"],
    linkedinUrl: ""
  }
];

const EXPERIENCE = [
  {
    role: "Cloud Support Associate Intern",
    org: "Amazon Web Services, Inc. — Dallas, TX",
    period: "May 2025 – August 2025",
    bullets: [
      "Designed and implemented a Serverless Event-Driven Metadata Extraction System: S3 upload triggers, metadata extraction, and DynamoDB storage.",
      "Applied infrastructure-as-code using Terraform and CloudFormation; integrated CI/CD workflows with GitHub to support repeatable deployments.",
      "Troubleshot and resolved issues across IAM permissions, EC2 networking, S3 replication, and EBS mounting to deliver secure, scalable solutions.",
      "Built and tested networking solutions using EC2, VPC, ALB, Auto Scaling, and RDS; documented architecture and operational runbooks with Agile teams.",
      "Related work: See Projects → “Serverless Metadata Extraction System” and “OCI Landing Zone Automation” for automation/security patterns."
    ]
  },
  {
    role: "Associate Manager",
    org: "Towne Park Ltd — Houston, TX",
    period: "August 2022 – March 2023",
    bullets: [
      "Managed 35+ associates in a high-demand hospitality environment while enforcing operational standards.",
      "Led onboarding, scheduling, and retention strategies; strengthened leadership in decision-making, conflict resolution, and problem-solving."
    ]
  },
  {
    role: "Lead Residents Experience Specialist",
    org: "Valet Living LLC — Houston, TX",
    period: "September 2020 – July 2022",
    bullets: [
      "Resolved 50+ daily resident inquiries while maintaining strong communication and customer support professionalism.",
      "Maintained process compliance and accurate documentation across multiple service channels."
    ]
  }
];

