
import { Router } from 'express';
import { demoRequestSchema } from '@shared/schema';
import { ZodError } from 'zod';
import { storage } from '../storage';
import { sendDemoRequestNotification } from '../services/emailService';

const router = Router();

// Demo request endpoint
router.post('/request', async (req, res) => {
  try {
    console.log("Received demo request:", req.body);
    
    // Validate incoming data
    const validatedData = demoRequestSchema.parse(req.body);
    
    // Store demo request
    const request = await storage.createDemoRequest(validatedData);
    console.log("Demo request stored with ID:", request.id);
    
    // Send email notification
    let emailSent = false;
    try {
      emailSent = await sendDemoRequestNotification(validatedData);
      if (emailSent) {
        console.log("Email notification sent successfully");
      } else {
        console.warn("Email notification function returned false");
      }
    } catch (emailError) {
      console.error("Failed to send demo request email notification:", emailError);
      // Continue processing even if email fails
    }
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: "Demo request submitted successfully",
      requestId: request.id,
      emailSent: emailSent
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof ZodError) {
      console.error("Validation error:", error.errors);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    }
    
    // Handle other errors
    console.error("Error saving demo request:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request"
    });
  }
});

export default router;
