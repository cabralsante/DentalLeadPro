import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create appointment booking
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Appointment booked successfully! We will contact you shortly to confirm.",
        appointment: {
          id: appointment.id,
          firstName: appointment.firstName,
          lastName: appointment.lastName,
          service: appointment.service,
          status: appointment.status
        }
      });
    } catch (error: any) {
      if (error.errors) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to book appointment. Please try again." 
        });
      }
    }
  });

  // Get all appointments (for admin use)
  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json({ success: true, appointments });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve appointments" 
      });
    }
  });

  // Update appointment status
  app.patch("/api/appointments/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status) {
        return res.status(400).json({ 
          success: false, 
          message: "Status is required" 
        });
      }

      const appointment = await storage.updateAppointmentStatus(id, status);
      
      if (!appointment) {
        return res.status(404).json({ 
          success: false, 
          message: "Appointment not found" 
        });
      }

      res.json({ 
        success: true, 
        message: "Appointment status updated",
        appointment 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to update appointment status" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
