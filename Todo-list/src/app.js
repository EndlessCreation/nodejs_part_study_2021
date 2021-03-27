import bodyparser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { errorHandler, logHandler } from './middlewares/errorHandler.js';
import db from './models/index.js';
import OAtuhRouter from './router/OAuthRouter.js';
import TodoRouter from './router/TodoRouter.js';

const app = express();

// Sequelize Sync
const driver = async () => {
  try {
    await db.sequelize.sync();
  } catch (err) {
    console.error('초기화 실패');
    console.error(err);
    return;
  }

  console.log('초기화 완료.');
};
driver();

// App middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true })); // qs의 기능 포함
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, Authorization');
  next();
});
app.use(morgan('dev'));
app.use(logHandler);
app.use(errorHandler);

// router Settings
app.use('/oauth', OAtuhRouter);
app.use('/todos', TodoRouter);

export default app;
