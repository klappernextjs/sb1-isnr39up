import { Router } from 'express';
import { body, param } from 'express-validator';
import { validate } from '../middleware/validate.js';
import { AgentController } from '../controllers/AgentController.js';

const router = Router();
const controller = new AgentController();

// Get all agents
router.get('/', controller.getAll);

// Get single agent
router.get('/:id', 
  param('id').isUUID(),
  validate,
  controller.getOne
);

// Create agent
router.post('/',
  body('name').trim().notEmpty(),
  body('baseColor').isIn(['orange', 'black', 'white', 'gray', 'brown', 'calico']),
  body('pattern').isIn(['solid', 'striped', 'spotted', 'tuxedo']),
  body('personality').isArray(),
  validate,
  controller.create
);

// Update agent
router.patch('/:id',
  param('id').isUUID(),
  body('price').optional().isNumeric(),
  validate,
  controller.update
);

// Delete agent
router.delete('/:id',
  param('id').isUUID(),
  validate,
  controller.delete
);

export const agentRoutes = router;