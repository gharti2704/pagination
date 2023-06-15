import { Request, Response } from 'express';
import axios from 'axios';
import { ITodo } from '../interfaces/index.js';
import { todo } from '../routes/index.js';

export class TodoController {
  static async createTodos(req: Request, res: Response) {
    try {
      //Make an API call to JSONPlaceholder to retrive todos
      const { data }: { data: ITodo[] } = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );
      await todo.saveTodos(data);
      res.status(201).send({ message: 'Todos created sucessfully.' });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  static getTodos(req: Request, res: Response) {
    res.status(200).send(res.locals.data);
  }
}
