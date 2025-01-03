import { validationResult } from 'express-validator';
import { ValidationError } from '../utils/errors.js';

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(
      errors.array().map(err => err.msg).join(', ')
    );
  }
  next();
}