const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(422);
    res.json({
      errors: result.array().map((e) => ({ msg: e.msg, field: e.path })),
    });
  } else {
    next();
  }
};
