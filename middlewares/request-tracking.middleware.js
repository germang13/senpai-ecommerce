const { v4: uuid } = require("uuid");

module.exports = (req, res, next) => {
  res.setHeader("request-id", uuid());
  next();
};
