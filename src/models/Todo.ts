import { Model, model, Schema } from 'mongoose';
import { ITodo } from '../interfaces/index.js';

export class Todo {
  private todoModel: Model<ITodo>;

  constructor() {
    const todoSchema = new Schema<ITodo>({
      id: {
        type: String,
        unique: true,
        required: [true, 'id field is required'],
      },
      title: {
        type: String,
        required: [true, 'title field is required'],
      },
      completed: {
        type: Boolean,
        required: [true, 'completed field is required'],
      },
    });

    this.todoModel = model<ITodo>('todo', todoSchema);
  }

  get model() {
    return this.todoModel;
  }
}
