import { ITodo } from '../interfaces/index.js';

export interface ITodoController {
  getTodos(): Promise<ITodo[]>;
  saveTodos(todos: ITodo[]): Promise<void>;
}
