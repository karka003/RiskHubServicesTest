import { type Inquiry, type InsertInquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<number, Inquiry>;
  private currentId: number;

  constructor() {
    this.inquiries = new Map();
    this.currentId = 1;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentId++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id,
      metadata: {
        timestamp: new Date().toISOString(),
        page: insertInquiry.metadata?.page || 'unknown'
      }
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }
}

export const storage = new MemStorage();
