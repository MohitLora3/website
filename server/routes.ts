import { Application } from 'express';
import contactRoutes from './api/contact';
import demoRoutes from './api/demo';
import solutionsRoutes from './api/solutions';
import newsletterRoutes from './api/newsletter';
import express from 'express';


// Dummy admin router for demonstration
const adminRouter = express.Router();
adminRouter.get('/', (req, res) => {
  // Replace this with actual data retrieval and formatting logic
  res.json({
    contactSubmissions: [], // Replace with your actual contactSubmissions data
    demoRequests: [],       // Replace with your actual demoRequests data
    solutionRequests: [],   // Replace with your actual solutionRequests data
    newsletterSubscriptions: [] //Replace with your actual newsletterSubscriptions data
  });
});


export const registerRoutes = async (app: Application) => {
  // API routes
  app.use('/api/contact', contactRoutes);
  app.use('/api/demo', demoRoutes);
  app.use('/api/solutions', solutionsRoutes);
  app.use('/api/newsletter', newsletterRoutes);
  app.use('/api/admin', adminRouter); // Added admin route

  // Returning the server instance for potential use elsewhere
  return app;
};