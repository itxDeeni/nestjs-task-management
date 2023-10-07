import { Repository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Task } from './tasks.entity';
import { createTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-task.dto';
import { User } from 'src/auth/user.entitiy';

@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');
    query.where({ user });

    if (status) {
      query.andWhere('task.status= :status', { status });
    }

    if (search) {
      query.andWhere(
        '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();
    return tasks;
  }
  async createTask(createTaskDto: createTaskDto, user: User): Promise<Task> {
    const task: Task = this.create({
      ...createTaskDto,
      status: TaskStatus.OPEN,
      user,
    });
    await this.save(task);
    return task;
  }
}
