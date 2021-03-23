import bodyparser from 'body-parser';
import express from 'express';
import { errorHandler, logHandler } from './middlewares/errorHandler.js';
import TestRouter from './router/TestRouter.js';

const app = express();

// App middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true })); // qs의 기능 포함
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type');
  next();
});
app.use(errorHandler);
app.use(logHandler);

// router Settings
app.use('/', TestRouter);

export default app;
