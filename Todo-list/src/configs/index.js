import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// .env.* loading...
dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (NODE_ENV === 'production') dotenv.config({ path: `${__dirname}/../../.env.prod` });
else if (NODE_ENV === 'development') dotenv.config({ path: `${__dirname}/../../.env.dev` });
else if (NODE_ENV === 'test') dotenv.config({ path: `${__dirname}/../../.env.test` });

const env = process.env;

const sequelizeConfig = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  timezone: '+09:00',
  host: env.MYSQL_HOST,
  dialect: env.MYSQL_DIALECT,
  port: env.MYSQL_PORT,
  operatorsAliases: env.SEQUELIZE_OPERATORS_BOOLEAN === 'true' ? 1 : 0,
};

export default {
  NODE_ENV: NODE_ENV,
  HOST: env.HOST,
  PORT: Number(env.PORT),
  sequelizeConfig,
};
