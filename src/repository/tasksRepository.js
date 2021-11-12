import mongoose from 'mongoose';

import InvalidIdException from '../exceptions/InvalidIdException';

class TasksRepository {
  constructor(model) {
    this.taskModel = model;
  }

  async getOne(id) {
    if (!mongoose.isValidObjectId(id)) {
      throw new InvalidIdException();
    }

    const task = await this.taskModel.findById(id);

    return task;
  }

  async create(body, projectId) {
    const newTask = await this.taskModel.create({
      ...body,
      project: projectId,
    });

    return newTask;
  }
}

export default TasksRepository;
