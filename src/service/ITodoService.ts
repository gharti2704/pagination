import { ITodo } from '../interfaces/index.js';

export interface ITodoService {
  saveTodos(todos: ITodo[]): Promise<void>;
}
