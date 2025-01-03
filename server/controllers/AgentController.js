import { asyncHandler } from '../utils/asyncHandler.js';
import { AgentService } from '../services/AgentService.js';
import { NotFoundError } from '../utils/errors.js';

const service = new AgentService();

export class AgentController {
  getAll = asyncHandler(async (req, res) => {
    const agents = await service.findAll();
    res.json(agents);
  });

  getOne = asyncHandler(async (req, res) => {
    const agent = await service.findById(req.params.id);
    if (!agent) throw new NotFoundError('Agent not found');
    res.json(agent);
  });

  create = asyncHandler(async (req, res) => {
    const agent = await service.create(req.body);
    res.status(201).json(agent);
  });

  update = asyncHandler(async (req, res) => {
    const agent = await service.update(req.params.id, req.body);
    if (!agent) throw new NotFoundError('Agent not found');
    res.json(agent);
  });

  delete = asyncHandler(async (req, res) => {
    await service.delete(req.params.id);
    res.status(204).end();
  });
}