import { Router } from 'express';

import Task from '../models/Task';
import TasksRepository from '../repository/tasksRepository';
import TasksService from '../service/tasksService';

const router = Router();

// Injeção de Dependências
const tasksService = new TasksService(new TasksRepository(Task));

// Inserir rotas de tasks
// GET /tasks/:projectId -- Lista tasks criadas para um determinado projectId
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await tasksService.findTaskById(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.post('/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { body } = req;

    const newTask = await tasksService.create(body, projectId);

    res.json(newTask);
  } catch (error) {
    next(error);
  }
});

//   - PUT /tasks/:taskId
//     - Receber title e description via BODY
//     - Receber taskId via params
//     - Receber token
//     - Valida title e description
//     - Chama o banco para editar a task
//   - DELETE /tasks/:taskId --- Delete uma task pelo seu id
//     - Recebe ID do task via params
//     - Receber token
//     - Valida ID (precisa ter o formato do ID que o Mongo aceita)
//     - Chama o banco para fazer o DELETE

export default router;
