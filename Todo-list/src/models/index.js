import Sequelize from 'sequelize';
import env from '../configs/index.js';
import todo from './todo.js';

const db = {};
const sequelize = new Sequelize(env.sequelizeConfig.database, env.sequelizeConfig.username, env.sequelizeConfig.password, env.sequelizeConfig);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = todo(sequelize, Sequelize);

export default db;
