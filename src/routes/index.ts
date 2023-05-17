import { Router } from 'express';
import { createPhotos, createTodos, getPhotos, getTodos } from '../controllers';
import { getPaginatedData } from '../middlewares';
import { Photo, Todo } from '../models';

const router = Router();

router.post('/create-photos', createPhotos);
router.get('/photos', getPaginatedData(Photo), getPhotos);
router.post('/create-todos', createTodos);
router.get('/todos', getPaginatedData(Todo), getTodos);

export const routes = router;
