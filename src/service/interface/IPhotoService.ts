import { IPhoto } from '../../data/interface/index.js';

export interface IPhotoService {
  savePhotos(photos: IPhoto[]): Promise<void>;
}
