import bodyParser from 'body-parser';
import express from 'express';
import IndexRouter from './router/IndexRouter';
import TodoRouter from './router/TodoRouter';

const app = express();

// Add middleware
app.use(bodyParser.json());

// Add router
app.use('/', IndexRouter);
app.use('/todo', TodoRouter);

export default app;