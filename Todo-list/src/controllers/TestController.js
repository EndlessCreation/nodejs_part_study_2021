export const index = (req, res) => {
  return res.send(`Hi, ${req.params.username}`);
};
