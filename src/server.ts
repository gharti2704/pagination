import express, { Express } from 'express';
import { Database } from './db/index.js';
import { routes } from './routes/index.js';

const app: Express = express();

app.use(express.json());
app.listen(8000, async () => {
  console.log('Server is running on http://localhost:8000');
  await Database.initDB();
});

app.use(routes);
