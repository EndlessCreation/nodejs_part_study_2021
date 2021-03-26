import Sequelize from 'sequelize';
import env from '../configs/index.js';
import todo from './todo.js';
import user from './user.js';

const db = {};
const sequelize = new Sequelize(env.sequelizeConfig.database, env.sequelizeConfig.username, env.sequelizeConfig.password, env.sequelizeConfig);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Add Table
db.Todo = todo(sequelize, Sequelize);
db.User = user(sequelize, Sequelize);

// Mapping
db.User.hasMany(db.Todo, { foreignKey: 'writer', sourceKey: 'id' });
db.Todo.belongsTo(db.User, { foreignKey: 'writer', sourceKey: 'id' });

export default db;
