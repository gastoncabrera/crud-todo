import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postHello(@Body() createTodoDto) {
    return this.appService.create(createTodoDto);
  }

  @Get()
  getHello() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.appService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateListDto) {
    return this.appService.update(id, updateListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.appService.remove(id);
  }
}
