import InvalidBodyRequestException from '../exceptions/InvalidBodyRequestException';
import TaskSchema from '../validation/TaskSchema';

class TasksService {
  constructor(repository) {
    this.tasksRepository = repository;
  }

  async findTaskById(id) {
    const task = await this.tasksRepository.getOne(id);
    return task;
  }

  async create(body, projectId) {
    try {
      await TaskSchema.validate(body, { abortEarly: false });
    } catch (error) {
      const errors = error.inner.map((err) => ({
        field: err.path,
        error: err.errors.length > 0 ? err.errors : err.errors[0],
      }));

      throw new InvalidBodyRequestException(errors);
    }

    const newTask = await this.tasksRepository.create(body, projectId);

    return newTask;
  }
}

export default TasksService;
