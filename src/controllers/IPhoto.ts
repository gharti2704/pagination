import { IPhoto } from '../interfaces/index.js';
import { Request, Response } from 'express'; // Add missing import
export interface IPhotoController {
  createPhotos(req: Request, res: Response): void; // Add return type annotation
  getPhotos(page: number, limit: number): Promise<IPhoto[]>;
}
