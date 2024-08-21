import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Req, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Priority, Status } from '@prisma/client';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags("Task")
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Req() req, @Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(req, createTaskDto);
  }

  @Get()
  findAll(
    @Req() req,
    @Query('order') order: 'asc' | 'desc' = 'asc',
    @Query('categoryId') categoryId?: string,
    @Query('priority') priority?: Priority,
    @Query('status') status?: Status,
    @Query('dueDate') dueDate?: Date,
  ) {
    return this.taskService.findAll(req, order, categoryId, priority, status, dueDate);
  }

  @Get(':id')
  findOne(@Req() req, @Param('id') id: string) {
    return this.taskService.findOne(req, id);
  }

  @Put(':id')
  update(@Req() req, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(req, id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.taskService.remove(req, id);
  }
}