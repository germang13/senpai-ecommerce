const initalLogging = (req, res, next) => {
  const fecha = new Date();
  req.startTime = fecha;
  next();
};

const finalLogging = (req, res, next) => {
  const fecha = new Date();
  const tiempo = (fecha - req.startTime) / 1000;
  console.log("finaliza", res.getHeader("request-id"), tiempo);
  next();
};

exports.initalLogging = initalLogging;
exports.finalLogging = finalLogging;
