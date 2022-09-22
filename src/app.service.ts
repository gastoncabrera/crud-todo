import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class AppService {
  [x: string]: any;
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoDto): Promise<Todo> {
    const createdCat = new this.todoModel(createTodoDto);
    return createdCat.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async update(id: number, updateListDto) {
    const res = await this.todoModel.findByIdAndUpdate(id, updateListDto);
    return res;
  }

  async findOne(id: number) {
    const list = await this.todoModel.findById(id);
    return list;
  }

  async remove(id: number) {
    const list = await this.todoModel.findById(id);
    const res = list.remove();
    return res;
  }
}
