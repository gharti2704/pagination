import express, { Express } from 'express';
import { initDB } from './db';
import { routes } from './routes';

const app: Express = express();

app.use(express.json());

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
  initDB();
});

app.use(routes);
