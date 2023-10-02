import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Task } from './tasks.entity';
import { createTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksRepository extends Repository<Task> {
    constructor(private dataSource: DataSource) {
        super(Task, dataSource.createEntityManager());
      }
    async createTask(createTaskDto: createTaskDto): Promise<Task> {
        const task: Task = this.create({
          ...createTaskDto,
          status: TaskStatus.OPEN,
        });
        await this.save(task);
        return task;
      }
}
