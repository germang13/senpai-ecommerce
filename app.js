const express = require("express");
const {
  initalLogging,
  finalLogging,
} = require("./middlewares/logging.middleware");
const requestTrackingMiddleware = require("./middlewares/request-tracking.middleware");
const authMiddleware = require("./middlewares/auth.middleware");

const usersRouter = require("./routes/users.router");
const authRouter = require("./routes/auth.router");

const port = 3001;
const app = express();

// middleware pre resolucion de ruta
app.use(express.json());
app.use(requestTrackingMiddleware);
app.use(initalLogging);

// routers
app.use("/usuarios", authMiddleware, usersRouter);
app.use("/auth", authRouter);

// middlewares post resolucion
app.use(finalLogging);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
