import { z } from "zod";
import { sql } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  json,
} from "drizzle-orm/pg-core";

// Users
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const insertUserSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email().max(255),
  password: z.string().min(8).max(255),
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

// Contact Submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 255 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const insertContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  message: z.string().min(3, { message: "Message is required" }),
});

// Newsletter subscription schema
export const insertNewsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  source: z.string().optional(), // To track which page the subscription came from
});

export type ContactFormData = z.infer<typeof insertContactFormSchema>;
export type NewsletterData = z.infer<typeof insertNewsletterSchema>;


// Demo Requests
export const demoRequests = pgTable("demo_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  industry: varchar("industry", { length: 255 }).notNull(),
  size: varchar("size", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }),
  message: text("message"),
  solution: varchar("solution", { length: 255 }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const demoRequestSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email().max(255),
  company: z.string().min(2).max(255),
  industry: z.string().min(2).max(255),
  size: z.string().min(1).max(255),
  phone: z.string().max(255).optional(),
  message: z.string().optional(),
  solution: z.string().max(255).optional(),
});

export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertDemoRequest = z.infer<typeof demoRequestSchema>;

// Solutions
export const solutions = pgTable("solutions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  features: json("features").$type<string[]>().default([]),
  useCase: varchar("use_case", { length: 255 }),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const solutionSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string().min(10),
  slug: z.string().min(2).max(255),
  features: z.array(z.string()).optional(),
  useCase: z.string().max(255).optional(),
});

export type Solution = typeof solutions.$inferSelect;
export type InsertSolution = z.infer<typeof solutionSchema>;