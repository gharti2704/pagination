import { Request, Response } from 'express';
import axios from 'axios';
import { IPhoto } from '../interfaces/index.js';
import { photo } from '../routes/index.js';

export class PhotoController {
  static async createPhotos(req: Request, res: Response) {
    try {
      //Make an API call to JSON Placeholder to retrive photos
      const { data }: { data: IPhoto[] } = await axios.get<IPhoto[]>(
        'https://jsonplaceholder.typicode.com/photos'
      );
      await photo.savePhotos(data);
      res.status(201).send({ message: 'Photos created sucessfully.' });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  static getPhotos(req: Request, res: Response) {
    res.status(200).send(res.locals.data);
  }
}
