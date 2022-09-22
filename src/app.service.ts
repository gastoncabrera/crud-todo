import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Todo.name) private catModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.catModel.find().exec();
  }

  // async getHello() {
  //   return await new this.catModel();
  // }
}