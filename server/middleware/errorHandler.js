import { logger } from '../utils/logger.js';
import { NotFoundError, ValidationError } from '../utils/errors.js';

export function errorHandler(err, req, res, next) {
  logger.error(err);

  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message });
  }

  // Handle Supabase errors
  if (err.code === 'PGRST116') {
    return res.status(404).json({ error: 'Resource not found' });
  }

  // Default error
  res.status(500).json({ 
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message 
  });
}