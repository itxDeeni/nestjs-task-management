import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { createTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './tasks.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const found = this.tasksRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException();
    }
    return record;
  }

  // createTask(createTaskDto: createTaskDto): Promise<Task> {
  //   return this.tasksRepository.createTask(createTaskDto);
  // }
}
