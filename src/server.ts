import express, { Express } from 'express';
import { db } from './data/index.js';
import { routes } from './routes/index.js';

const app: Express = express();

app.use(express.json());
app.listen(8000, async () => {
  console.log('Server is running on http://localhost:8000');
  await db.initDB();
});

app.use(routes);
