import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
