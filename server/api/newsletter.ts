
import { Router } from 'express';
import { insertNewsletterSchema } from '@shared/schema';
import { ZodError } from 'zod';
import { storage } from '../storage';
import { sendNewsletterSubscriptionNotification } from '../services/emailService';

const router = Router();

// Newsletter subscription endpoint
router.post('/', async (req, res) => {
  try {
    // Validate incoming data
    const validatedData = insertNewsletterSchema.parse(req.body);
    
    // Store newsletter subscription
    const subscription = await storage.createNewsletterSubscription(validatedData);
    
    // Send email notification
    await sendNewsletterSubscriptionNotification(validatedData);
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter",
      subscriptionId: subscription.id
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
    console.error("Error saving newsletter subscription:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request"
    });
  }
});

export default router;
