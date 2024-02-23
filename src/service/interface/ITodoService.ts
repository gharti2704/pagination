import { ITodo } from '../../data/interface/index.js';

export interface ITodoService {
  saveTodos(todos: ITodo[]): Promise<void>;
}
