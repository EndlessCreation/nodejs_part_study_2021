import app from './app.js';
import env from './configs/index.js';

app.listen(env.PORT, env.HOST, err => {
  if (err) {
    console.error(err);
  }
  console.log(`server is running on ${env.HOST}:${env.PORT}`);
  console.log(`NODE_ENV is ${env.NODE_ENV}`);
});
