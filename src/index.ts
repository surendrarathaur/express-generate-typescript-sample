import app from './app';
import { config } from './config';

const server = app.listen(config.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.port}`);
  console.log(`[server]: Environment: ${config.nodeEnv}`);
});

// Graceful shutdown
const gracefulShutdown = () => {
  console.log('[server]: Received termination signal. Shutting down gracefully...');
  server.close(() => {
    console.log('[server]: Process terminated.');
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
