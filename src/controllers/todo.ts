import { Request, Response } from 'express';
import axios from 'axios';
import { ITodo } from '../interfaces/index.js';
import { ITodoService } from '../service/ITodoService.js';

export class TodoController {
  private todoService: ITodoService;
  constructor(todoService: ITodoService) {
    this.todoService = todoService;
  }

  public createTodos = async (req: Request, res: Response) => {
    try {
      //Make an API call to JSON Placeholder to retrieve todos
      const { data }: { data: ITodo[] } = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );
      await this.todoService.saveTodos(data);
      res.status(201).send({ message: 'Todos created sucessfully.' });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };

  static getTodos(req: Request, res: Response) {
    res.status(200).send(res.locals.data);
  }
}
