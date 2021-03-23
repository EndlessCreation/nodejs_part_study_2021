export const logHandler = (err, req, res, next) => {
  console.error('[' + new Date() + ']\n' + err.message);
  next(err);
};
export const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.type('json').send(JSON.stringify({ error: err || 'Uncaught Error !' }, null, 4));
};
