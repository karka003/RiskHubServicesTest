import { pgTable, text, serial, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  metadata: json("metadata").$type<{
    page: string;
    timestamp: string;
  }>(),
});

export const insertInquirySchema = createInsertSchema(inquiries)
  .omit({ id: true })
  .extend({
    email: z.string().email("Please enter a valid email address"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
