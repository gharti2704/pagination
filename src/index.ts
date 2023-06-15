import express, { Express } from 'express';
import { Database } from './db';
import { routes } from './routes';

const app: Express = express();

app.use(express.json());

app.listen(8000, async () => {
  console.log('Server is running on http://localhost:8000');
  await Database.initDB();
});

app.use(routes);
