import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { createTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './tasks.entity';

@EntityRepository()
export class TasksRepository extends Repository<Task> {}
