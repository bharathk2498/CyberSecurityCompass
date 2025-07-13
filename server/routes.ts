import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Security Tools endpoints
  app.get("/api/security-tools", async (req, res) => {
    try {
      const tools = await storage.getSecurityTools();
      res.json(tools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch security tools" });
    }
  });

  app.get("/api/security-tools/level/:level", async (req, res) => {
    try {
      const { level } = req.params;
      const tools = await storage.getSecurityToolsByLevel(level);
      res.json(tools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch security tools by level" });
    }
  });

  // Incident Playbooks endpoints
  app.get("/api/incident-playbooks", async (req, res) => {
    try {
      const playbooks = await storage.getIncidentPlaybooks();
      res.json(playbooks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch incident playbooks" });
    }
  });

  app.get("/api/incident-playbooks/level/:level", async (req, res) => {
    try {
      const { level } = req.params;
      const playbooks = await storage.getIncidentPlaybooksByLevel(level);
      res.json(playbooks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch incident playbooks by level" });
    }
  });

  // Compliance Frameworks endpoints
  app.get("/api/compliance-frameworks", async (req, res) => {
    try {
      const frameworks = await storage.getComplianceFrameworks();
      res.json(frameworks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch compliance frameworks" });
    }
  });

  // Career Paths endpoints
  app.get("/api/career-paths", async (req, res) => {
    try {
      const paths = await storage.getCareerPaths();
      res.json(paths);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch career paths" });
    }
  });

  // Cloud Security endpoints
  app.get("/api/cloud-security", async (req, res) => {
    try {
      const services = await storage.getCloudSecurity();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cloud security services" });
    }
  });

  app.get("/api/cloud-security/:provider", async (req, res) => {
    try {
      const { provider } = req.params;
      const services = await storage.getCloudSecurityByProvider(provider);
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cloud security services by provider" });
    }
  });

  // Search endpoint
  app.get("/api/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== 'string') {
        return res.status(400).json({ message: "Search query is required" });
      }

      const query = q.toLowerCase();
      const tools = await storage.getSecurityTools();
      const playbooks = await storage.getIncidentPlaybooks();
      const frameworks = await storage.getComplianceFrameworks();

      const results = {
        tools: tools.filter(tool => 
          tool.name.toLowerCase().includes(query) || 
          tool.description.toLowerCase().includes(query) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(query))
        ),
        playbooks: playbooks.filter(playbook =>
          playbook.name.toLowerCase().includes(query) ||
          playbook.description.toLowerCase().includes(query)
        ),
        frameworks: frameworks.filter(framework =>
          framework.name.toLowerCase().includes(query) ||
          framework.description.toLowerCase().includes(query)
        )
      };

      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Search failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
