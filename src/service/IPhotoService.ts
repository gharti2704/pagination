import { IPhoto } from '../interfaces/index.js';

export interface IPhotoService {
  savePhotos(photos: IPhoto[]): Promise<void>;
}
