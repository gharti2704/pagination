import { photo } from '../data/index.js';
import { IPhoto } from '../data/interface/index.js';
import { IPhotoService } from './interface/IPhotoService.js';

export class PhotoService implements IPhotoService {
  public async getPhotos(page: number, limit: number): Promise<IPhoto[]> {
    const photos = await photo
      .find()
      .skip((page - 1) * limit)
      .limit(limit);
    return photos;
  }

  public async savePhotos(photos: IPhoto[]) {
    try {
      await photo.create(photos);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
