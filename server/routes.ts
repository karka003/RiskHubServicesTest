import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express) {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const result = await storage.createInquiry(inquiry);
      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Failed to submit inquiry" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
