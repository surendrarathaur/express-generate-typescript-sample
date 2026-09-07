import dotenv from 'dotenv';
import path from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = `.env.${nodeEnv}`;

// Load environment variables from specific environment file
dotenv.config({ path: path.join(__dirname, `../../${envFile}`) });

// Load base .env file as fallback for common variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv,
  corsOrigin: process.env.CORS_ORIGIN || '*',
};
