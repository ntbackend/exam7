import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Req } from '@nestjs/common';
import { TaskCategoryService } from './task-category.service';
import { CreateTaskCategoryDto } from './dto/create-task-category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task-category.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags("Task Category")
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('task-category')
export class TaskCategoryController {
  constructor(private readonly taskCategoryService: TaskCategoryService) {}

  @Post()
  create(@Req() req, @Body() createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.taskCategoryService.create(req, createTaskCategoryDto);
  }

  @Get()
  findAll(@Req() req) {
    return this.taskCategoryService.findAll(req);
  }

  @Get(':id')
  findOne(@Req() req, @Param('id') id: string) {
    return this.taskCategoryService.findOne(req, id);
  }

  @Put(':id')
  update(@Req() req, @Param('id') id: string, @Body() updateTaskCategoryDto: UpdateTaskCategoryDto) {
    return this.taskCategoryService.update(req, id, updateTaskCategoryDto);
  }

  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.taskCategoryService.remove(req, id);
  }
}