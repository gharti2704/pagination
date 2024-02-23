import { todo } from '../data/index.js';
import { ITodo } from '../data/interface/index.js';
import { ITodoService } from './interface/ITodoService.js';

export class TodoService implements ITodoService {
  public async getTodos(page: number, limit: number): Promise<ITodo[]> {
    const todos = await todo
      .find()
      .skip((page - 1) * limit)
      .limit(limit);
    return todos;
  }

  async saveTodos(todos: ITodo[]) {
    try {
      await todo.create(todos);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
