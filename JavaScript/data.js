const PROJECTS = [
  {
    title: "Serverless Metadata Extraction System",
    description: "Event-driven AWS pipeline for ingesting files, extracting metadata, and storing results for search and reporting.",
    tech: ["AWS", "S3", "Lambda", "EventBridge", "DynamoDB"],
    image: "../Images/projects/serverless-metadata.png",
    links: {
      github: "https://github.com/bambelino85",
      live: ""
    }
  },
  {
    title: "SBOM Generator (Senior Design)",
    description: "Tool to analyze software dependencies and generate standardized SBOM outputs for security and compliance.",
    tech: ["Python", "CycloneDX", "SPDX", "Git"],
    image: "../Images/projects/sbom-generator.png",
    links: {
      github: "https://github.com/bambelino85",
      live: ""
    }
  },
  {
    title: "TicketWave – Event Ticket Sale System",
    description: "Role-based ticket booking system with admin, organizer, and customer functionality.",
    tech: ["C++", "SQL", "PHP", "MySQL"],
    image: "../Images/projects/ticketwave.png",
    links: {
      github: "https://github.com/bambelino85",
      live: ""
    }
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

