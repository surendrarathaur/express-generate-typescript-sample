import { Router, Request, Response } from 'express';

const router = Router();

// Health Check Route
router.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'FOTA Backend Service is running smoothly',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default router;
