
import { Router } from 'express';
import { storage } from '../storage';

const router = Router();

// Admin data overview endpoint
router.get('/data', async (req, res) => {
  try {
    // Get all stored data
    const data = {
      contacts: storage.getContactSubmissions(),
      demoRequests: storage.getDemoRequests(),
      solutionRequests: storage.getSolutionRequests(),
      newsletterSubscriptions: storage.getNewsletterSubscriptions()
    };
    
    // Return data
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error retrieving admin data:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving data"
    });
  }
});

export default router;
