const jwt = require("jsonwebtoken");
const { secret } = require("../controllers/auth.controller");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensjae: "acceso denegado" });
  }

  try {
    const payload = jwt.verify(token, secret);
    console.log(payload);
    req.usuario = payload;
  } catch (e) {
    if (e.name === "JsonWebTokenError") {
      return res.status(401).json({ mensjae: "token invalido" });
    }
  }

  next();
};

module.exports = authMiddleware;
