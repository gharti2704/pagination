import { Schema, model, Model } from 'mongoose';
import { IPhoto } from '../interfaces/index.js';

export class Photo {
  private photoModel: Model<IPhoto>;

  constructor() {
    const photoSchema = new Schema<IPhoto>({
      id: {
        type: String,
        unique: true,
        required: [true, 'id field is required'],
      },
      title: {
        type: String,
        required: [true, 'title field is required'],
      },
      url: {
        type: String,
        require: [true, 'url field is required'],
      },
      thumbnailUrl: {
        type: String,
        required: [true, 'thumbnailUrl field is required'],
      },
    });
    this.photoModel = model<IPhoto>('photo', photoSchema);
  }

  public async savePhotos(photos: IPhoto[]) {
    try {
      await this.photoModel.create(photos);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  get model() {
    return this.photoModel;
  }
}
