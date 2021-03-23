import dotenv from 'dotenv';
import path from 'path';
// .env.* loading...
dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'dev';
const __dirname = path.resolve();

if (NODE_ENV === 'prod') dotenv.config({ path: `${__dirname}/.env.prod` });
else if (NODE_ENV === 'dev') dotenv.config({ path: `${__dirname}/.env.dev` });
else if (NODE_ENV === 'test') dotenv.config({ path: `${__dirname}/.env.test` });

const env = process.env;

const sequelizeConfig = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE_DEVELOPMENT,
  host: env.MYSQL_HOST,
  dialect: env.MYSQL_DIALECT,
  port: env.MYSQL_PORT,
  operatorsAliases: env.SEQUELIZE_OPERATORS_BOOLEAN,
};

export default {
  NODE_ENV: NODE_ENV,
  HOST: env.HOST,
  PORT: Number(env.PORT),
  sequelizeConfig,
};
