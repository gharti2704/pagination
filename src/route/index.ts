import { Router } from 'express';
import { PhotoController, TodoController } from '../controller/index.js';
import { pagination, photo, todo } from '../data/index.js';
import { PhotoService } from '../service/PhotoService.js';
import { TodoService } from '../service/TodoService.js';

const router = Router();

const photoService = new PhotoService();
const todoService = new TodoService();

const photoController = new PhotoController(photoService);
const todoController = new TodoController(todoService);

router.post('/create-photos', photoController.createPhotos);
router.get(
  '/photos',
  pagination.paginateData(photo),
  photoController.getPhotos
);
router.post('/create-todos', todoController.createTodos);
router.get('/todos', pagination.paginateData(todo), TodoController.getTodos);

export const routes = router;
