export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string[]
  logo?: string
}

export interface Education {
  degree: string
  institution: string
  score: string
  period?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  github?: string
  period?: string
}

export interface Certification {
  name: string
  issuer: string
  code?: string
}

export const resumeData = {
  name: 'Raj Shah',
  tagline: 'DevOps Consultant & Cloud Infrastructure Engineer',
  email: 'rajshah.comps@gmail.com',
  phone: '+91 9923772187',
  location: 'India',
  social: {
    linkedin: 'https://linkedin.com/in/rajshah29',
    github: 'https://github.com/rajshah001',
    medium: '',
  },

  experience: [
    {
      company: 'Opsnetic',
      role: 'DevOps Consultant (Remote)',
      period: 'Apr 2021 - Present',
      location: 'India',
      description: [
        'Managed client cloud infrastructure using Infrastructure as Code (IaC) tool Terraform',
        'Orchestrated automation tasks using Bash, PowerShell scripting, and Python lambdas',
        'Managed security and compliance tools: Prisma Cloud, Fortify on Demand, and Wiz (CSPM and Vulnerability Tracking)',
        'Configured Jenkins CI/CD pipelines to execute SAST and DAST scans using Synopsys Coverity and OWASP ZAP',
        'Managed observability systems (AWS CloudWatch, Azure Monitor, Datadog) for system reliability',
        'Managed patching and maintenance activities using AWS SSM, NinjaRMM, RedHat Satellite',
        'Implemented GPU time-sharing concept in GKE, enhancing efficiency and reducing operational costs',
        'Documented system configurations and procedures to facilitate knowledge sharing',
      ],
    },
    {
      company: 'TomTom',
      role: 'Software Engineer (Contract)',
      period: 'Aug 2022 - Dec 2022',
      location: 'India',
      description: [
        'Contributed in creation of Delay Monitoring feature in Data Ingestion Workflow using Azure managed Databricks, Data Lake, and Power BI',
        'Created an endpoint to monitor Databricks scheduled job runs and analysis using Power BI Dashboards',
      ],
    },
  ],

  education: [
    {
      degree: 'B.Tech - Information Technology',
      institution: 'Vishwakarma Institute of Technology',
      score: 'CGPA: 9.76/10',
    },
  ],

  certifications: [
    { name: 'AWS Solution Architect Associate', issuer: 'AWS', code: 'SAA-C02' },
    { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', code: 'CKA' },
    { name: 'Azure AI Engineer Associate', issuer: 'Microsoft', code: 'AI-102' },
    { name: 'Azure Administrator Associate', issuer: 'Microsoft', code: 'AZ-104' },
    { name: 'Azure Solutions Architect Expert', issuer: 'Microsoft', code: 'AZ-305' },
    { name: 'Certified Kubernetes Security Specialist', issuer: 'CNCF', code: 'CKS' },
    { name: 'Azure Developer Associate', issuer: 'Microsoft', code: 'AZ-204' },
    { name: 'AWS Cloud Practitioner', issuer: 'AWS', code: 'CLF-C01' },
    { name: 'Azure Fundamentals', issuer: 'Microsoft', code: 'AZ-900' },
    { name: 'Azure AI Fundamentals', issuer: 'Microsoft', code: 'AI-900' },
    { name: 'Azure Data Fundamentals', issuer: 'Microsoft', code: 'DP-900' },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'Shell Script', 'PowerShell', 'JavaScript', 'Node.js', 'SQL', 'HTML', 'CSS'],
    },
    {
      category: 'CI/CD Tools',
      items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Travis CI'],
    },
    {
      category: 'IaC Tools',
      items: ['Terraform', 'CloudFormation'],
    },
    {
      category: 'Security Tools',
      items: ['OWASP ZAP', 'Synopsys Coverity', 'Trivy', 'Prisma Cloud', 'Fortify on Demand', 'Wiz'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DataDog', 'NinjaOne', 'Git'],
    },
  ],

  projects: [
    {
      title: 'SpeakBuddy – AI Speaking Coach',
      description: 'Built a personal speaking coach web app that adapts to user input, providing real-time guidance and voice feedback to improve communication skills.',
      tech: ['React', 'Pollinations AI'],
      link: 'https://bp7dobwv8pkl.space.minimax.io/',
      period: '2024',
    },
    {
      title: 'Imagine – Open Source AI Image Generator',
      description: 'Developed a pro-grade, free AI image generation tool powered by open APIs; open-sourced to make AI creativity accessible with zero backend overhead.',
      tech: ['React', 'Vite', 'TailwindCSS'],
      link: 'https://rajshah001.github.io/imagine/',
      github: 'https://github.com/rajshah001/imagine',
      period: '2024',
    },
    {
      title: 'futurejobs.today',
      description: 'Built a website that curates and showcases new-age job roles created by the AI revolution, updated weekly, helping users discover future career opportunities.',
      tech: ['Vite', 'AWS Lambda', 'AWS DynamoDB'],
      link: 'https://futurejobs.today',
      period: '2023',
    },
    {
      title: 'DAST Automation: Application Security Testing',
      description: 'Engineered an end-to-end CI/CD Automation to perform a full security scan of a running application which creates a comprehensive HTML report of security/vulnerability findings.',
      tech: ['Jenkins', 'OWASP ZAP', 'AWS ECS', 'Fargate', 'S3'],
      link: '',
      period: '2023',
    },
    {
      title: 'YouTube Insights',
      description: 'Built a React website to provide insights on YouTube Video Comment data using NLP Techniques with AWS Lambda as serverless back-end for Machine Learning processing.',
      tech: ['React', 'Machine Learning', 'AWS Lambda'],
      link: 'https://youtube-comment-insights.netlify.app/',
      period: '2022',
    },
  ],

  volunteering: [
    {
      role: 'AWS Community Builder',
      organization: 'AWS',
      period: 'Feb 2023 - Present',
      description: 'Part of a worldwide community of 2300+ AWS technical enthusiasts. Attended AWS Summit Mumbai to network and engage in discussions on cloud computing strategies.',
    },
    {
      role: 'Community Member',
      organization: 'Google Developer Club VIT Pune',
      period: 'Aug 2019 - Apr 2021',
      description: 'Trained 250+ students across India in Machine Learning concepts under MLFest Event. Topics included Data Analysis, Linear Regression, Classification Models, CNN, etc.',
    },
  ],

  about: `I'm a DevOps Consultant passionate about cloud infrastructure, automation, and security. Currently helping engineering teams scale their operations efficiently at Opsnetic.

I specialize in Infrastructure as Code (Terraform), CI/CD pipelines, cloud security, and observability. I've implemented GPU optimization solutions in GKE, managed security compliance using tools like Prisma Cloud and Wiz, and built automated workflows that have significantly reduced operational costs.

I'm also an AWS Community Builder, actively involved in the cloud community, and love sharing knowledge. In my free time, I build projects that explore the intersection of DevOps, AI, and cloud technologies.`,
}

export const journeyData = {
  title: 'Cloud Mastery Journey',
  subtitle: 'Certifications across platforms',
  milestones: [
    { platform: 'AWS', count: 2, total: 2, color: '#FF9900' },
    { platform: 'Azure', count: 6, total: 6, color: '#0078D4' },
    { platform: 'Kubernetes', count: 2, total: 2, color: '#326CE5' },
  ],
}
