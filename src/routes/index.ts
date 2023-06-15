import { Router } from 'express';
import { PhotoController, TodoController } from '../controllers/index.js';
import { Pagination, Photo, Todo } from '../models/index.js';

const router = Router();

export const photo = new Photo();
export const todo = new Todo();
const todoModel = todo.model;
const photoModel = photo.model;

router.post('/create-photos', PhotoController.createPhotos);
router.get(
  '/photos',
  Pagination.paginateData(photoModel),
  PhotoController.getPhotos
);
router.post('/create-todos', TodoController.createTodos);
router.get(
  '/todos',
  Pagination.paginateData(todoModel),
  TodoController.getTodos
);

export const routes = router;
