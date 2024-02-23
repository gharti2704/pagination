import { Photo, Todo } from './models/index.js';
import { Database } from './Database.js';
import { PaginationService } from '../service/PaginationService.js';

export const db = new Database();
export const photo = new Photo().model;
export const todo = new Todo().model;
export const pagination = new PaginationService();
