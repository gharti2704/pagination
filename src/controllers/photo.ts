import { Request, Response } from 'express';
import axios from 'axios';
import { IPhoto } from '../interfaces/index.js';
import { IPhotoService } from '../service/IPhotoService.js';
export class PhotoController {
  private photoService: IPhotoService;

  constructor(photoService: IPhotoService) {
    this.photoService = photoService;
  }

  public createPhotos = async (req: Request, res: Response) => {
    try {
      //Make an API call to JSON Placeholder to retrive photos
      const { data }: { data: IPhoto[] } = await axios.get<IPhoto[]>(
        'https://jsonplaceholder.typicode.com/photos'
      );

      await this.photoService.savePhotos(data);
      res.status(201).send({ message: 'Photos created successfully.' });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };

  public getPhotos(req: Request, res: Response) {
    res.status(200).send(res.locals.data);
  }
}
