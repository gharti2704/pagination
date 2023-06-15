import { Router } from 'express';
import { createPhotos, createTodos, getPhotos, getTodos } from '../controllers';
import { Paginate, Photo, Todo } from '../models';

const router = Router();

const photo = new Photo();
const todo = new Todo();
const todoModel = todo.getTodoModel();
const photModel = photo.getPhotoModel();

router.post('/create-photos', createPhotos);
router.get('/photos', Paginate.getPaginatedData(photModel), getPhotos);
router.post('/create-todos', createTodos);
router.get('/todos', Paginate.getPaginatedData(todoModel), getTodos);

export const routes = router;
