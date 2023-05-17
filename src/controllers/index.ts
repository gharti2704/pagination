import { Request, Response } from 'express';
import axios from 'axios';
import { IPhoto, ITodo } from '../interfaces';
import { Photo, Todo } from '../models';

//Make an API call to JSONPlaceholder to retrive photos
export const createPhotos = async (req: Request, res: Response) => {
  try {
    const { data }: { data: IPhoto[] } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    await Photo.create(data);
    res.status(201).send({ message: 'Photos created sucessfully.' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const getPhotos = (req: Request, res: Response) =>
  res.status(200).send(res.locals.data);

//Make an API call to JSONPlaceholder to retrive todos
export const createTodos = async (req: Request, res: Response) => {
  try {
    const { data }: { data: ITodo[] } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    await Todo.create(data);
    res.status(201).send({ message: 'Todos created sucessfully.' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const getTodos = (req: Request, res: Response) => {
  res.status(200).send(res.locals.data);
};
