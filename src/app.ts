import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
import apiRouter from './routes';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Request logging
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Security & utility middleware
app.use(helmet());
app.use(cors({
  origin: config.corsOrigin,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Base Routes
app.use('/api/v1', apiRouter);

// Root route
app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the FOTA Backend API',
    docs: '/api/v1/health'
  });
});

// Error Handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;
