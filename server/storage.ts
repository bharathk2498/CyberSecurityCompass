import { 
  SecurityTool, 
  InsertSecurityTool, 
  IncidentPlaybook, 
  InsertIncidentPlaybook,
  ComplianceFramework,
  InsertComplianceFramework,
  CareerPath,
  InsertCareerPath,
  CloudSecurity,
  InsertCloudSecurity,
  User,
  InsertUser
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Security Tools
  getSecurityTools(): Promise<SecurityTool[]>;
  getSecurityToolsByLevel(level: string): Promise<SecurityTool[]>;
  createSecurityTool(tool: InsertSecurityTool): Promise<SecurityTool>;
  
  // Incident Playbooks
  getIncidentPlaybooks(): Promise<IncidentPlaybook[]>;
  getIncidentPlaybooksByLevel(level: string): Promise<IncidentPlaybook[]>;
  createIncidentPlaybook(playbook: InsertIncidentPlaybook): Promise<IncidentPlaybook>;
  
  // Compliance Frameworks
  getComplianceFrameworks(): Promise<ComplianceFramework[]>;
  createComplianceFramework(framework: InsertComplianceFramework): Promise<ComplianceFramework>;
  
  // Career Paths
  getCareerPaths(): Promise<CareerPath[]>;
  createCareerPath(path: InsertCareerPath): Promise<CareerPath>;
  
  // Cloud Security
  getCloudSecurity(): Promise<CloudSecurity[]>;
  getCloudSecurityByProvider(provider: string): Promise<CloudSecurity[]>;
  createCloudSecurity(security: InsertCloudSecurity): Promise<CloudSecurity>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private securityTools: Map<number, SecurityTool>;
  private incidentPlaybooks: Map<number, IncidentPlaybook>;
  private complianceFrameworks: Map<number, ComplianceFramework>;
  private careerPaths: Map<number, CareerPath>;
  private cloudSecurity: Map<number, CloudSecurity>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.securityTools = new Map();
    this.incidentPlaybooks = new Map();
    this.complianceFrameworks = new Map();
    this.careerPaths = new Map();
    this.cloudSecurity = new Map();
    this.currentId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize with sample cybersecurity data
    const tools: InsertSecurityTool[] = [
      {
        name: "Nmap",
        description: "Network Discovery and Security Auditing",
        category: "Network",
        command: "nmap -sS -A -T4 target",
        level: "entry",
        tags: ["network", "scanning", "enumeration"],
        documentation: "https://nmap.org/docs.html"
      },
      {
        name: "Burp Suite",
        description: "Web Application Security Testing",
        category: "Web",
        command: "java -jar burpsuite.jar",
        level: "mid",
        tags: ["web", "proxy", "vulnerability"],
        documentation: "https://portswigger.net/burp/documentation"
      },
      {
        name: "Metasploit",
        description: "Advanced Exploitation Framework",
        category: "Exploit",
        command: "msfconsole",
        level: "senior",
        tags: ["exploit", "penetration", "framework"],
        documentation: "https://docs.rapid7.com/metasploit/"
      }
    ];

    tools.forEach(tool => this.createSecurityTool(tool));

    const playbooks: InsertIncidentPlaybook[] = [
      {
        name: "Data Breach Response",
        description: "Immediate response procedures for data compromise incidents",
        severity: "critical",
        responseTime: "< 15 min",
        team: "CISO, Legal, PR",
        steps: [
          "Identify and contain the breach",
          "Assess the scope of data compromised",
          "Notify relevant stakeholders",
          "Document the incident",
          "Implement remediation measures"
        ],
        level: "senior"
      },
      {
        name: "Malware Outbreak",
        description: "Containment and eradication procedures for malware incidents",
        severity: "high",
        responseTime: "< 30 min",
        team: "SOC, IT, SecOps",
        steps: [
          "Isolate affected systems",
          "Identify malware type and scope",
          "Remove malware from systems",
          "Patch vulnerabilities",
          "Monitor for persistence"
        ],
        level: "mid"
      }
    ];

    playbooks.forEach(playbook => this.createIncidentPlaybook(playbook));

    const frameworks: InsertComplianceFramework[] = [
      {
        name: "NIST Cybersecurity Framework",
        description: "Framework for improving critical infrastructure cybersecurity",
        requirements: [
          { name: "Identify", status: "compliant", percentage: 98 },
          { name: "Protect", status: "compliant", percentage: 94 },
          { name: "Detect", status: "warning", percentage: 87 },
          { name: "Respond", status: "compliant", percentage: 92 },
          { name: "Recover", status: "warning", percentage: 85 }
        ],
        overallScore: 91,
        level: "all"
      },
      {
        name: "ISO 27001",
        description: "International standard for information security management",
        requirements: [
          { name: "Controls Implemented", status: "compliant" },
          { name: "Risk Assessment", status: "compliant" },
          { name: "Audit Readiness", status: "compliant" }
        ],
        overallScore: 96,
        level: "senior"
      }
    ];

    frameworks.forEach(framework => this.createComplianceFramework(framework));

    const careers: InsertCareerPath[] = [
      {
        level: "entry",
        title: "Entry Level Cybersecurity",
        description: "Building foundational security knowledge",
        yearsExperience: "0-2 years",
        skills: ["CompTIA Security+", "Network Fundamentals", "Basic Incident Response"],
        certifications: ["Security+", "Network+"],
        roles: ["SOC Analyst I", "Security Analyst", "IT Support"],
        salaryRange: "$45,000 - $65,000"
      },
      {
        level: "mid",
        title: "Mid Level Cybersecurity",
        description: "Specialized security skills and certifications",
        yearsExperience: "2-5 years",
        skills: ["CISSP", "Cloud Security", "Threat Hunting"],
        certifications: ["CISSP", "CEH", "AWS Security"],
        roles: ["SOC Analyst II", "Security Engineer", "Pentester"],
        salaryRange: "$65,000 - $95,000"
      }
    ];

    careers.forEach(career => this.createCareerPath(career));

    const cloudServices: InsertCloudSecurity[] = [
      {
        provider: "aws",
        service: "IAM Policies",
        status: "online",
        description: "Identity and Access Management configuration",
        level: "all"
      },
      {
        provider: "azure",
        service: "Security Center",
        status: "online",
        description: "Unified security management and threat protection",
        level: "all"
      },
      {
        provider: "gcp",
        service: "Security Command Center",
        status: "online",
        description: "Security and risk management platform",
        level: "all"
      }
    ];

    cloudServices.forEach(service => this.createCloudSecurity(service));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getSecurityTools(): Promise<SecurityTool[]> {
    return Array.from(this.securityTools.values());
  }

  async getSecurityToolsByLevel(level: string): Promise<SecurityTool[]> {
    return Array.from(this.securityTools.values()).filter(tool => tool.level === level);
  }

  async createSecurityTool(insertTool: InsertSecurityTool): Promise<SecurityTool> {
    const id = this.currentId++;
    const tool: SecurityTool = { 
      ...insertTool, 
      id, 
      createdAt: new Date() 
    };
    this.securityTools.set(id, tool);
    return tool;
  }

  async getIncidentPlaybooks(): Promise<IncidentPlaybook[]> {
    return Array.from(this.incidentPlaybooks.values());
  }

  async getIncidentPlaybooksByLevel(level: string): Promise<IncidentPlaybook[]> {
    return Array.from(this.incidentPlaybooks.values()).filter(playbook => playbook.level === level);
  }

  async createIncidentPlaybook(insertPlaybook: InsertIncidentPlaybook): Promise<IncidentPlaybook> {
    const id = this.currentId++;
    const playbook: IncidentPlaybook = { 
      ...insertPlaybook, 
      id, 
      createdAt: new Date() 
    };
    this.incidentPlaybooks.set(id, playbook);
    return playbook;
  }

  async getComplianceFrameworks(): Promise<ComplianceFramework[]> {
    return Array.from(this.complianceFrameworks.values());
  }

  async createComplianceFramework(insertFramework: InsertComplianceFramework): Promise<ComplianceFramework> {
    const id = this.currentId++;
    const framework: ComplianceFramework = { 
      ...insertFramework, 
      id, 
      createdAt: new Date() 
    };
    this.complianceFrameworks.set(id, framework);
    return framework;
  }

  async getCareerPaths(): Promise<CareerPath[]> {
    return Array.from(this.careerPaths.values());
  }

  async createCareerPath(insertPath: InsertCareerPath): Promise<CareerPath> {
    const id = this.currentId++;
    const path: CareerPath = { 
      ...insertPath, 
      id, 
      createdAt: new Date() 
    };
    this.careerPaths.set(id, path);
    return path;
  }

  async getCloudSecurity(): Promise<CloudSecurity[]> {
    return Array.from(this.cloudSecurity.values());
  }

  async getCloudSecurityByProvider(provider: string): Promise<CloudSecurity[]> {
    return Array.from(this.cloudSecurity.values()).filter(service => service.provider === provider);
  }

  async createCloudSecurity(insertSecurity: InsertCloudSecurity): Promise<CloudSecurity> {
    const id = this.currentId++;
    const security: CloudSecurity = { 
      ...insertSecurity, 
      id, 
      createdAt: new Date() 
    };
    this.cloudSecurity.set(id, security);
    return security;
  }
}

export const storage = new MemStorage();
