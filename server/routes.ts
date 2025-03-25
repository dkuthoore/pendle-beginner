
import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Only creates and returns the HTTP server
  // All other functionality removed since it's not being used
  const httpServer = createServer(app);
  return httpServer;
}
