import { Schema, model } from 'mongoose';
import { IPhoto, ITodo } from '../interfaces';

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

const todoSchema = new Schema<ITodo>({
  id: {
    type: String,
    unique: true,
    required: [true, 'id field is required'],
  },
  title: {
    type: String,
    required: [true, 'title field is required'],
  },
  completed: {
    type: Boolean,
    required: [true, 'completed field is required'],
  },
});

export const Todo = model<ITodo>('todo', todoSchema);
export const Photo = model<IPhoto>('photo', photoSchema);
