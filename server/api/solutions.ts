
import { Router } from 'express';
import { storage } from '../storage';

const router = Router();

// Get all solutions
router.get('/', async (_req, res) => {
  try {
    const solutions = await storage.getAllSolutions();
    
    return res.status(200).json({
      success: true,
      data: solutions
    });
  } catch (error) {
    console.error("Error fetching solutions:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching solutions"
    });
  }
});

// Get solution by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const solution = await storage.getSolutionById(Number(id));
    
    if (!solution) {
      return res.status(404).json({
        success: false,
        message: "Solution not found"
      });
    }
    
    return res.status(200).json({
      success: true,
      data: solution
    });
  } catch (error) {
    console.error("Error fetching solution:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching the solution"
    });
  }
});

export default router;
