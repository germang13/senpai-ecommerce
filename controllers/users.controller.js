const users = [];

exports.createUser = (req, res, next) => {
  users.push(req.body);
  res.json(req.body);
  next();
};
