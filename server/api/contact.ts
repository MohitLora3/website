
import { Router } from 'express';
import { insertContactFormSchema } from '@shared/schema';
import { ZodError } from 'zod';
import { storage } from '../storage';
import { sendContactFormNotification } from '../services/emailService';

const router = Router();

// Contact form submission endpoint
router.post('/', async (req, res) => {
  try {
    // Validate incoming data
    const validatedData = insertContactFormSchema.parse(req.body);
    
    // Store contact form submission
    const submission = await storage.createContactSubmission(validatedData);
    
    // Send email notification
    await sendContactFormNotification(validatedData);
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      submissionId: submission.id
    });
  } catch (error) {
    // Handle validation errors
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    }
    
    // Handle other errors
    console.error("Error saving contact form:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request"
    });
  }
});

export default router;
