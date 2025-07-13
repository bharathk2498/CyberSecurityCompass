import {
  pgTable,
  text,
  serial,
  integer,
  boolean,
  json,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const securityTools = pgTable("security_tools", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  command: text("command"),
  level: text("level").notNull(), // entry, mid, senior, elite
  tags: json("tags").$type<string[]>().default([]),
  documentation: text("documentation"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const incidentPlaybooks = pgTable("incident_playbooks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  severity: text("severity").notNull(), // critical, high, medium, low
  responseTime: text("response_time").notNull(),
  team: text("team").notNull(),
  steps: json("steps").$type<string[]>().default([]),
  level: text("level").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const complianceFrameworks = pgTable("compliance_frameworks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  requirements: json("requirements")
    .$type<{ name: string; status: string; percentage?: number }[]>()
    .default([]),
  overallScore: integer("overall_score").default(0),
  level: text("level").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const careerPaths = pgTable("career_paths", {
  id: serial("id").primaryKey(),
  level: text("level").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  yearsExperience: text("years_experience").notNull(),
  skills: json("skills").$type<string[]>().default([]),
  certifications: json("certifications").$type<string[]>().default([]),
  roles: json("roles").$type<string[]>().default([]),
  salaryRange: text("salary_range").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const cloudSecurity = pgTable("cloud_security", {
  id: serial("id").primaryKey(),
  provider: text("provider").notNull(), // aws, azure, gcp
  service: text("service").notNull(),
  status: text("status").notNull(), // online, warning, critical
  description: text("description"),
  level: text("level").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSecurityToolSchema = createInsertSchema(securityTools).omit({
  id: true,
  createdAt: true,
});

export const insertIncidentPlaybookSchema = createInsertSchema(
  incidentPlaybooks,
).omit({
  id: true,
  createdAt: true,
});

export const insertComplianceFrameworkSchema = createInsertSchema(
  complianceFrameworks,
).omit({
  id: true,
  createdAt: true,
});

export const insertCareerPathSchema = createInsertSchema(careerPaths).omit({
  id: true,
  createdAt: true,
});

export const insertCloudSecuritySchema = createInsertSchema(cloudSecurity).omit(
  {
    id: true,
    createdAt: true,
  },
);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type SecurityTool = typeof securityTools.$inferSelect;
export type InsertSecurityTool = z.infer<typeof insertSecurityToolSchema>;
export type IncidentPlaybook = typeof incidentPlaybooks.$inferSelect;
export type InsertIncidentPlaybook = z.infer<
  typeof insertIncidentPlaybookSchema
>;
export type ComplianceFramework = typeof complianceFrameworks.$inferSelect;
export type InsertComplianceFramework = z.infer<
  typeof insertComplianceFrameworkSchema
>;
export type CareerPath = typeof careerPaths.$inferSelect;
export type InsertCareerPath = z.infer<typeof insertCareerPathSchema>;
export type CloudSecurity = typeof cloudSecurity.$inferSelect;
export type InsertCloudSecurity = z.infer<typeof insertCloudSecuritySchema>;
