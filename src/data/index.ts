import { Pagination, Photo, Todo } from '../models/index.js';
import { Database } from './Database.js';

export const db = new Database();
export const photo = new Photo().model;
export const todo = new Todo().model;
export const pagination = new Pagination();
